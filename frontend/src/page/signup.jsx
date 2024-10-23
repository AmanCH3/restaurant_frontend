import React, { useState } from 'react';
import background from '../assets/loginbackground.png';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import google from '../assets/googlelogo.png';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    privacyPolicyAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [emailIsValid, setEmailIsValid] = useState(true); // State to track email validity

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    
    // Check email validity as user types
    if (e.target.id === 'email') {
      validateEmail(e.target.value);
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.checked,
    });
  };

  // Function to validate email format
  const validateEmail = (email) => {
    // Simple email regex pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailIsValid(emailPattern.test(email));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors before new submission
    setErrors({});
    
    // Simple frontend validation (e.g., check terms accepted)
    if (!formData.termsAccepted || !formData.privacyPolicyAccepted) {
      setErrors({ terms: 'You must agree to the terms and privacy policy.' });
      return;
    }

    if (!emailIsValid) {
      setErrors({ email: 'Invalid email format.' });
      return;
    }

    try {
      // Send form data to the backend for validation
      const response = await fetch('/user_create_post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.username.split(' ')[0],
          last_name: formData.username.split(' ')[1] || '',
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });
      
      const result = await response.json();

      if (!response.ok) {
        // Handle validation errors from the backend
        setErrors(result.errors || { general: 'An error occurred during sign-up.' });
      } else {
        // Redirect to login page or show success message
        window.location.href = '/login?signup=success';
      }
    } catch (error) {
      setErrors({ general: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div className='w-max[full]'>
      <div className='mb-20'>
        <NavBar />
      </div>
      <div className="relative min-h-screen z-10 flex flex-col justify-between pt-5">
        <div className="absolute inset-0 z-0 w-full h-full">
          <img src={background} alt="Login background" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 flex flex-col items-center m-6">
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Create an account</h1>
            <h3 className="text-lg mb-6">Hi, Welcome</h3>

            {errors.general && <p className="text-red-600">{errors.general}</p>}

            <form onSubmit={handleSubmit} className="space-y-5 mb-6 ">
              <div className='space-y-2'>
                <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Username</label>
                <input 
                  type="text"
                  id='username'
                  className='w-full p-2 border-gray-300 rounded-lg '
                  placeholder='Jhon Doe'
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && <p className="text-red-600">{errors.username}</p>}

                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className={`w-full p-2 border ${emailIsValid ? 'border-gray-300' : 'border-red-500'} rounded-lg`} 
                  placeholder="E.g. johndoe@gmail.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                {/* {!emailIsValid && <p className="text-red-600">Please enter a valid email address.</p>} */}
                {/* {errors.email && <p className="text-red-600">{errors.email}</p>} */}

                <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Enter Password</label>
                <input 
                  type="password"
                  id='password'
                  className='w-full p-2 border-gray-300 rounded-lg '
                  placeholder='Enter your password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <p className="text-red-600">{errors.password}</p>}

                <label htmlFor="confirmPassword" className='block text-sm font-medium text-gray-700'>Re-Enter Password</label>
                <input 
                  type="password"
                  id='confirmPassword'
                  className='w-full p-2 border-gray-300 rounded-lg '
                  placeholder='Confirm your password'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}
              </div>
              {errors.terms && <p className="text-red-600">{errors.terms}</p>}

              <div className="flex flex-col justify-between mb-6">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="termsAccepted" 
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <span>I have read and agree to the Terms and conditions.</span>
                </label>

                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="privacyPolicyAccepted" 
                    checked={formData.privacyPolicyAccepted}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <span>I consent to the Privacy Policy.</span>
                </label>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <button type="submit" className="w-full py-2 bg-green-700 text-white rounded-lg">Create my account</button>
                <h2>Or</h2>
                <button className="flex items-center justify-center border border-gray-300 bg-white text-black py-2 px-4 rounded-lg">
                  <img className="w-5 h-5 mr-3" src={google} alt="Google logo" />
                  Login with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
