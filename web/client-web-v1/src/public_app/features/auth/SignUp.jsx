// src/public_app/features/auth/SignUp.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaFeather,
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { useTheme } from "../../../theme";
import { useAuth } from "../../../context/AuthContext";

const SignUp = () => {
  const { themeName } = useTheme();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Password validation
  const [passwordChecks, setPasswordChecks] = useState({
    length: false,
    number: false,
    uppercase: false,
    lowercase: false,
    special: false,
    match: false,
  });

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

  const getTextTertiary = () => {
    switch (themeName) {
      case "forest":
        return "text-green-600 dark:text-green-400";
      case "lavender":
        return "text-purple-600 dark:text-purple-400";
      case "rose":
        return "text-rose-600 dark:text-rose-400";
      case "sepia":
        return "text-amber-600 dark:text-amber-400";
      case "dark":
        return "text-gray-400";
      default:
        return "text-gray-500 dark:text-gray-400";
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

  const getInputFocusRing = () => {
    switch (themeName) {
      case "forest":
        return "focus:ring-green-500";
      case "lavender":
        return "focus:ring-purple-500";
      case "rose":
        return "focus:ring-rose-500";
      case "sepia":
        return "focus:ring-amber-500";
      case "dark":
        return "focus:ring-gray-500";
      default:
        return "focus:ring-amber-500";
    }
  };

  const bgColor = getBgColor();
  const cardBg = getCardBg();
  const textPrimary = getTextPrimary();
  const textSecondary = getTextSecondary();
  const textTertiary = getTextTertiary();
  const borderColor = getBorderColor();
  const iconColor = getIconColor();
  const buttonBg = getButtonBg();
  const inputFocusRing = getInputFocusRing();

  // Validate password
  const validatePassword = (password) => {
    setPasswordChecks({
      length: password.length >= 8,
      number: /\d/.test(password),
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      match: password === formData.confirmPassword,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === "password") {
      validatePassword(value);
    }

    if (name === "confirmPassword" || name === "password") {
      setPasswordChecks((prev) => ({
        ...prev,
        match:
          name === "confirmPassword"
            ? value === formData.password
            : formData.confirmPassword === value,
      }));
    }

    setError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.username.trim()) {
      setError("Username is required");
      return false;
    }
    if (formData.username.length < 3) {
      setError("Username must be at least 3 characters");
      return false;
    }
    if (!formData.password) {
      setError("Password is required");
      return false;
    }
    if (!Object.values(passwordChecks).every((check) => check === true)) {
      setError("Please meet all password requirements");
      return false;
    }
    if (!formData.agreeTerms) {
      setError("You must agree to the terms and conditions");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      await signup({
        name: formData.name,
        email: formData.email,
        username: formData.username,
        password: formData.password,
      });
      setSuccess(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      setError(err.message || "Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = (provider) => {
    // Implement social signup
    console.log(`Sign up with ${provider}`);
  };

  const allChecksPassed = Object.values(passwordChecks).every(
    (check) => check === true,
  );

  return (
    <div
      className={`min-h-screen ${bgColor} py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center`}
    >
      <div
        className={`max-w-md w-full ${cardBg} rounded-2xl shadow-xl p-8 border ${borderColor}`}
      >
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <FaFeather className={`text-4xl ${iconColor}`} />
          </div>
          <h2 className={`text-3xl font-bold ${textPrimary}`}>
            Create Account
          </h2>
          <p className={`mt-1 ${textSecondary}`}>Join the Prasang community</p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm flex items-center gap-2">
            <FaCheck className="text-green-500" />
            Account created successfully! Redirecting...
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label
              className={`block text-sm font-medium ${textSecondary} mb-1`}
            >
              Full Name
            </label>
            <div className="relative">
              <FaUser className={`absolute left-3 top-3 ${iconColor}`} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full pl-10 pr-3 py-2 border ${borderColor} rounded-lg focus:outline-none focus:ring-2 ${inputFocusRing} bg-transparent ${textPrimary}`}
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              className={`block text-sm font-medium ${textSecondary} mb-1`}
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
                className={`w-full pl-10 pr-3 py-2 border ${borderColor} rounded-lg focus:outline-none focus:ring-2 ${inputFocusRing} bg-transparent ${textPrimary}`}
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label
              className={`block text-sm font-medium ${textSecondary} mb-1`}
            >
              Username
            </label>
            <div className="relative">
              <span className={`absolute left-3 top-2 ${textTertiary}`}>@</span>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className={`w-full pl-8 pr-3 py-2 border ${borderColor} rounded-lg focus:outline-none focus:ring-2 ${inputFocusRing} bg-transparent ${textPrimary}`}
                placeholder="johndoe"
              />
            </div>
            {formData.username && formData.username.length < 3 && (
              <p className="text-xs text-red-500 mt-1">
                Username must be at least 3 characters
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              className={`block text-sm font-medium ${textSecondary} mb-1`}
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
                className={`w-full pl-10 pr-10 py-2 border ${borderColor} rounded-lg focus:outline-none focus:ring-2 ${inputFocusRing} bg-transparent ${textPrimary}`}
                placeholder="Create a password"
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

          {/* Confirm Password */}
          <div>
            <label
              className={`block text-sm font-medium ${textSecondary} mb-1`}
            >
              Confirm Password
            </label>
            <div className="relative">
              <FaLock className={`absolute left-3 top-3 ${iconColor}`} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={`w-full pl-10 pr-10 py-2 border ${borderColor} rounded-lg focus:outline-none focus:ring-2 ${inputFocusRing} bg-transparent ${textPrimary}`}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={`absolute right-3 top-3 ${textSecondary} hover:${iconColor}`}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Password Requirements */}
          {formData.password && (
            <div
              className={`p-3 ${cardBg} rounded-lg border ${borderColor} space-y-2`}
            >
              <p className={`text-xs font-medium ${textSecondary} mb-1`}>
                Password requirements:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-1">
                  {passwordChecks.length ? (
                    <FaCheck className="text-green-500" size={10} />
                  ) : (
                    <FaTimes className="text-red-500" size={10} />
                  )}
                  <span className={`text-xs ${textTertiary}`}>
                    8+ characters
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {passwordChecks.number ? (
                    <FaCheck className="text-green-500" size={10} />
                  ) : (
                    <FaTimes className="text-red-500" size={10} />
                  )}
                  <span className={`text-xs ${textTertiary}`}>Number</span>
                </div>
                <div className="flex items-center gap-1">
                  {passwordChecks.uppercase ? (
                    <FaCheck className="text-green-500" size={10} />
                  ) : (
                    <FaTimes className="text-red-500" size={10} />
                  )}
                  <span className={`text-xs ${textTertiary}`}>Uppercase</span>
                </div>
                <div className="flex items-center gap-1">
                  {passwordChecks.lowercase ? (
                    <FaCheck className="text-green-500" size={10} />
                  ) : (
                    <FaTimes className="text-red-500" size={10} />
                  )}
                  <span className={`text-xs ${textTertiary}`}>Lowercase</span>
                </div>
                <div className="flex items-center gap-1">
                  {passwordChecks.special ? (
                    <FaCheck className="text-green-500" size={10} />
                  ) : (
                    <FaTimes className="text-red-500" size={10} />
                  )}
                  <span className={`text-xs ${textTertiary}`}>
                    Special char
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {passwordChecks.match ? (
                    <FaCheck className="text-green-500" size={10} />
                  ) : (
                    <FaTimes className="text-red-500" size={10} />
                  )}
                  <span className={`text-xs ${textTertiary}`}>
                    Passwords match
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Terms and Conditions */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
            />
            <label className={`text-xs ${textSecondary}`}>
              I agree to the{" "}
              <Link to="/terms" className={`${iconColor} hover:underline`}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className={`${iconColor} hover:underline`}>
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !allChecksPassed || !formData.agreeTerms}
            className={`w-full ${buttonBg} text-white py-2 px-4 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Social Sign Up */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${borderColor}`}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${cardBg} ${textSecondary}`}>
                Or sign up with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button
              onClick={() => handleSocialSignup("google")}
              className={`flex justify-center items-center p-2 border-2 ${borderColor} rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition`}
            >
              <FaGoogle className="text-red-500" size={20} />
            </button>
            <button
              onClick={() => handleSocialSignup("github")}
              className={`flex justify-center items-center p-2 border-2 ${borderColor} rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition`}
            >
              <FaGithub className={textPrimary} size={20} />
            </button>
            <button
              onClick={() => handleSocialSignup("twitter")}
              className={`flex justify-center items-center p-2 border-2 ${borderColor} rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition`}
            >
              <FaTwitter className="text-blue-400" size={20} />
            </button>
          </div>
        </div>

        {/* Login Link */}
        <p className={`mt-8 text-center text-sm ${textSecondary}`}>
          Already have an account?{" "}
          <Link
            to="/login"
            className={`${iconColor} hover:underline font-medium`}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
