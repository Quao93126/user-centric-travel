import axios from "axios";

const API_URL = "https://user-centric-travel-backend.onrender.com/users/";

const register = (username, email, password) => axios.post(`${API_URL}register`, { username, email, password });

const login = (email, password) => 
  axios.post(`${API_URL}login`, {
    email,
    password
  })
  .then((response) => {
    console.log(response.data)
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
