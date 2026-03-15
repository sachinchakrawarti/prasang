// src/public_app/features/auth/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaFeather,
} from "react-icons/fa";
import { useTheme } from "../../../theme";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {
  const { themeName } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Theme-based styling
  const getBgColor = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-50 dark:bg-green-900/20";
      case "lavender":
        return "bg-purple-50 dark:bg-purple-900/20";
      case "rose":
        return "bg-rose-50 dark:bg-rose-900/20";
      case "sepia":
        return "bg-amber-50 dark:bg-amber-900/20";
      case "dark":
        return "bg-gray-900";
      default:
        return "bg-gray-50 dark:bg-gray-900";
    }
  };

  const getCardBg = () => {
    switch (themeName) {
      case "forest":
        return "bg-white dark:bg-green-900/20";
      case "lavender":
        return "bg-white dark:bg-purple-900/20";
      case "rose":
        return "bg-white dark:bg-rose-900/20";
      case "sepia":
        return "bg-white dark:bg-amber-900/20";
      case "dark":
        return "bg-gray-800";
      default:
        return "bg-white dark:bg-gray-800";
    }
  };

  const getTextPrimary = () => {
    switch (themeName) {
      case "forest":
        return "text-green-900 dark:text-green-100";
      case "lavender":
        return "text-purple-900 dark:text-purple-100";
      case "rose":
        return "text-rose-900 dark:text-rose-100";
      case "sepia":
        return "text-amber-900 dark:text-amber-100";
      case "dark":
        return "text-white";
      default:
        return "text-gray-900 dark:text-white";
    }
  };

  const getTextSecondary = () => {
    switch (themeName) {
      case "forest":
        return "text-green-700 dark:text-green-300";
      case "lavender":
        return "text-purple-700 dark:text-purple-300";
      case "rose":
        return "text-rose-700 dark:text-rose-300";
      case "sepia":
        return "text-amber-700 dark:text-amber-300";
      case "dark":
        return "text-gray-300";
      default:
        return "text-gray-600 dark:text-gray-300";
    }
  };

  const getBorderColor = () => {
    switch (themeName) {
      case "forest":
        return "border-green-200 dark:border-green-800";
      case "lavender":
        return "border-purple-200 dark:border-purple-800";
      case "rose":
        return "border-rose-200 dark:border-rose-800";
      case "sepia":
        return "border-amber-200 dark:border-amber-800";
      case "dark":
        return "border-gray-700";
      default:
        return "border-gray-200 dark:border-gray-700";
    }
  };

  const getButtonBg = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-600 hover:bg-green-700";
      case "lavender":
        return "bg-purple-600 hover:bg-purple-700";
      case "rose":
        return "bg-rose-600 hover:bg-rose-700";
      case "sepia":
        return "bg-amber-600 hover:bg-amber-700";
      case "dark":
        return "bg-gray-700 hover:bg-gray-600";
      default:
        return "bg-amber-600 hover:bg-amber-700";
    }
  };

  const getIconColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-500 dark:text-green-400";
      case "lavender":
        return "text-purple-500 dark:text-purple-400";
      case "rose":
        return "text-rose-500 dark:text-rose-400";
      case "sepia":
        return "text-amber-500 dark:text-amber-400";
      case "dark":
        return "text-gray-400";
      default:
        return "text-amber-500 dark:text-amber-400";
    }
  };

  const bgColor = getBgColor();
  const cardBg = getCardBg();
  const textPrimary = getTextPrimary();
  const textSecondary = getTextSecondary();
  const borderColor = getBorderColor();
  const buttonBg = getButtonBg();
  const iconColor = getIconColor();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(formData.email, formData.password);
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Demo credentials for quick login
  const demoUsers = [
    { email: "user@example.com", password: "password123", name: "John Doe" },
    { email: "poet@example.com", password: "poet123", name: "Jane Smith" },
  ];

  const fillDemoCredentials = (email, password) => {
    setFormData({ email, password });
  };

  return (
    <div
      className={`min-h-screen ${bgColor} py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center`}
    >
      <div
        className={`max-w-md w-full ${cardBg} rounded-2xl shadow-xl p-8 border ${borderColor}`}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <FaFeather className={`text-4xl ${iconColor}`} />
          </div>
          <h2 className={`text-3xl font-bold ${textPrimary}`}>Welcome Back</h2>
          <p className={`mt-2 ${textSecondary}`}>
            Sign in to your Prasang account
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className={`block text-sm font-medium ${textSecondary} mb-2`}
            >
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className={`absolute left-3 top-3 ${iconColor}`} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full pl-10 pr-3 py-2 border ${borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-transparent ${textPrimary}`}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${textSecondary} mb-2`}
            >
              Password
            </label>
            <div className="relative">
              <FaLock className={`absolute left-3 top-3 ${iconColor}`} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`w-full pl-10 pr-10 py-2 border ${borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-transparent ${textPrimary}`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-3 ${textSecondary} hover:${iconColor}`}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className={`ml-2 block text-sm ${textSecondary}`}
              >
                Remember me
              </label>
            </div>

            <Link
              to="/forgot-password"
              className={`text-sm ${iconColor} hover:underline`}
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${buttonBg} text-white py-2 px-4 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Demo Users */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${borderColor}`}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${cardBg} ${textSecondary}`}>
                Demo Accounts
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {demoUsers.map((user, index) => (
              <button
                key={index}
                onClick={() => fillDemoCredentials(user.email, user.password)}
                className={`p-3 border ${borderColor} rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition`}
              >
                <p className={`text-sm font-medium ${textPrimary}`}>
                  {user.name}
                </p>
                <p className={`text-xs ${textSecondary}`}>Click to use</p>
              </button>
            ))}
          </div>
        </div>

        {/* Sign Up Link */}
        <p className={`mt-8 text-center text-sm ${textSecondary}`}>
          Don't have an account?{" "}
          <Link
            to="/signup"
            className={`${iconColor} hover:underline font-medium`}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
