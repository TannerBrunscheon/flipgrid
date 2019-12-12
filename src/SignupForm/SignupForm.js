import React from 'react'

export default function SignupForm({firstName, changeFirstName, email, changeEmail, password, changePassword}) {
    return (
        <form id="SignupForm">
            <header>
                <p>Let's</p>
                <b>Sign Up</b>
            </header>
            <p>Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
            <label for="NameInput">First Name</label>
            <input type="text" className="inputField" id="NameInput" value={firstName} onChange={(e)=> changeFirstName(e.target.value)}/>
            <label for="EmailInput">Email Address</label>
            <input type="text" className="inputField" id="EmailInput" value={email}  onChange={(e)=> changeEmail(e.target.value)}/>
            <label for="PasswordInput">Password</label>
            <input type="text" className="inputField" id="PasswordInput" value={password}  onChange={(e)=> changePassword(e.target.value)}/>
        </form>
    )
}
