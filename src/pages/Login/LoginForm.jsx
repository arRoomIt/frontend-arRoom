import { Button, chakra, FormControl, FormLabel, Input, Stack,useToast,Box  } from '@chakra-ui/react'
import { PasswordField } from './PasswordField'

import React , { useState,useContext,useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import { loginApi } from '../../api/auth.api';
import { UserContext } from '../../auth/UserContext';



const INITIAL_STATE = {
  email: '',
  password: '',
}

function LoginForm(props) {

  const history = useHistory();

  const [userContext,setUserContext] = useContext(UserContext);

  const toast = useToast()
  const [incorrectToast, setIncorrectToast] = useState(false);
  const [sucess, setSucess] = useState(false);

  useEffect(() => {
    setIncorrectToast(false);
  },[incorrectToast]);

  useEffect(() => {
    setSucess(false)
  },[sucess]);


  const [state, setState] = useState(INITIAL_STATE);
  // const [rest,setReset] = useState(false);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };


  return (

    <div>
      
      {incorrectToast && 
        toast({
          title: "Failed to sign in",
          description: "Incorrect email o password 😦",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        })
      }

      {sucess && 
        toast({
          position: "top",
          title: "Welcome Back! 🥰",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      }

      <chakra.form
      onSubmit={async (e) => {
        e.preventDefault();

        try {

          const form = {
            email: e.target.email.value,
            password: e.target.password.value,
          }

          const user = await loginApi(form);
          setSucess(true);
          setUserContext(user);
          history.push('/');

        } catch (error) {
          console.log(error);
          setIncorrectToast(true);
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
    </div>

  )
}

export { LoginForm };