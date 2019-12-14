import React from 'react'
import './Confirmation.css'

export default function Confirmation({firstName, email}) {
    return (
        <>
            <header>
                <h1>
                    Welcome, <br/>
                    <b>{firstName}!</b>
                </h1> 
            </header>
            <p className="confirmationAnnounce">You have been registered for this awesome service. Please check your email listed below for instructions.</p>
            <br/>
            {email}
            <br/>
            <button>Sign In</button>
        </>
    )
}
