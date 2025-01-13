import React, { useState } from 'react';
import './Css/LoginSingup.css';
import { Link } from 'react-router-dom';

export const LoginSingup = () => {

    return (
        <div className='loginSingup'>
            <div className="loginSingup-container">
                <h1>Login</h1>
            <div className="loginSingup-field">
                <div className="components">
                    <input 
                        type='text'
                        id="email" 
                        placeholder='Email'
                    />
                    <input 
                        type='text' 
                        id="password"
                        placeholder='Password'
                    />
                </div>

                <button>
                    Login
                </button>
            </div>
            
                <div className="login-singup">

                    <p><Link to='/singup'>New User</Link></p>

                </div>
            </div>
        </div>
    );
};


