import React from 'react'
import ReactDOM from 'react-dom'


export default function ContactCard(props) {
    
    return(
        <div className='contactCard'>
            <div className='profilePhotoContainer'>
                <img src={props.photo} className="profilePhoto"></img>
            </div>
            <div className='contactInfo'> 
                <h1>{props.name}</h1>
                <h2>{props.occupation}</h2>
                <h2>{props.email}</h2>
            </div>
        </div>
    )
}