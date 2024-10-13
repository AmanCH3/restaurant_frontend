import React from 'react';
import background from '../assets/loginbackground.png';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import google from '../assets/googlelogo.png';

const SignUp = () => {
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
          <h1 className="text-2xl font-bold mb-4">Create an account</h1>
          <h3 className="text-lg mb-6">Hi, Welcome </h3>

         

          <form className="space-y-5 mb-6 ">
            <div className='space-y-2'>
            {/* your username */}
            <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Username</label>
            <input type="username"
            id='username'
            className='w-full p-2 border-gray-300 rounded-lg '
            placeholder='Jhondoe.12'
            required
             />
            
            {/* your email  */}
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              placeholder="E.g. johndoe@gmail.com" 
              required 
            />

            {/* your pASSWORD */}

            <label htmlFor="Enter Password" className='block text-sm font-medium text-gray-700'>Enter Password</label>
            <input type="password"
            id='password'
            className='w-full p-2 border-gray-300 rounded-lg '
            placeholder='Enter your password'
            required
             />



            {/* confirm password */}
            <label htmlFor="Re-Enter Password" className='block text-sm font-medium text-gray-700'>Re-Enter Password</label>
            <input type="confirmpassword"
            id='confirmpassword'
            className='w-full p-2 border-gray-300 rounded-lg '
            placeholder='Enter your password'
            required
             />

            </div>

            
          </form>

          <div className="flex flex-col justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>I have read and agree to the Terms and conditions .</span>
            </label>

            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>I consent to the Privacy Policy..</span>
            </label>


           
          </div>

          {/* create account button */}

          <div className="flex flex-col items-center space-y-4">
            <button className="w-full py-2 bg-green-700 text-white rounded-lg">Create my account</button>


            <h2>Or</h2>

            <button className="flex items-center justify-center border border-gray-300 bg-white text-black py-2 px-4 rounded-lg" >
                <img className="w-5 h-5 mr-3" src={google} alt="Google logo" />
                Login with Google
            </button>
          </div>
          
        </div>
      </div>

     
      <Footer />
    </div>
  );
};

export default SignUp;
