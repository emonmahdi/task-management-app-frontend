/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTask = ({ closePopup }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { taskName, description, dueDate, status };
    console.log("Task Added:", task);

    // Clear form fields
    setTaskName("");
    setDescription("");
    setDueDate("");
    setStatus("Pending");

    // Close popup after submission
    closePopup();
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg w-[50%] mx-auto relative">
      {/* Close button */}
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        onClick={closePopup}
      >
        ✕
      </button>

      {/* Form Title */}
      <h2 className="text-xl font-bold mb-4 text-center text-purple-700">
        Add New Task
      </h2>

      {/* Add Task Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Task Name
          </label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="Enter task name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="Enter task description"
            rows="4"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
