import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { useState } from 'react'
import { PasswordField } from './PasswordField'
import { loginApi } from '../../api/auth.api';



const INITIAL_STATE = {
    email: '',
    password: '',
}

function LoginForm (props) {

    const  [state, setState] = useState(INITIAL_STATE);

    const inputChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
        
        console.log(state);
    };
    
    return (

        <chakra.form
        onSubmit={async(e) => {
            e.preventDefault() 
           try {
               
            const form = {
                email: e.target.email.value,
                password: e.target.password.value,
            }
            console.log(form);

            const user = await loginApi(form);
            console.log(user);

           } catch (error) {
               console.log(error);
           }


        }}
        {...props}
        >
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input 
            name="email" 
            type="email"
            value={state.email} 
            autoComplete="email"
            onChange={inputChange}
            required />
      </FormControl>
      <PasswordField />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign In
      </Button>
    </Stack>
  </chakra.form>

    )
}

export { LoginForm };