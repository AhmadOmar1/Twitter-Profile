import React from 'react'
import './ProfileContainer.css'
import AboutAcount from '../AboutAcount/AboutAcount'
import AboutProfile from '../AcountProfile/AboutProfile'
import Post from '../Post/Post'
import WhoToFollow from '../WhoToFollow/WhoToFollow'
import WhoToFollowContainer from '../WhoToFollowContainer/WhoToFollowContainer'

const ProfileContainer = () => {
    return (
        <>
            <div className='profile-container'>
                <div>
                    <AboutProfile />
                    <AboutAcount />
                </div>
            </div>
            <div>
                <Post />
            </div>
            
            <div>
                <WhoToFollowContainer />
            </div>
        </>


    )
}

export default ProfileContainer