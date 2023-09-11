import React from 'react';
import './Search.css'
import { BiSearch } from 'react-icons/bi';

const Search = ({ onChange }) => {
    return (
        <div className="search-container">
            <BiSearch className='search-icon' />
            <div className='search'>
                <input
                    type="text"
                    className="right search-input"
                    placeholder={"Search"}
                    onChange={onChange}
                />
            </div>


        </div>
    );
};

export default Search;
