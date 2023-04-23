import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Utils/Firebase/Firebase';
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
        navigate('/Feed')
    }

  return (
    <div className='main'>
      <form className= 'container' onSubmit={handleSubmit}>
      <div className='fields'>
        <input className='input' type = 'email'  required placeholder='Email' name = 'email' value={email} onChange={(event) => setEmail(event.target.value)}/>
        <input className='input' type = 'password'  required placeholder='Password' name = 'password' value={password} onChange={(event) => setPassword(event.target.value)}/><br/>
        <Link to = '/Update'><h6 className = 'update'>Update Account</h6> </Link>
        <button className='btn btn-success' type = 'submit'> Login</button>
      </div>
      </form>
    </div>
  )
}

export default Login

