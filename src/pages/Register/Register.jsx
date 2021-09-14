// import React, { useState } from 'react';
// import register from '../../api/auth.api';


// const INITIAL_STATE = {
//     email: '',
//     username: '',
//     password: '',
// }

// function Register() {

//     const [state, setState] = useState(INITIAL_STATE);


//     const submitForm = async (event) => {
//         event.preventDefault();

//         console.log(state.email);
//         console.log(state.username);
//         console.log(state.password);
//     };


//     const inputChange = (event) => {
//         const { name, value } = event.target;
//         setState({...state, [name]: value});
//     };


//     return (
//         <div>
//           <h3>Register</h3>
//         <form onSubmit={submitForm}>
//           <label>
//             <p>Email</p>
//             <input 
//                 type="email"
//                 value={state.email} 
//                 name="email" 
//                 placeholder="Correo Electrónico"
//                 onChange={inputChange} 
//             />
//           </label>

//           <label>
//             <p>Username</p>
//             <input 
//                 type="text" 
//                 value={state.username} 
//                 name="username" 
//                 placeholder="Usuario"
//                 onChange={inputChange}
//             />
//           </label>

//           <label>
//             <p>Password</p>
//             <input 
//                 type="password"
//                 value={state.password}  
//                 name="password" 
//                 placeholder="Contraseña" 
//                 onChange={inputChange}
//             />
//           </label>

//           <div style={{ marginTop: "40px" }}>
//             <button type="submit">Registrarme</button>
//           </div>
//         </form>
//         </div>


      
     
//     )
      
// }

// export default Register

import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Card } from './Card'
import { DividerWithText } from './DividerWithText'
import { Link } from './Link'
import { LoginForm } from './LoginForm'
import { Logo } from './Logo'

export const Register = () => (
  <Box
    bg={useColorModeValue('gray.50', 'inherit')}
    minH="100vh"
    py="12"
    px={{
      base: '4',
      lg: '8',
    }}
  >
    <Box maxW="md" mx="auto">
      <Logo
        mx="auto"
        h="8"
        mb={{
          base: '10',
          md: '20',
        }}
      />
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        ArRoom
      </Heading>
      <Heading textAlign="center" size="xl" fontWeight="bold">
        Register
      </Heading>
      <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
        <Text as="span">Don&apos;t have an account?</Text>
        <Link href="#">Start free trial</Link>
      </Text>
      <Card>
        <LoginForm />
        <DividerWithText mt="6">or continue with</DividerWithText>
        <SimpleGrid mt="6" columns={1} spacing="3">
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Login with Google</VisuallyHidden>
            <FaGoogle />
          </Button>
        </SimpleGrid>
      </Card>
    </Box>
  </Box>
)

export default Register