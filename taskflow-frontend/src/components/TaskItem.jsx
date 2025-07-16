import React from "react";

const TaskItem = ({ task, onDelete, onToggleStatus }) => {
  return (
    <div
      className={`p-4 border rounded-lg shadow-md flex justify-between items-center transition-all duration-300 ${
        task.status === "DONE" ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <div>
        <h3 className="font-bold text-lg">{task.title}</h3>
        {task.description && (
          <p className="text-gray-700 text-sm">{task.description}</p>
        )}
        <p className="text-xs text-gray-500 mb-1">Status: {task.status}</p>

        <div className="flex gap-2">
          <button
            onClick={() => onToggleStatus(task)}
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
          >
            {task.status === "DONE" ? "Mark as Pending" : "Mark as Done"}
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
