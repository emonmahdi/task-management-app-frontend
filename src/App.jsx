import { useState } from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import AddTask from "./components/task/AddTask";
import Tasks from "./components/task/Tasks";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <Navbar togglePopup={togglePopup} />
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="popup-overlay">
              <AddTask closePopup={togglePopup} />
            </div>
          </div>
        </div>
      )}
      <Tasks />
    </div>
  );
}

export default App;
