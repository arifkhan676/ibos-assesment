import React, { useContext } from 'react'
import './login.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, useNavigate } from 'react-router-dom';
import { ContextAPI } from '../../App';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FireBaseConfig';

const Login = () => {

    const [inputVal, setInputVal] = useContext(ContextAPI);
    console.log(inputVal);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputVal((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    const navigate = useNavigate();
    const navigateUSe = () => {
        navigate('/home');
    }

    const handleSubmit = (e) => {
        const newUser = { ...inputVal }
        // console.log(newUser);
        e.preventDefault();
        if (inputVal.email && inputVal.password) {
            signInWithEmailAndPassword(auth, inputVal.email, inputVal.password)
                .then((res) => {
                    // Signed in 
                    setInputVal(newUser);
                    navigateUSe();
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    newUser.error = 'Invalid user information'
                    setInputVal(newUser);
                });
        }

    }


    return (
        <div className='login' >
            <div className="form">
                <h3> Task Management App </h3>
                <p style={{ color: 'red' }} > {inputVal.error}  </p>
                <form onSubmit={handleSubmit}   >
                    <input placeholder='Email' type="text" name='email' value={inputVal.email} onChange={handleChange} />
                    <br />
                    <input placeholder='Password' type="password" name='password' value={inputVal.password} onChange={handleChange} />
                    <br />
                    <button className='btn btn-primary' type='Submit' value='Submit' > Login </button>
                </form>
                <Link to='/sign' > Create an account  </Link>
                <hr />
                <div className="googleLogin">
                    <div className="signin">
                        <p>Sign in with</p>
                    </div>
                    <GoogleIcon />
                </div>
            </div>

        </div>
    )
}

export default Login
