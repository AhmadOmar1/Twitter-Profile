import React from 'react'
import './Post.css'
import { LiaRetweetSolid } from 'react-icons/lia';
import UserAcount from '../../Navigation/UserAcount/UserAcount';
import { BiMessageRounded, BiBarChart } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import {HiMiniArrowUpTray , HiOutlineArrowPathRoundedSquare} from 'react-icons/hi2'
const Post = () => {
  return (
    <div className='post-content'>
      <div className='reposted'>
        <HiOutlineArrowPathRoundedSquare className='liaRetweetSolid' />
        <span> React reposted</span>
      </div>

      <div className='post-puplisher'>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }}>
          <UserAcount name={'Ahmad'} img={'./react-prof.png'} userName={'ahmad_omar'} />
          <span className='not-followed-info'>· May 29</span>
        </div>
        <div style={{
          marginLeft: '3rem',
          marginBottom: '2rem',

        }}>
            <span > happy 10th birthday to <span className='acount-tag'>@reactjs!</span></span>

        <div className='profile-list-elements'>
          <div className='list-element'>
            <BiMessageRounded />
            <span>46</span>
          </div>
          <div className='list-element'>
            <HiOutlineArrowPathRoundedSquare />
            <span>675</span>
          </div>
          <div className='list-element'>
            <AiOutlineHeart />
            <span>3,701</span>
          </div>
          <div className='list-element'>
            <BiBarChart />
            <span>1,1M</span>
          </div>
          <div className='list-element'>
            <HiMiniArrowUpTray />
          </div>
        </div>
        </div>
      


      </div>



    </div>
  )
}

export default Post