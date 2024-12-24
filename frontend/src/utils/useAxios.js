import axios from "axios";
import {jwtDecode} from "jwt-decode"
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";

export const baseURL = "http://51.24.22.67/api";

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  // Return early if authTokens are not available
  if (!authTokens) {
    throw new Error("Authentication tokens are missing.");
  }

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.access}` }
  });

  axiosInstance.interceptors.request.use(async req => {
    try {
      // Decode token only when necessary
      const user = jwtDecode(authTokens.access);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      if (!isExpired) return req;

      // If the token is expired, refresh it
      const response = await axios.post(`${baseURL}/token/refresh/`, {
        refresh: authTokens.refresh
      });

      // Save new tokens in localStorage and context
      localStorage.setItem("authTokens", JSON.stringify(response.data)); // Only one call
      setAuthTokens(response.data);
      setUser(jwtDecode(response.data.access));

      req.headers.Authorization = `Bearer ${response.data.access}`;
      return req;

    } catch (error) {
      // Handle the error appropriately, maybe log out the user or notify them
      console.error("Error in Axios interceptor:", error);
      throw error;
    }
  });

  return axiosInstance;
};

export default useAxios;
