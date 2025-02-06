import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrors({});

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required.";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("userToken", response.data.token);
        setSuccessMessage("Registration successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/dashboard"; // Redirect to dashboard
        }, 2000);
      }
    } catch (error) {
      setErrors({
        general: error.response?.data?.message || "Registration failed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        {errors.general && (
          <p className="text-red-500 text-sm mb-4">{errors.general}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline transition">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
