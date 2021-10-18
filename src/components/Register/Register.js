import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Register.css"

const Register = () => {
    return (
        <div className="regi-style">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder="Your Password" />
                    <br />
                    <input type="password" placeholder="Re-enter Password" />
                    <br />
                    <button >Submit</button>
                </form>
                <p>Already have an account?<NavLink to="/login">Login</NavLink></p>
            </div>
        </div>
    );
};

export default Register;