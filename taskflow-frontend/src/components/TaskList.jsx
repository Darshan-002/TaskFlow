import { useEffect, useState } from "react";
import { getAllTasks, deleteTask, updateTask } from "../api/taskApi";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getAllTasks();
      setTasks(data.reverse());
      setLoading(false);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await deleteTask(id);
      fetchTasks();
    }
  };

  const handleToggleStatus = async (task) => {
    const updated = {
      ...task,
      status: task.status === "PENDING" ? "DONE" : "PENDING",
    };
    await updateTask(task.id, updated);
    fetchTasks();
  };

  if (loading)
    return <p className="text-center mt-4 text-gray-600">Loading tasks...</p>;
  if (tasks.length === 0)
    return <p className="text-center mt-4 text-gray-600">No tasks found.</p>;

  return (
    <div className="max-w-2xl mx-auto space-y-4 mt-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      ))}
    </div>
  );
};

export default TaskList;
