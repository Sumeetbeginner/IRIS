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
        
        <div id="body2">
              <div id='formParent'>
              </div>
        <div className='form-container'> 
      
            <h2 className='reg'>REGISTER</h2>
            <div className="inputs">
                <input type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Create Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder='Current Degree' value={degree} onChange={(e) => setDegree(e.target.value)} />
                <input type="number" placeholder='Current Year' value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            

            <button onClick={handleRegister}>REGISTER</button>
            <div className="login-redirect">
                <p>Already have an account ? <a href="/login">LOGIN</a></p>
                
            </div>
            
        </div>
    
        </div>
    )

}

export default RegisterPage