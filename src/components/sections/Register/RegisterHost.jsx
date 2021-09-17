import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { PasswordField } from './PasswordField'

import React , { useState,useContext } from 'react'
import { useHistory } from 'react-router-dom';

import { loginApi } from '../../../api/auth.api';
import { UserContext } from '../../../auth/UserContext';

const INITIAL_STATE = {
  name:'',
  email: '',
  password: '',
  phoneNumber: '',
}

function RegisterHost(props) {


    const history = useHistory();
    const [setUserContext] = useContext(UserContext);
    const [state, setState] = useState(INITIAL_STATE);
  
  
    const inputChange = (event) => {
      const { name, value } = event.target;
      setState({ ...state, [name]: value });
    };



    return (
        <chakra.form
        onSubmit={async (e) => {
          e.preventDefault();
  
          try {
  
            const form = {
              email: e.target.email.value,
              password: e.target.password.value,
            }

            // setUserContext(user);
            // history.push('/');
  
  
          } catch (error) {
            console.log(error);
          }
  
  
        }}
        {...props}
      >
        <Stack spacing="6">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="name"
              value={state.name}
              autoComplete="name"
              onChange={inputChange}
              required />
          </FormControl>
  
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
          <FormControl id="name">
            <FormLabel>Phone Number</FormLabel>
            <Input
              phoneNumber="phoneNumber"
              type="text"
              value={state.phoneNumber}
              autoComplete="phoneNumber"
              onChange={inputChange}
              required />
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Sign In
          </Button>
        </Stack>
      </chakra.form>
      )
}

export default RegisterHost
