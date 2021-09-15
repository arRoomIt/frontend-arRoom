import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from './PasswordField'
import { useState } from 'react'
import { Checkbox, CheckboxGroup } from "@chakra-ui/react"

const INITIAL_STATE = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  isHost: '',
  image: '',
}

function LoginForm (props) {

  const [state, setState] = useState(INITIAL_STATE);

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
          name: e.target.name.value,
          email: e.target.email.value,
          phoneNumber: e.target.phoneNumber.value,
          password: e.target.password.value,
          isHost: e.target.isHost.value,
          image: e.target.image.value
        }

        const register = await register(form);
        console.log(register);
        
      } catch (error) {
        console.log(error);
      }
    }}
    {...props}
    >
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>Name</FormLabel>
        <Input 
          name="name" 
          type="text"
          value={state.name}  
          autoComplete="email"
          onChange={inputChange} 
          required 
        />
        <FormLabel>Email</FormLabel>
        <Input 
          name="email" 
          type="email"
          value={state.email}  
          autoComplete="email"
          onChange={inputChange} 
          required 
        />
        <FormLabel>Image</FormLabel>
        <Input 
          type="file"
          value={state.image} 
          onChange={inputChange} 
          required 
        />
        <FormLabel>Phone Number</FormLabel>
        <Input 
          name="text" 
          type="text"
          value={state.phoneNumber}  
          onChange={inputChange} 
          required 
        />
      </FormControl>
        <Checkbox
        name="check"
        type="checkbox" 
        value={state.isHost}
        onChange={inputChange}
        fontWeight="semibold">Is Host</Checkbox>
      <PasswordField />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign in
      </Button>
    </Stack>
  </chakra.form>

)
}

export { LoginForm }
