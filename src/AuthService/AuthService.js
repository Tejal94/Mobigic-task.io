import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

const register = (username, password) => {
  return axios.post(API_URL + 'register', {
    username,
    password
  });
};

const login = (username, password) => {

  return axios.post(API_URL + 'login', {
    username,
    password
  }).then((response) => {
    const { accessToken } = response.data;
    if (accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('accessToken', accessToken);
    }
    return response.data;
  });
};

const Authservice = {
  register,
  login
};

export default Authservice