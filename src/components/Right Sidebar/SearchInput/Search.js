import React from 'react';
import './Search.css'

const Search = ({ placeholder, onChange }) => {
    return (
        <div className="search-container">
            <i className="fas fa-search search-icon"></i>
            <input
                type="text"
                className="right search-input"
                placeholder={"Search"}
                onChange={onChange}
            />

        </div>
    );
};

export default Search;
