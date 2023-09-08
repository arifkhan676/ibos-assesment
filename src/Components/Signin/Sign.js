import React, { useContext, useState } from 'react'
import './Sign.css'
import { auth } from '../FireBaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ContextAPI } from '../../App';
import { Link } from 'react-router-dom';

const Sign = () => {


    const [inputVal, setInputVal] = useContext(ContextAPI);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputVal((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { ...inputVal };
        if (inputVal.email && inputVal.password) {
            createUserWithEmailAndPassword(auth, inputVal.email, inputVal.password)
                .then((user) => {
                    newUser.account = 'Account created';
                    setInputVal(newUser);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    newUser.error = 'This Email already or pass least 6'
                    setInputVal(newUser);
                    console.log(errorMessage);
                    // ..
                });
        }
    }
    console.log(inputVal);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        setInputVal((preValue) => {
            return {
                ...preValue,
                file
            }
        });
    };

    return (
        <div>
            <div className='sigin' >
                <div className="form">
                    <p style={{ color: '#fff' }} > {inputVal.account} </p>
                    <p style={{ color: 'red' }} > {inputVal.error} </p>

                    <form onSubmit={handleSubmit} >
                        <input type="text" name='username' onChange={handleChange} value={inputVal.username} placeholder='username' />
                        <br />
                        <input type="text" name='email' onChange={handleChange} value={inputVal.email} placeholder='Email' />
                        <br />
                        <input type="password" name='password' onChange={handleChange} value={inputVal.password} placeholder='Password' />
                        <br />
                        <textarea type="text" name='bio' onChange={handleChange} value={inputVal.bio} placeholder='Bio' />
                        <br />
                        <input type="file" accept="image/*" name='photoURL' onChange={handleImageChange} value={inputVal.photoURL} />
                        <hr />
                        <button className='btn btn-primary' type='Submit' value='Submit'  > Create Account </button>
                    </form>
                    <hr />
                    <Link to='/login' > Login Page </Link>
                </div>
            </div>
        </div>

    )
}

export default Sign
