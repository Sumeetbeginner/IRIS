
import React, {useState} from 'react'
import {register} from '../services/authService'

const RegisterPage = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async () =>{
        try{
            const user = await register(email, password)

            console.log('User Registered!');
        }
        catch(error){
            console.log(error.message);
        }
    }

    return (
        
        <div>
            <h2>Register</h2>
            <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Create Password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleRegister}>Register</button>
        </div>
    
    )

}

export default RegisterPage
