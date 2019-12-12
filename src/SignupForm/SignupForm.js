import React from 'react'

export default function SignupForm({firstName, setFirstName, email, setEmail, password, setPassword, onSubmit}) {
    return (
        <form id="SignupForm" onSubmit={(e)=>{ e.preventDefault(); onSubmit(e)}}>
            <header>
                <h1>Let's</h1>
                <h1><b>Sign Up</b></h1>
            </header>
            <p>Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
            <label htmlFor="NameInput">First Name</label>
            <input type="text" className="inputField" id="NameInput" value={firstName} required onChange={(e)=> setFirstName(e.target.value)}/>
            <label htmlFor="EmailInput">Email Address</label>
            <input type="email" className="inputField" id="EmailInput" value={email} required onChange={(e)=> setEmail(e.target.value)}/>
            <label htmlFor="PasswordInput">Password</label>
            <input type="password" className="inputField" id="PasswordInput" value={password} required onChange={(e)=> setPassword(e.target.value)}/>
            <button type="submit">Sign Up</button>
        </form>
    )
}
