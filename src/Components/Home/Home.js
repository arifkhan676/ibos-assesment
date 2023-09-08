import React, { useContext, useState } from 'react'
import './home.css'
import { ContextAPI } from '../../App';
import Navbaar from '../Header/Navbaar';

const Home = () => {

    const [inputVal, setInputVal] = useContext(ContextAPI);

    const [taskValue, setTaskValue] = useState('');

    const handleChange = (e) => {
        // console.log(e.target.value);
        const userValue = e.target.value;
        setTaskValue(userValue);
    }

    const [taskPost, setPost] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVal = [...taskPost, taskValue]
        setPost(newVal);
    }

    return (
        <div className='home' >
            <Navbaar />
            {inputVal.email &&
                <div class="container mt-4">
                    <div class="card">
                        <div class="card-body">
                            <h5> Add task </h5>
                            <form onSubmit={handleSubmit}>
                                <input name='task-input' style={{ padding: '10px 50px', borderRadius: '10px' }} type="text" onChange={handleChange} placeholder='add task' />
                                <input type="Submit" style={{ padding: '10px', borderRadius: '10px', marginLeft: '10px' }} />
                            </form>
                        </div>
                    </div>


                    {taskPost.map((post) => {
                        return <div class="card">
                            <div class="card-body">
                                <h5> {post} </h5>
                            </div>
                        </div>
                    })}
                </div>


            }
        </div>
    )
}

export default Home
