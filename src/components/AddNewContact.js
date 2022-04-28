import React, { useState, useRef, useEffect, useCallback } from 'react'
import ContactCard from './ContactCard'
import data from '../data'
import axios from 'axios'

export default function AddNewContact() {

    const [addContactToggle, setAddContactToggle] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [nameTerm, setNameTerm] = useState("")
    const [emailTerm, setEmailTerm] = useState("")
    const [occupationTerm, setOccupationTerm] = useState("")
    const [photoTerm, setPhotoTerm] = useState("")




    return (
        <div>
            <div className='searchIconContainer'>
            <img src='./plusIcon.png' 
                 width={"40px"} 
                 className="addContactIcon"
                 onClick={() => {setAddContactToggle(!addContactToggle); }}  
                 ></img>
            </div>

            <div 
                onClick={()=>{setAddContactToggle(false);}} 
                className="overlay" 
                style={{"display": addContactToggle ? "block" : "none"}}></div>

            <div className='searchBoxContainer' >
                <div  
                    className='searchBox' 
                    style={{"display": addContactToggle ? "block" : "none"}}>
                
                <div className='addContactFormContainer'>
                <form className='addContactForm'>
                    {/* <label htmlFor="contactName">Contact Name</label> */}
                    <input type={"text"} id="contactName" placeholder='Contact Name...' onChange={(e) => setNameTerm(e.target.value)} ></input>
                    {/* <label htmlFor="contactOccupation">Contact Occupation</label> */}
                    <input type={"text"} id="contactOccupation" placeholder='Contact Occupation...' onChange={(e) => setOccupationTerm(e.target.value)}></input>
                    {/* <label htmlFor="contactPhoto">Contact Photo</label> */}
                    <input type={"text"} id="contactPhoto" placeholder='Contact Photo...' onChange={(e) => setPhotoTerm(e.target.value)}></input>
                    <button 
                        type='submit'
                        onClick={(e) => {
                            e.preventDefault()

                            const newContact = {
                                name: nameTerm,
                                email: emailTerm,
                                occupation: occupationTerm,
                                photo: photoTerm
                            }

                            data.push(newContact)
                            document.forms[0].reset()

                            console.log(newContact)

                            axios.post('https://webhook.site/6ce716bd-24ae-42ac-ac47-373cca2b6504', newContact).then(response => {
                                console.log(response)
                            }).catch(error => {
                                console.log(error)
                            })

                        }}
                        ></button>
                </form>
                </div>

                </div>
            </div>
        </div>
    )
}