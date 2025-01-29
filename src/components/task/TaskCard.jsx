/* eslint-disable react/prop-types */
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  const handleEditClick = (taskId) => {
    navigate(`/edit-task/${taskId}`); // Navigate to the edit page
  };

  return (
    <div>
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 w-full max-w-sm mx-auto relative">
        <div className="absolute top-3 right-3 flex space-x-2">
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => handleEditClick(task.id)}
          >
            <AiOutlineEdit size={16} />
          </button>
          <button className="text-red-500 hover:text-red-700">
            <AiOutlineDelete size={16} />
          </button>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {task.name}
        </h3>
        <p className="text-gray-600 mb-4">{task.desc}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Due: {task.due_date}</span>
          <span
            className={`px-3 py-1 rounded-full text-white ${
              task.status === "complete" ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {task.status}
          </span>
        </div>
      </div>
    </div>

    // ==========================
    // <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 w-full max-w-sm mx-auto relative">
    //   <div className="absolute top-3 right-3 flex space-x-2">
    //     <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
    //       <AiOutlineEdit size={16} />
    //     </button>
    //     <button className="text-red-500 hover:text-red-700 cursor-pointer">
    //       <AiOutlineDelete size={16} />
    //     </button>
    //   </div>
    //   <h3 className="text-xl font-semibold text-gray-800 mb-2">{task.name}</h3>
    //   <p className="text-gray-600 mb-4">{task.desc}</p>
    //   <div className="flex justify-between items-center text-sm text-gray-500">
    //     <span>Due: {task.due_date}</span>
    //     <span
    //       className={`px-3 py-1 rounded-full text-white ${
    //         task.status === "complete" ? "bg-green-500" : "bg-yellow-500"
    //       }`}
    //     >
    //       {task.status}
    //     </span>
    //   </div>
    // </div>

    // ============================
    // <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-200 w-full ">
    //   <h3 className="text-xl font-semibold text-gray-800">{task.name}</h3>
    //   <p className="text-gray-600 mt-2">{task.desc}</p>
    //   <div className="mt-3 flex justify-between text-sm text-gray-500">
    //     <span>Due: {task.due_date}</span>
    //     <span
    //       className={`px-3 py-1 rounded-full text-white ${
    //         task.status === "complete" ? "bg-green-500" : "bg-yellow-500"
    //       }`}
    //     >
    //       {task.status}
    //     </span>
    //   </div>
    // </div>
  );
};

export default TaskCard;
