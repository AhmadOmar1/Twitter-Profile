import React from 'react'
import './WhoToFollowContainer.css'
import WhoToFollow from '../WhoToFollow/WhoToFollow'
import ShowMore from '../ShowMore/ShowMore'
const WhoToFollowContainer = () => {


    const accounts = [
        {
            name: 'freeCodeCamp.org',
            userName: 'freeCodeCamp',
            img: './profile-photo.jpg',
            whoFollows: 'Node.js and 9 others follow',
            pargraph:
                <p>
                    We're a community of milliomns of people
                    who are building new skills and getting new jobs
                    together, A 501(c)(3) publick charity. Tweets By
                    <span className='acount-tag'>@abberyrenn</span>
                </p>

        },
        {
            name: 'TypeScript',
            userName: 'typescript',
            img: './profile-photo.jpg',
            whoFollows: 'Node.js and 5 others follow',
            pargraph:
                <p>
                    TypeScript is a language for application-scale JavaScript development.
                    It's a typed superset of JavaScript that compiles to plain JavaScript.
                </p>

        },
        {
            name: 'Tailwind CSS',
            userName: 'tailwindcss',
            img: './profile-photo.jpg',
            whoFollows: 'Yazeed Obaid and 3 others follow',
            pargraph:
                <p>
                    the utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.
                </p>

        }
    ]
    return (
        <div className='who-to-follow-container'>
            <h2>Who to follow</h2>
            <div className='who-to-follow-list'>
                {accounts.map((account,index) => (
                    <WhoToFollow name={account.name} userName={account.userName} img={account.img} pargraph={account.pargraph} whoFollows={account.whoFollows} />
                ))}
            </div>
            <ShowMore />

        </div>
    )
}

export default WhoToFollowContainer