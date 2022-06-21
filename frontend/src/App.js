import {useState, useEffect} from 'react'
import './App.css';
import Quora from './Quora';
// import ReactLoading from 'react-loading';

function App() {

  // const [loading, setLoading] = useState(true);

  // useEffect(()=>{
  //   setLoading(false);
  // },[])

  return (
    <>
     {/* {loading && <ReactLoading type={"cubes"} color={"orange"} height={100} width={100} />} */}
      <Quora />
    </>
  );
}

export default App;
