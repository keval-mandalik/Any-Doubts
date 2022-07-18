import React,{ useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Quora from './Quora';
import Following from "./Components/Following/Following"
import Answer from './Components/Answer/Answer';
import Spaces from './Components/Spaces/Spaces';
import Notifications from "./Components/Notifications/Notifications";
import Login from "./Components/Login/Login"
import Signup from './Components/Login/Signup';
// import ReactLoading from 'react-loading';

function App() {

  // const [loading, setLoading] = useState(true);

  // useEffect(()=>{
  //   setLoading(false);
  // },[])

  return (
    <>
      {/* {loading && <ReactLoading type={"cubes"} color={"orange"} height={100} width={100} />} */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Quora />}></Route>
          <Route path='/following' element={<Following />}></Route>
          <Route path='/answer' element={<Answer />}></Route>
          <Route path='/spaces' element={<Spaces />}></Route>
          <Route path='/notifications' element={<Notifications />}></Route>
          <Route path='/login' element={<Login />}></Route>   
          <Route path='/signup' element={<Signup />}></Route>                
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
