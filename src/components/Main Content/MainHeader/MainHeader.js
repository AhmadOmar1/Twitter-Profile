import React from 'react'
import './MainHeader.css'
import {BiArrowBack} from 'react-icons/bi'

const MainHeader = ({name , posts}) => {
  return (
    <div className='main-header'>
          <BiArrowBack className='arrow-back' />
          
          <div className='headercontent'>
            
            <h2>{name}</h2>
            <div className='posts-count'>
                {posts} <span>posts</span>
            </div>
          </div>
    </div>
  )
}

export default MainHeader