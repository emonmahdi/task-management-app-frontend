import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  // Update Task Function
  const handleUpdateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  useEffect(() => {
    const getTasks = async () => {
      fetch("./tasks.json")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTasks(data);
        });
    };
    getTasks();
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onUpdate={handleUpdateTask} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
