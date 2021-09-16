import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from './PasswordField'
import { useState } from 'react'
import { Checkbox } from "@chakra-ui/react"

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

  const [selectedFile, secSelectedFile] = useState(null);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    
    console.log(state);
};


  return (

    <chakra.form
    onSubmit={async(e) => {
      e.preventDefault() 

      console.log(e.target.files);
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
          
        />
        <FormLabel>Email</FormLabel>
        <Input 
          name="email" 
          type="email"
          value={state.email}  
          autoComplete="email"
          onChange={inputChange} 
           
        />
        <PasswordField />
        {/* <div>
          <label>
            Image
          </label>
          <input type="file" name="image" value={state.image} onChange={inputChange} />
        </div> */}
        <FormLabel>Image</FormLabel>
        <Input 
          type="file"
          value={selectedFile} 
          onChange={(e) => secSelectedFile(e.target.files[0])} 
          required 
          accept=".jpg, .png" 
        />
         
        <FormLabel>Phone Number</FormLabel>
        <Input 
          name="phoneNumber" 
          type="text"
          value={state.phoneNumber}  
          onChange={inputChange} 
           
        />
      </FormControl>
        <Checkbox
        name="check"
        type="checkbox" 
        value={state.isHost}
        onChange={inputChange}
        fontWeight="semibold">Are you Host?</Checkbox>
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign Up
      </Button>
    </Stack>
  </chakra.form>

)
}

export { LoginForm }
