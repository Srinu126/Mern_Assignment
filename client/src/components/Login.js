import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Login() {
    let navigate = useNavigate();
    const [email, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userDetails, setUserDetails] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/login")
        console.log("i am the response", response.data.data[0].role)
        if (response.data.data[0].role === 'EMPLOYEE') {
            let path = `employee`;
            navigate(path);

        } else {
            let path = `admin`;
            navigate(path);

        }
    }
    return (
        <>
            <form style={{marginTop:'50px',marginLeft:'250px'}}>
                <div className='form-group' style={{ width: '500px' }}>
                    <label>Email</label>
                    {/* eslint-disable-next-line no-undef */}
                    <input type='email' className='form-control' placeholder="Enter Email" onChange={(e) => setUserEmail(e.target.value)} name="email" id="email" />
                </div>
                <div className='form-group' style={{ width: '500px' }}>
                    <label>Password</label>
                    {/* eslint-disable-next-line no-undef */}
                    <input type='password' className='form-control' placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" />
                </div><br/>
                <div className='form-group' style={{ width: '500px' }}>
                    <button className='form-control btn btn-primary' onClick={handleSubmit}>Login</button>
                </div>
            </form>
        </>
    )
}
export default Login;