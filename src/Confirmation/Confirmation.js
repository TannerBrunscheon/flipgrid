import React from 'react'

export default function Confirmation({firstName, email}) {
    return (
        <>
            <header>
                <h1>Welcome,</h1>
                <h1>{firstName}</h1>
            </header>
            <p>You have been registered for this awesome service. Please check your email listed below for instructions.</p>
            <br/>
            {email}
            <button>Sign In</button>
        </>
    )
}
