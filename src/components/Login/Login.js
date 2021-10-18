import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css"
const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/"
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)

            })
    }
    return (
        <div className="login-style">

            <div>
                <h2>Log in </h2>
                <form >
                    <input type="email" placeholder="Put your email address" />
                    <br />
                    <input type="password" placeholder="put your password" />
                    <br />
                    <button>Submit</button>
                </form>


                <p>now to ema-john ? <NavLink to="/register">Create account</NavLink></p>
                <br />
                <div>......or......</div>
                <br />
                <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
            </div>
        </div>

    );
};

export default Login;
