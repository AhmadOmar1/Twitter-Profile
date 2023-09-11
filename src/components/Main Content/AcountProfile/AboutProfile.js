import React from 'react'
import './AboutProfile.css'
import Button from '../Button/Button'
import { BsCalendar4Week, BsThreeDots } from 'react-icons/bs'
import MainHeader from '../MainHeader/MainHeader'

import { RiLink } from 'react-icons/ri'

const AboutProfile = (coverImage, porfileImage) => {
    return (
        <div className='about-profile'>
            <div className='header-fixed'>
                <MainHeader name={'React'} posts={'1,611'} />
            </div>
            <div className='profile-content'>
                <div>
                    <div className='profilemother'>
                        <img src='./reactCover.jpeg' className='cover-image'></img>
                        <div className='profile-div'>
                            <img className='profile-image' src='./react-prof.png'></img>
                        </div>
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
                <div style={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',

                }}>
                    The library for web and native user interfaces
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        color: 'blue',
                        cursor: 'pointer',
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '0.4rem',
                            alignItems: 'center'

                        }}>
                            <RiLink style={{
                                color: 'gray',
                                fontSize: '18px'

                            }} />
                            <span style={{
                                color: 'blue',
                            }}>
                                react.div

                            </span>
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: '0.4rem',
                            alignItems: 'center'
                        }}>
                            <BsCalendar4Week style={{
                                color: 'gray',
                                fontSize: '14px'
                            }} />
                            <span> Joined July 2013</span>
                        </div>


                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        color: 'white',
                        cursor: 'pointer',
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '0.4rem',
                            alignItems: 'center',
                            color: 'gray',

                        }}>

                            <span style={{
                                color: 'white',
                                fontWeight: '500'
                            }}>
                                108
                            </span>
                            Following

                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '0.4rem',
                            alignItems: 'center',
                            color: 'gray',

                        }}>

                            <span style={{
                                color: 'white',
                                fontWeight: '500'
                            }}>
                                708.2K
                            </span>
                            Followers

                        </div>
                    </div>
                    <span style={{
                        fontSize:'14px',
                    }}>
                        Not followed by anyone you’re following
                    </span>


                </div>

            </div>

        </div>
    )
}

export default AboutProfile