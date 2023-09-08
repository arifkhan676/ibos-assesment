import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/LoginUI/Login';
import Sign from './Components/Signin/Sign';
import { createContext, useState } from 'react';
import { Navbar } from 'react-bootstrap';

export const ContextAPI = createContext();


function App() {

  const [inputVal, setInputVal] = useState({
    username: '',
    photo: '',
    email: '',
    password: '',
    account: '',
    error: ''
  });

  return (
    <ContextAPI.Provider value={[inputVal, setInputVal]}>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />} >   </Route>
          <Route path='/login' element={<Login />} >   </Route>
          <Route path='/navbar' element={<Navbar />} >  </Route>
          <Route path='/home' element={<Home />} >   </Route>
          <Route path='/sign' element={<Sign />} >   </Route>
        </Routes>
      </div>
    </ContextAPI.Provider>

  );

}

export default App;
