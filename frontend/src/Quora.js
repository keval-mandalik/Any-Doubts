import React, {useState, useEffect} from 'react'
import MainFeed from './Components/Feed/MainFeed'
import Sidebar from './Components/Sidebar/Sidebar'
import Widget from './Components/Widget/Widget'
import Nav from './Components/Nav/Nav'
import "./Quora.css"

function Quora() {

  const [category, setCategory] = useState('General')

  function changeCategory(cat){
    setCategory(cat);
  }

  // useEffect(()=>{
  //   console.log(category)
  // }, [category])

  return (
      <div className='quora'>
        <Nav />
        <div className='quora__contents'>
          <div className='quora__content'>
            <Sidebar changeCategory = {changeCategory}/>
            <MainFeed category = {category}/>
            <Widget />
          </div>
        </div>
      </div>
  )
}

export default Quora
