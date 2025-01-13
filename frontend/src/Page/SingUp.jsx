import React, { useState } from 'react'
import'./Css/LoginSingup.css'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Mycomponents/Firebase/FirebaseConf';

export const SingUp = () => {
    const handleKeyPress = (e, type) => {
        let regex;
        if (type === 'text') {
            regex = /^[a-zA-Z]+$/;
        } else if (type === 'number') {
            regex = /^[0-9\b]+$/;
        }
        const key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (!regex.test(key)) {
            e.preventDefault();
            return false;
        }
    };

    
    const [user,setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        password: "",
    });

    let name,value;
    const getUserData = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setUser({
            ...user,[name]: value
        })
    }


    const postData = async () => {
            const{
                firstname,
                lastname,
                email,
                number,
                password,
        } = user;

        const res = await fetch("https://e-com-d57b2-default-rtdb.asia-southeast1.firebasedatabase.app/e-com/singup.json",
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                number,
                password,
            })
        }
        )
    }

    const [errorMsg,setErrorMsg] = useState("");
    const[buttonDisable,setButtonDisable] = useState(false);

    const handlesubmit = async ()=>{
        if(!user.firstname || !user.lastname || !user.email || !user.number || !user.password){
            setErrorMsg("Please fill all the fields");
            return;
        }
        if(user.password.length < 8){
            setErrorMsg("Password must be at least 8 characters");
            return;
        }
        if(user.number.length > 10){
            setErrorMsg("Please enter a valid phone number");
            return;
        }
        setErrorMsg("");

        setButtonDisable(true)
        createUserWithEmailAndPassword(auth,user.email,user.password)
        .then((userCredentials) =>{
            setButtonDisable(false);
            var userData = userCredentials.user;
            console.log('Registered with:', userData.email);
        })
        .catch((error)=>{
            setButtonDisable(false);
            console.log(error.message);
        })
            await postData();

    }

return (
    <div className='loginSingup'>
            <div className="loginSingup-container">
                <h1>Sign Up</h1>
                <div className="loginSingup-field" method='POST'>
                        <div className="name">
                            <input
                                type='text'
                                name="firstname"
                                value={user.firstname}
                                onChange={getUserData}
                                placeholder='First Name' 
                                onKeyPress={(e) => handleKeyPress(e, 'text')}
                            ></input>

                            <input 
                                type='text'
                                name="lastname"  
                                value={user.lastname}
                                onChange={getUserData}
                                placeholder='Last Name' 
                                onKeyPress={(e) => handleKeyPress(e, 'text')} 
                            ></input>
                        </div>

                        <div className="components">

                            <input 
                                type='email' 
                                id='email'
                                name="email"
                                value={user.email}
                                onChange={getUserData}
                                placeholder='Email' 
                            ></input>

                            <input 
                                type='text'
                                id='Number'
                                name="number" 
                                value={user.number}
                                onChange={getUserData}
                                placeholder='Phone Number' 
                                onKeyPress={(e) => handleKeyPress(e, 'number')}
                            ></input>

                            <input 
                                type='password' 
                                id='password' 
                                minLength='8'
                                value={user.password}
                                onChange={getUserData}
                                placeholder='Password' 
                                name="password"
                                ></input>
                        </div>
                    
                    <label>
                        <input 
                            type='checkbox'/>
                            Agree to term & condition
                    </label>
                    <b>{errorMsg}</b>
                    
                    <button onClick={handlesubmit}
                    disabled = {buttonDisable}>
                        Submit
                    </button>
                </div>
                <div className='login-singup'>
            <p><Link to="/login">Already register user</Link></p>
            </div>
            </div>
        </div>
)
}
