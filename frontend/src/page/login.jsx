import React from 'react';
import background from '../assets/loginbackground.png';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import facebook from '../assets/facebooklogo.png';
import google from '../assets/googlelogo.png';

const Login = () => {
  return (
    <div className="relative min-h-screen z-10 flex flex-col justify-between">
      {/* Navbar */}
      <NavBar />

      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img src={background} alt="Login background" className="w-full h-full object-cover" />
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex flex-col items-center m-6">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <h3 className="text-lg mb-6">Hi, Welcome back</h3>

          <div className="flex flex-col space-y-4 mb-6">
            <button className="flex items-center justify-center border border-gray-300 bg-white text-black py-2 px-4 rounded-lg">
              <img className="w-5 h-5 mr-3" src={google} alt="Google logo" />
              Login with Google
            </button>
            <button className="flex items-center justify-center border border-blue-600 bg-blue-600 text-white py-2 px-4 rounded-lg">
              <img className="w-5 h-5 mr-3" src={facebook} alt="Facebook logo" />
              Login with Facebook
            </button>
          </div>

          <form className="space-y-4 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                placeholder="E.g. johndoe@gmail.com" 
                required 
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                placeholder="Enter your password" 
                required 
              />
            </div>
          </form>

          <div className="flex justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Remember me</span>
            </label>
            <button className="text-green-700 hover:underline">Forgot Password?</button>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button className="w-full py-2 bg-green-700 text-white rounded-lg">Login</button>
            <h2 className="text-sm">
              Not registered yet? <a href="#" className="text-green-700 hover:underline">Create an account</a>
            </h2>
          </div>
          
        </div>
      </div>

     
      <Footer />
    </div>
  );
};

export default Login;
