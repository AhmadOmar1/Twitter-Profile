import React from 'react';
import './NavigationList.css';
import NavigationItem from '../NavigationItem/NavigationItem.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Button from '../../Main Content/Button/Button'
import UserAcount from '../UserAcount/UserAcount';
import { BsThreeDots } from 'react-icons/bs';

const NavigationList = () => {
  const navigationItems = [
    { name: 'Home', icon: 'home' },
    { name: 'Explore', icon: 'explore' },
    { name: 'Notifications', icon: 'Notifications' },
    { name: 'Messages', icon: 'messages' },
    { name: 'List', icon: 'list' },
    { name: 'Bookmarks', icon: 'bookmarks' },
    { name: 'Communities', icon: 'communities' },
    { name: 'Profile', icon: 'Profile' },
    { name: 'More', icon: 'more' },
  ];
  return (
    <aside className='navigation'>
      <div className='container'>
      <ul className='Nav-items'>
        <FontAwesomeIcon icon={faXTwitter} className='x-icon'/>
        {navigationItems.map((item, index) => (
          <NavigationItem key={index} item={item} />
        ))}
      </ul>
      <Button name={'Post'} className={'btn post'}  />
    </div>
    <div>
      <UserAcount name={'Mohammad Dwika..'} userName={'MohammadDwikat..'} img={'./profile-photo.jpg'} icon={<BsThreeDots />} />
    </div>
    </aside>
    
  )
}

export default NavigationList