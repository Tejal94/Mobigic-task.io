import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Authservice from '../AuthService/AuthService';
import { toast, Toaster } from 'react-hot-toast'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await Authservice.login(username, password);

      localStorage.setItem("user", username);
      toast.success('Login successful...');
      console.log(user);
      navigate('/filelist')
    } catch (err) {
      console.error(err);
      toast.error('Login failed...');
    }
  };


  return (
    <div>
      <div><Toaster position="top-center" /></div>

      <div className='inputDivs'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" className='mt-3 form-control' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          <br/>
          <input type="password" className='mt-1 form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <br/>
          <button type="submit" className='btn btn-outline-dark'>Login</button>
        </form>

        <p className='mt-3'>Not a member? <Link to={'/register'}>Register Now</Link></p>
      </div>
    </div>
  )
}

export default Login