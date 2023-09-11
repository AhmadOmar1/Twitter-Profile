import React from 'react'
import UserAcount from '../../Navigation/UserAcount/UserAcount'
import Button from '../Button/Button'
import { BiSolidUser } from 'react-icons/bi'
import './WhoToFollow.css'

const WhoToFollow = ({name,userName , pargraph , whoFollows , img}) => {
    return (
        <div className='who-to-follow'>
            <div className='container'>
                <div className='folllowed-by'>
                   { whoFollows && <BiSolidUser />}
                    <span>{whoFollows}</span>
                </div>
             { name &&  <div className='about-who-to-follow'>
                    <UserAcount name={name} userName={userName} img={img} />
                    <Button name='Follow' className={'btn follow'} />
                </div>}
                <div className='acount-description'>
                    
                        {pargraph}
                    
                </div>


            </div>
        </div>
    )
}

export default WhoToFollow