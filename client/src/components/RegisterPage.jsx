
import React, {useState} from 'react'
import {register} from '../services/authService'
import '../css/authentication.css'

const RegisterPage = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [degree, setDegree] = useState("")
    const [year, setYear] = useState("")

    const handleRegister = async () =>{
        try{
            const user = await register(email, password, degree, year, username)

            console.log('User Registered!');
        }
        catch(error){
            console.log(error.message);
        }
    }

    return (
        
        <div>
            <h2>Register</h2>
            <input type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Create Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <option type="text" placeholder='Current Degree' value={degree} onChange={(e) => setDegree(e.target.value)} />
            <input type="number" placeholder='Current Year' value={year} onChange={(e) => setYear(e.target.value)} />

            <button onClick={handleRegister}>Register</button>
        </div>
    
    )

}

export default RegisterPage
