import React from 'react'
import './UserAcount.css'
import { BsThreeDots } from 'react-icons/bs'

const UserAcount = ({ name, userName, img , icon}) => {
    return (
        
            <div className='userAcount'>
                <div className='userAcount-container'>
                    <img className='userAcount-img' src={img} alt="profile-image" />
                    <div className='userAcount-info'>
                        <div className='userAcount-name'>{name}</div>
                        <div className='userAcount-username'>@{userName}</div>
                    </div>
                </div>
                
                {icon}

            </div>
    )
}

export default UserAcount