import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import useHistory from 'use-history';
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const singIn = e =>{
        e.preventDefault();

        auth
        .singInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/');
        })
        .catch(error =>alert(error.massage))
    }

    const register = e =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth){
                history.push('/');
            }
            
        })
        .catch(error =>alert(error.massage))
    }

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StorefrontIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">Amazon</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={singIn} >Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register} >Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Login;