import React, { useState } from 'react';
import Authservice from '../AuthService/AuthService';
import {toast, Toaster} from 'react-hot-toast'

const Register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await Authservice.register(username, password);
      console.log(response.data);
      toast.success('Registered Successfully...');
    } catch (error) {
      console.error(error);
      toast.error('Registration failed...');
    }
  };

  return (
    <div className='inputDivs'>
      <h2>Register Here</h2>
      <div><Toaster position="top-center" /></div>
      <form onSubmit={handleRegister}>
        <input type="text" className='form-control mt-3' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <br/>
        <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <br/>
        <button className='btn btn-outline-dark' type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register