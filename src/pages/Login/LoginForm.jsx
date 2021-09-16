import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { PasswordField } from './PasswordField'

import React , { useState,useContext } from 'react'
import { useHistory } from 'react-router-dom';

import { loginApi } from '../../api/auth.api';
import { UserContext } from '../../auth/UserContext';



const INITIAL_STATE = {
  email: '',
  password: '',
}

function LoginForm(props) {

  const history = useHistory();

  const [userContext, setUserContext] = useContext(UserContext);

  console.log(history);
  console.log(userContext);

  const [state, setState] = useState(INITIAL_STATE);
  // const [rest,setReset] = useState(false);

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

          const user = await loginApi(form);
          setUserContext(user);
          history.push('/');


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