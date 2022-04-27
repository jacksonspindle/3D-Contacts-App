import React, { useState, useRef, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import ContactCard from './ContactCard'
import data from '../data'
// import sampleData from './sample-data'

export default function SearchBar(){

    const [searchBarToggle, setSearchBarToggle] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    return(
        <div >

            <div className='searchIconContainer'>
            <img src='./searchIcon.svg.png' 
                 width={"40px"} 
                 className="searchIcon"
                 onClick={() => {setSearchBarToggle(!searchBarToggle); }}  
                 ></img>
            </div>

            <div 
                onClick={()=>{setSearchBarToggle(false);}} 
                className="overlay" 
                style={{"display": searchBarToggle ? "block" : "none"}}></div>

            <div className='searchBoxContainer' >
                <div  
                    className='searchBox' 
                    style={{"display": searchBarToggle ? "block" : "none"}}>
                    <input 
                        id='input'
                        type="search" 
                        placeholder='find someone...'
                        className='searchBar'
                        onChange={(event) => {setSearchTerm(event.target.value);console.log(searchTerm)}}
                        ></input>
                <div className='searchResults'>
                {data.filter((item) => {
                    if (searchTerm == ""){
                        return item
                    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return item
                    }
                }).map(item => {
                    return (
                        <ContactCard
                            key={item.key}
                            photo={item.photo} 
                            name={item.name}
                            occupation={item.occupation}
                        />
                    )
                })}
                </div>

                </div>
            </div>
        </div>
    )
}