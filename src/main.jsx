import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import EditTask from "./components/task/EditTask.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/edit-task/:taskId" element={<EditTask />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* <Route path="/add-task" element={<AddTask />}></Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
