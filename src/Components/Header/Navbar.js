import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ContextAPI } from '../../App';
import { Button } from 'react-bootstrap';
import './navbar.css'

const Navbar = () => {

    const [inputVal, setInputVal] = useContext(ContextAPI);
    console.log(inputVal);

    return (
        <div>
            <nav className='navbar navbar-expand-lg' >
                <div className="logo">
                    <NavLink to='/' >  <img className='nav-img' src="https://th.bing.com/th/id/OIP.2eeuyAaHVHTfSlkQy5AtvwAAAA?pid=ImgDet&rs=1" alt="" /> </NavLink>
                </div>
                <div className="navbar">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">

                                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Members</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">{inputVal.email}</Link>
                            </li>
                            <li class="nav-item">
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {inputVal.isLogin && <img style={{ width: '50px', borderRadius: '25px' }} src={inputVal.photoURL} alt="" />}
                                    </a>
                                    <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                        <button className="dropdown-item"  >
                                            <Link to='Login' > {inputVal.email} </Link>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <Button onClick={() => { setInputVal({}) }} variant="dark"> <Link to='/login'  > Sign Out </Link></Button>
                            </a>
                            <div className="dropdown-menu " aria-labelledby="navbarDropdown">

                                {inputVal.email && <button onClick={() => { setInputVal({}) }} className="dropdown-item"  >
                                    <Link to='/login'> Sign Out </Link>
                                </button>}

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
