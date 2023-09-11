import React from 'react';
import './AboutProfile.css';
import Button from '../Button/Button';
import { BsCalendar4Week, BsThreeDots } from 'react-icons/bs';
import MainHeader from '../MainHeader/MainHeader';
import { RiLink } from 'react-icons/ri';

const AboutProfile = () => {
    return (
        <div className='about-profile'>
            <div className='header-fixed'>
                <MainHeader name={'React'} posts={'1,611'} />
            </div>
            <div className='profile-content'>
                <div>
                    <div className='profilemother'>
                        <img src='./reactCover.jpeg' className='cover-image' alt="Cover" />
                            <img className='profile-image' src='./react-prof.png' alt="Profile" />
                    </div>
                </div>

                <div className='buttons-list'>
                    <div className='dot-cycle'>
                        {<BsThreeDots />}
                    </div>
                    <Button name={'Follow'} className={'btn follow'} />
                </div>
            </div>
            <div className='profile-description'>
                <h2>React</h2>
                <span>@reactjs</span>
                <div className='description-content'>
                    The library for web and native user interfaces
                    <div className='whoim' >
                        <div className='link-container'>
                        <div className='link-icon'>
                            <RiLink />
                        </div>
                        <span className='link-text'>react.div</span>
                    </div>
                    <div className='joined-info'>
                        <div className='joined-icon'>
                            <BsCalendar4Week />
                        </div>
                        <span> Joined July 2013</span>
                    </div>
                    </div>
                    
                    <div className='follower-info'>
                        <div className='follower-item'>
                            <span className='follower-count'>108</span>
                            Following
                        </div>
                        <div className='follower-item'>
                            <span className='follower-count'>708.2K</span>
                            Followers
                        </div>
                    </div>
                    <span className='not-followed-info'>Not followed by anyone you’re following</span>
                </div>
            </div>
        </div>
    );
};

export default AboutProfile;
