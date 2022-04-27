import {React, useState} from 'react'
import ReactDOM from 'react-dom'
import ContactCard from './components/ContactCard'
import SearchBar from './components/SearchBar'
import data from './data.js'
import Style from './style.css'

export default function App() {

    
   
    const contactData = data.map(item => {
        return(
            <ContactCard
                key={item.key}
                photo={item.photo} 
                name={item.name}
                age={item.age}
                occupation={item.occupation}
            />
        )
    })
    return(
        <div>
            <div className='searchBarContainer'>
                <SearchBar />    
            </div>
            <div className='appContainer'>
                
                <div className='contactsContainer'>
                    {contactData}
                </div>
            </div>
        </div>
    )
}