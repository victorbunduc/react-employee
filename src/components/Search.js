import React from 'react'

const Search = ({handleSearchChange}) => {
    return (
        <div>
             <input className="search" onChange={handleSearchChange} placeholder="Search..."></input>
        </div>
    )
}

export default Search
