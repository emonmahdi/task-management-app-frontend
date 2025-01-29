import { useNavigate } from "react-router";
import Navbar from "../common/Navbar";

const EditTask = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
          <input
            type="text"
            name="name"
            value=""
            className="w-full p-2 border rounded mb-2"
            readOnly
          />
          <textarea
            name="desc"
            value=""
            className="w-full p-2 border rounded mb-2"
            readOnly
          ></textarea>
          <input
            type="date"
            name="due_date"
            value=""
            className="w-full p-2 border rounded mb-2"
            readOnly
          />
          <div className="flex justify-end space-x-2">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;
