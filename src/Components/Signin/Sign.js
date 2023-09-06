import React, { useState } from 'react'
import './Sign.css'
import { Link } from 'react-router-dom'


const Sign = () => {

    const [userValue, setUserValue] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [x, setX] = useState({
        name: '',
        email: '',
        password: ''
    });
    console.log(x);

    const handleChange = (e) => {
        const { name } = e.target.value;
        setUserValue({ name })
    }

    const handleSubmit = (e) => {
        //   const formValue = [...userValue];
        setX(userValue)
        e.preventDefault();
    }

    return (
        <div className="sigin">
            <div className='form'>
                <h4> Please Sign in </h4>
                <form action="" onSubmit={handleSubmit} >
                    <input placeholder='username' name='name' onChange={handleChange} type="text" />
                    <br />
                    <input placeholder='email' name='email' onChange={handleChange} type="text" />
                    <br />
                    <input placeholder='password' name='password' onChange={handleChange} type="password" />
                    <br />
                    <button className='btn btn-primary' value='Submit' type="Submit" > Submit </button>
                </form>
                <hr />
                <Link to='/login' > Go to login page  </Link>

            </div>
        </div>

    )
}

export default Sign
