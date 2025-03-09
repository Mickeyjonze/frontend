import { useState } from "react";
import { FaBitcoin, FaGoogle } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    )
      newErrors.email = "Enter a valid email.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign-Up Clicked");
    // Integrate Google Sign-In API here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 shadow-xl rounded-2xl border border-blue-500">
        <h2 className="text-3xl font-extrabold text-center text-white flex items-center justify-center gap-2">
          <FaBitcoin className="text-amber-500" /> Register
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full mt-1 p-3 bg-gray-800 border ${
                errors.name ? "border-amber-500" : "border-gray-600"
              } rounded-lg focus:ring focus:ring-blue-400 text-white placeholder-gray-500`}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-amber-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full mt-1 p-3 bg-gray-800 border ${
                errors.email ? "border-amber-500" : "border-gray-600"
              } rounded-lg focus:ring focus:ring-blue-400 text-white placeholder-gray-500`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-amber-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full mt-1 p-3 bg-gray-800 border ${
                errors.password ? "border-amber-500" : "border-gray-600"
              } rounded-lg focus:ring focus:ring-blue-400 text-white placeholder-gray-500`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-amber-400 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full mt-1 p-3 bg-gray-800 border ${
                errors.confirmPassword ? "border-amber-500" : "border-gray-600"
              } rounded-lg focus:ring focus:ring-blue-400 text-white placeholder-gray-500`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-amber-400 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-yellow-600 hover:to-amber-500 transition rounded-lg font-semibold shadow-lg"
          >
            Register
          </button>
        </form>

        {/* Google Sign Up Button */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full mt-4 py-3 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 transition rounded-lg font-semibold shadow-lg"
        >
          <FaGoogle /> Sign Up with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
