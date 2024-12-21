import { createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => {
    const tokens = localStorage.getItem("access");
    return tokens ? JSON.parse(tokens) : null;
  });

  const [user, setUser] = useState(() => {
    const tokens = localStorage.getItem("access");
    return tokens ? jwtDecode(tokens) : null;
  });

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Login User
  const loginUser = async (email, password) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password }),
      });
      console.log(response.formData)

      if (response.ok) {
        const data = await response.json();
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("access", JSON.stringify(data));
        Swal.fire({
          title: "Login Successful",
          icon: "success",
          toast: true,
          timer: 3000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
        navigate("/");
      } else {
        Swal.fire({
          title: "Invalid Credentials",
          icon: "error",
          toast: true,
          timer: 3000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "Server Error",
        icon: "error",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  // Register User
  const registerUser = async (email, username, password, password2) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, password2 }),
      });
  
      if (response.status === 201) {
        Swal.fire({
          title: "Registration Successful, Login Now",
          icon: "success",
          toast: true,
          timer: 3000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
        navigate("/login");
      } else {
        const errorData = await response.json(); // Parse error response from backend
        return errorData; // Return errors to the SignUp component
      }
    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire({
        title: "Server Error",
        icon: "error",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };
  
  // Logout User
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("access");
    Swal.fire({
      title: "Logged Out",
      icon: "success",
      toast: true,
      timer: 3000,
      position: "top-right",
      timerProgressBar: true,
      showConfirmButton: false,
    });
    navigate("/login");
  };

  // Update User on Tokens Change
  useEffect(() => {
    if (authTokens) {
      setUser(jwtDecode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens]);

  // Context Data
  const contextData = {
    user,
    authTokens,
    loginUser,
    registerUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};