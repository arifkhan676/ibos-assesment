import React, { useContext } from 'react'
import { ContextAPI } from '../../App';
import Navbaar from '../Header/Navbaar';

const Profile = () => {
    const [inputVal, setInputVal] = useContext(ContextAPI);

    return (
        <div class="profile">
            <Navbaar />
            <div class="container mt-4">
                <div class="card">
                    <div class="card-body">
                        <img style={{ width: '50px', borderRadius: '25px' }} src={URL.createObjectURL(inputVal.file)} alt="" />

                        <h5 class="card-title">{inputVal.username} </h5>
                        <p class="card-text">User Bio : {inputVal.bio} </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile
