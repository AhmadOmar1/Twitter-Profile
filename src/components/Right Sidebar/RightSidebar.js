import React from 'react'
import Search from './SearchInput/Search'
import YouMightLike from './YouMightLike/YouMightLike'
import './RightSidebar.css'
import Trends from './Trends/Trends'

const RightSidebar = () => {
  return (
    <div className='right-sidebar'>
      <div className="header-content">
        <Search className='search-container' />
      </div>

      <YouMightLike />
      <Trends />
    </div>
  )
}

export default RightSidebar