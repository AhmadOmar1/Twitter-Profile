import React from 'react'
import './Trends.css'
import TrendSuggestion from '../TrendSuggestion/TrendSuggestion'
import { BsThreeDots } from 'react-icons/bs'
import ShowMore from '../../Main Content/ShowMore/ShowMore.js'

const trends = [
  {
    trendType: 'Gaming',
    name: '#VALORANTChampions',
    numberOfPosts: '27.9K',
    icon: <BsThreeDots />
  },
  {
    name: 'الانستا',
    numberOfPosts: '1,411',
  },{
    trendType: 'Gaming',
     name:'Mako',
    numberOfPosts: '14.1K',
    icon: <BsThreeDots />
  },
  {
    name: 'رسالة_اليوم#',
    numberOfPosts: '22.3K',
  },
  {
    name: 'Messi',
    numberOfPosts: '77.2K',
    icon: <BsThreeDots />
  }
  ,
  {
    name: 'جامعة_طيبه#',
  },
   {
    name: 'ايفون',
    numberOfPosts: '27.6K',
  },
  {
    trendType: 'Gaming',
    name: 'fnatic',
    numberOfPosts: '8,748',
    icon: <BsThreeDots />
  },
  {
    name:'الاعلام العبري'
  },
  {
    name: '#InterMiamiCF',
    numberOfPosts: '68.4K',
    icon: <BsThreeDots />
  },
];

const Trends = () => {
  return (
    <div className='right trends'>
      <h2>Trends for You</h2>
      <div className='trends-container'>
        {trends.map((trend, index) => (
          <TrendSuggestion
            key={index}
            name={trend.name}
            icon={trend.icon}
            numberOfPosts={trend.numberOfPosts}
            trendType={trend.trendType}
          >

          </TrendSuggestion>
        ))}
      </div>

      <ShowMore />
    </div>
  );
}

export default Trends;
