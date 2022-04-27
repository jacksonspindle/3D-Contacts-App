import React from 'react'
import ReactDOM from 'react-dom'


export default function ContactCard(props) {
    
    return(
        <div className='contactCard' id='screenContact'>
            <div className='profilePhotoContainer'>
                <img src={props.photo} className="profilePhoto"></img>
            </div>
            <div className='contactInfo'> 
                <h1 className=''>{props.name}</h1>
                <h2 className=''>{props.occupation}</h2>
                <h2 className=''>{props.email}</h2>
            </div>
        </div>
    )
}