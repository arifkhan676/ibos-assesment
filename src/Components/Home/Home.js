import React, { useContext } from 'react'
import './home.css'
import { ContextAPI } from '../../App';
import Navbar from '../Header/Navbar';

const Home = () => {

    const [inputVal, setInputVal] = useContext(ContextAPI);

    return (
        <div className='home' >
            <Navbar />

        </div>
    )
}

export default Home
