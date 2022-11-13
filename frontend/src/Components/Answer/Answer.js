import React,{useState} from 'react'
import QuestionSidebar from './QuestionSidebar'
import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'
import AnswerFeed from './AnswerFeed'

function Answer() {
  const [category, setCategory] = useState('General')

  function changeCategory(cat){
    setCategory(cat);
  }
  return (
    <div className='quora'>
      <Nav />
      <div className='quora__contents'>
        <div className='quora__content'>
          <QuestionSidebar />
          <AnswerFeed  category = {category}/>
          <Sidebar changeCategory = {changeCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Answer
