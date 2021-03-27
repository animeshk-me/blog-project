import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        alert("Searched")
    };
    return (
        <Fragment>
            <div className='navbar' >
                <ul className='navbarMenu'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact us</NavLink></li>
                    <li><NavLink to="/posts">Posts</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                </ul>
                <form className='search' onSubmit={submitHandler}>
                    <input type="text" placeholder="Search..."></input>
                    {/* <img alt="Search" /> */}
                </form>
            </div>
        </Fragment>
    )
}
 
export default Navbar
