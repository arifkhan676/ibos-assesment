import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/LoginUI/Login';
import Sign from './Components/Signin/Sign';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<Login />} >   </Route>
        <Route path='/login' element={<Login />} >   </Route>
        <Route path='/home' element={<Home />} >   </Route>
        <Route path='/sign' element={<Sign />} >   </Route>

      </Routes>

    </div>
  );
}

export default App;
