import React, { useState } from 'react';
import register from '../../api/auth.api';


const INITIAL_STATE = {
    email: '',
    username: '',
    password: '',
}

function Register() {

    const [state, setState] = useState(INITIAL_STATE);


    const submitForm = async (event) => {
        event.preventDefault();

        console.log(state.email);
        console.log(state.username);
        console.log(state.password);
    };


    const inputChange = (event) => {
        const { name, value } = event.target;
        setState({...state, [name]: value});
    };


    return (
        <div>
          <h3>Register</h3>
        <form onSubmit={submitForm}>
          <label>
            <p>Email</p>
            <input 
                type="email"
                value={state.email} 
                name="email" 
                placeholder="Correo Electrónico"
                onChange={inputChange} 
            />
          </label>

          <label>
            <p>Username</p>
            <input 
                type="text" 
                value={state.username} 
                name="username" 
                placeholder="Usuario"
                onChange={inputChange}
            />
          </label>

          <label>
            <p>Password</p>
            <input 
                type="password"
                value={state.password}  
                name="password" 
                placeholder="Contraseña" 
                onChange={inputChange}
            />
          </label>

          <div style={{ marginTop: "40px" }}>
            <button type="submit">Registrarme</button>
          </div>
        </form>
        </div>


      
     
    )
      
}

export default Register
