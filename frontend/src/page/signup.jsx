import React, { useContext, useState } from "react";
import background from "../assets/loginbackground.png";
import google from "../assets/googlelogo.png";
import AuthContext from "../context/AuthContext";

/**
 * SignUp Component: Handles user registration by capturing form inputs
 * and sending the data to the backend via the AuthContext.
 */
const SignUp = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // Access the registerUser function from the AuthContext
  const { registerUser } = useContext(AuthContext);

  /**
   * Handle form submission.
   * Validates the input and calls the registerUser function.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, username, password, password2 } = formData;
    console.log(formData)

    // Validate password match
    if (password !== password2) {
      setErrors({ password2: "Passwords do not match" });
      return;
    }

    try {
      // Attempt registration using AuthContext
      await registerUser(email, username, password , password2);
    } catch (err) {
      // Handle errors from the server response
      setErrors(err.response?.data || { general: "An error occurred. Please try again." });
    }
  };

  /**
   * Handle input changes and clear existing errors.
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value, // Update the specific field
    });
    setErrors({}); // Clear errors as the user types
  };

  return (
    <div className="max-w-full mt-20">
      {/* Full-page container */}
      <div className="relative min-h-screen z-10 flex flex-col justify-between pt-5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img src={background} alt="Login background" className="w-full h-full object-cover" />
        </div>

        {/* Form Container */}
        <div className="relative z-10 flex flex-col items-center m-6">
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Create an account</h1>
            <h3 className="text-lg mb-6">Hi, Welcome</h3>

            {/* General Error Display */}
            {errors.general && <p className="text-red-600">{errors.general}</p>}

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-5 mb-6">
              <div className="space-y-2">
                {/* Username Field */}
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full p-2 border rounded-lg"
                  placeholder="John Doe"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && <p className="text-red-600">{errors.username}</p>}

                {/* Email Field */}
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-lg"
                  placeholder="E.g. johndoe@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="text-red-600">{errors.email}</p>}

                {/* Password Field */}
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Enter Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 border-gray-300 rounded-lg"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <p className="text-red-600">{errors.password}</p>}

                {/* Confirm Password Field */}
                <label htmlFor="password2" className="block text-sm font-medium text-gray-700">
                  Re-Enter Password
                </label>
                <input
                  type="password"
                  id="password2"
                  className="w-full p-2 border-gray-300 rounded-lg"
                  placeholder="Confirm your password"
                  value={formData.password2}
                  onChange={handleChange}
                  required
                />
                {errors.password2 && <p className="text-red-600">{errors.password2}</p>}
              </div>

              {/* Submit Button and Google Login Option */}
              <div className="flex flex-col items-center space-y-4">
                <button type="submit" className="w-full py-2 bg-green-700 text-white rounded-lg">
                  Create an account
                </button>
                <h2>Or</h2>
                <button
                  type="button"
                  className="flex items-center justify-center border border-gray-300 bg-white text-black py-2 px-4 rounded-lg"
                >
                  <img className="w-5 h-5 mr-3" src={google} alt="Google logo" />
                  Login with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
