import React from 'react';
import './NavigationItem.css';
import { PiBookmarkSimple } from 'react-icons/pi';
import { BiHomeCircle, BiSearch } from 'react-icons/bi';
import { MdNotificationsNone } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { RiFileListLine } from 'react-icons/ri';
import { HiOutlineUser } from 'react-icons/hi';
import { BsPeople } from 'react-icons/bs';
import { CiCircleMore } from 'react-icons/ci';

function NavigationItem({ item }) {
  const getIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'home':
        return <BiHomeCircle className='Nav-icon' />;
      case 'explore':
        return <BiSearch className='Nav-icon' />;
      case 'notifications':
        return <MdNotificationsNone className='Nav-icon' />;
      case 'messages':
        return <FiMail className='Nav-icon' />;
      case 'list':
        return <RiFileListLine className='Nav-icon' />;
      case 'profile':
        return <HiOutlineUser className='Nav-icon' />;
      case 'communities':
        return <BsPeople className='Nav-icon' />;
      case 'bookmarks':
        return <PiBookmarkSimple className='Nav-icon' />;
      case 'more':
        return <CiCircleMore className='Nav-icon' />;
      default:
        return null;
    }
  };


  return (
    <>
      <li className='Nav-item'>
        {getIcon(item.icon)}
        <span>{item.name}</span>
      </li>
    </>
  );
}

export default NavigationItem;
