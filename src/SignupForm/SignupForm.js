import React from 'react'
import "./SignupForm.css"
export default function SignupForm({firstName, setFirstName, email, setEmail, password, setPassword, onSubmit}) {
    return (
        <form name="SignupForm" id="SignupForm" onSubmit={(e)=>{ e.preventDefault(); onSubmit(e)}}>
            <header>
                <h1>
                    Let's <br/>
                    <b>Sign Up</b>
                </h1>
            </header>
            <p>Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
            <label htmlFor="NameInput">First Name</label> <br/>
            <input type="text" className="inputField" id="NameInput"  name="nameInput"value={firstName} required onChange={(e)=> setFirstName(e.target.value)}/> <br/>
            <label htmlFor="EmailInput">Email Address</label> <br/>
            <input type="email" className="inputField" id="EmailInput" name="emailInput" value={email} required onChange={(e)=> setEmail(e.target.value)}/> <br/>
            <label htmlFor="PasswordInput">Password</label> <br/>
            <input type="password" className="inputField" id="PasswordInput" name="passwordInput" value={password} required onChange={(e)=> setPassword(e.target.value)}/> <br/>
            <button type="submit" id="SubmitButton">Sign Up</button>
        </form>
    )
}
