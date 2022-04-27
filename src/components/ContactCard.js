import React from 'react'
import ReactDOM from 'react-dom'


export default function ContactCard(props) {
    
    return(
        <div className='contactCardSearch'>
            <div className='profilePhotoContainer'>
                <img src={props.photo} className="profilePhotoSearch"></img>
            </div>
            <div className='contactInfoSearch'> 
                <h1 className='h1Search'>{props.name}</h1>
                <h2 className='h2Search'>{props.occupation}</h2>
                <h2 className='h2Search'>{props.email}</h2>
            </div>
        </div>
    )
}