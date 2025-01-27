/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router";

const Navbar = ({ togglePopup }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Simulate authentication
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false); // Simulate logout
    setIsDropdownOpen(false); // Close dropdown
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side - Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          Task App
        </Link>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Conditionally Render Add Task Button */}
          {isAuthenticated && (
            <Link
              onClick={togglePopup}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition cursor-pointer"
            >
              Add Task
            </Link>
          )}

          {/* Conditionally Render Login/Register or Profile Menu */}
          {!isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-white hover:underline transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:underline transition"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded hover:shadow transition"
              >
                <span>Profile</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 9.75l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
