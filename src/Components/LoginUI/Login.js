import React from 'react'
import './login.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login' >
            <div className="form">
                <h3> Task Management App </h3>
                <form action=''  >
                    <input placeholder='Email' type="text" />
                    <br />
                    <input placeholder='Password' type="password" />
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
