import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import './Login.css'

export default function Login(props) {
    const history = useHistory();
	const initialFormData = Object.freeze({
		username: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
		console.log(formData);
        axiosInstance
            .post('api/token/', {
                username: formData.username,
                password: formData.password
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                localStorage.setItem('auth_status', 'logged_in');
                axiosInstance.defaults.headers['Authorization'] = 
                    'JWT ' + localStorage.getItem('access_token');
                console.log(res.data);
                props.handleRefresh(true);
                history.push('/');
            })
            .catch((error) => console.log(error));
    };
    return (
        <form noValidate>
            <div className="container">
                <h1>Login</h1>

                <label htmlFor="username"><b>Username</b></label>
                <hr></hr>
                <input value={formData.username} type="text" placeholder="Enter Username" name="username" onChange={handleChange} id="username" required />
                <hr></hr>
                <label htmlFor="password"><b>Password</b></label>
                <hr></hr>
                <input value={formData.password} type="password" placeholder="Enter Password" name="password" onChange={handleChange} id="password" required />
                <hr></hr>
                <button type="submit"  onClick={handleSubmit} className="loginbtn">Login</button>
                <div className="container signin">
                    <p>New user? <NavLink exact to="/register">Register here</NavLink>.</p>
                </div>
            </div>

        </form>
    )
}


