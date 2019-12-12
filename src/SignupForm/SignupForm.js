import React from 'react'

export default function SignupForm({firstName, changeFirstName, email, changeEmail, password, changePassword, onSubmit}) {
    return (
        <form id="SignupForm" onSubmit={onSubmit}>
            <header>
                <h1>Let's</h1>
                <h1><b>Sign Up</b></h1>
            </header>
            <p>Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
            <label for="NameInput">First Name</label>
            <input type="text" className="inputField" id="NameInput" value={firstName} required onChange={(e)=> changeFirstName(e.target.value)}/>
            <label for="EmailInput">Email Address</label>
            <input type="email" className="inputField" id="EmailInput" value={email} required onChange={(e)=> changeEmail(e.target.value)}/>
            <label for="PasswordInput">Password</label>
            <input type="password" className="inputField" id="PasswordInput" value={password} required onChange={(e)=> changePassword(e.target.value)}/>
            <button type="submit">Sign Up</button>
        </form>
    )
}
