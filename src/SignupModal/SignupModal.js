import React, {useState} from 'react'
import SignupForm from '../SignupForm/SignupForm';
import Confirmation from '../Confirmation/Confirmation';

export default function SignupModal() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [submitted, setSubmitted] = useState(false)

    const onSubmit = () =>{
        setSubmitted(true)
    }

    return (
        <div>
            {
                submitted ? <SignupForm {...{firstName,setFirstName, email, setEmail, password, setPassword, onSubmit}}/> : Confirmation
            }
        </div>
    )
}
