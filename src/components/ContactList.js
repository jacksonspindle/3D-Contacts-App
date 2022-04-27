import {React, useState} from 'react'
import ReactDOM from 'react-dom'
import ContactCardScreen from './ContactCardScreen'
import Phone from './Phone'
import Scene from './Scene'
import SearchBar from './SearchBar'
import data from '../data.js'
import Style from '../style.css'

export default function ContactList() {

    const contactData = data.map(item => {
        return(
            <ContactCardScreen
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
            {/* <div className='appContainer'>
                <div className='contactsContainer'>
                    {contactData}
                </div>
            </div> */}
            <div className='contactsContainer'>
                    {contactData}
                </div>
        </div>
    )
}
