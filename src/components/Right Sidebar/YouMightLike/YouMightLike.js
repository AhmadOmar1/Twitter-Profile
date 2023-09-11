import React from 'react'
import UserAcount from '../../Navigation/UserAcount/UserAcount'
import Button from '../../Main Content/Button/Button'
import './YouMightLike.css'
import ShowMore from '../../Main Content/ShowMore/ShowMore'
const Acounts = [
  {
    name: 'Taiwind CSS',
    userName: 'taiwindcss',
    img: './profile-photo.jpg'
  },
  {
    name: 'Taiwind CSS',
    userName: 'taiwindcss',
    img: './profile-photo.jpg'
  },
  {
    name: 'Taiwind CSS',
    userName: 'taiwindcss',
    img: './profile-photo.jpg'
  },

]
const YouMightLike = () => {
  return (
    <div className='right you-might-like'>
      <h2>You might like</h2>
      {Acounts.map((user, index) => (
        <div className='account-element'>
          <UserAcount name={user.name} userName={user.userName} img={user.img} index={index} />
          <Button name={'Follow'} className={'btn follow'} />
        </div>
      ))}
    <ShowMore />

    </div>
  )
}

export default YouMightLike