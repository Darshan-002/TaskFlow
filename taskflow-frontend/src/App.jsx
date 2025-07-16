import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-center text-3xl font-bold text-blue-600 mb-8">
        📝 TaskFlow – Task Manager
      </h1>
      <TaskForm onTaskCreated={triggerRefresh} />
      <TaskList key={refresh} />
    </div>
  );
}

export default App;
