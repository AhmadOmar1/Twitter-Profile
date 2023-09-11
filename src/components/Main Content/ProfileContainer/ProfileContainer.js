import React from 'react'
import './ProfileContainer.css'
import AboutAcount from '../AboutAcount/AboutAcount'
import AboutProfile from '../AcountProfile/AboutProfile'
import MainHeader from '../MainHeader/MainHeader'


const ProfileContainer = () => {
    return (
        <div className='profile-container'>
           
            <AboutProfile />
            <AboutAcount />
        </div>
    )
}

export default ProfileContainer