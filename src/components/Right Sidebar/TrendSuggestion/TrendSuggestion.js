import React from 'react'
import './TrendSuggestion.css'

const TrendSuggestion = ({ name, trendType, numberOfPosts, icon }) => {
    const isArabic = /[\u0600-\u06FF]/.test(name);
    return (
        <div className='trend-suggestion'>
            <div className='content'>
            {trendType && (
                    <div className='trend type'>
                        {trendType} · <span className='trending-label'>Trending</span>
                    </div>
                )}
                <div className={`trend name ${isArabic ? 'rtl' : ''}`}>{name}</div>
                {numberOfPosts && (
                    <div className='trend type'>
                        {numberOfPosts}  <span className='trending-label'>posts</span>
                    </div>
                )}
            </div>
            <div className='dot-icon'>{icon}</div>
        </div>
    )
}

export default TrendSuggestion;
