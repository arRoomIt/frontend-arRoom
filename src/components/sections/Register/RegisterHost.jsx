import { Button, InputGroup, InputRightElement, FormLabel, Input,Text, Stack } from '@chakra-ui/react'
import { PasswordField } from './PasswordField'

import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';

import { useFormik } from "formik";

import { registerApi } from '../../../api/auth.api';
import { UserContext } from '../../../auth/UserContext';

import './RgisterUser.scss';


function RegisterHost(props) {

  const history = useHistory();

  const [user,setUserContext] = useContext(UserContext);

  const [show, setShow] = useState(false)
  const showPass = () => setShow(!show)

  const validate = (values) => {
    const errors = {};

    if(!values.name){
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else {
      console.error("Hola???")
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const test = re.test(String(values.email).toLowerCase());
      if (!test) {
        errors.email = "It's not a valid email";
      }
    }

    if (!values.password) {
      errors.password = "Required";
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/i.test(values.password)){
      errors.password = "Minimum contain 8 characters, at least 1 letter and 1 number:";
    }

    if (!values.repassword) {
      errors.repassword = "Required";
    } else if (values.repassword !== values.password) {
      errors.repassword = "Second password doesn't match";
    }

    if(!values.phoneNumber){
      errors.phoneNumber = "Required";
    }

    return errors;
  };


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      phoneNumber:"",
      image: "",
      isHost: true,
    },
    validate,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      registerApi(values)
        .then((data)=>{
            setUserContext(data);
            history.push('/');

        })
        .catch(error => console.log(error));

    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

      <FormLabel>Name</FormLabel>
        <Input
          id="nameHost"
          name="name"
          type="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <Text color="tomato" className="error">{formik.errors.name}</Text>
        ) : null}


        <FormLabel>Email</FormLabel>
        <Input
          id="emailHost"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Text color="tomato" className="error">{formik.errors.email}</Text>
        ) : null}
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup size="md">

          <Input
            id="passwordHost"
            name="password"
            type={show ? "text" : "password"}
            placeholder="**********"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={showPass}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>

        </InputGroup>
        {formik.touched.password && formik.errors.password ? (
          <Text color="tomato" className="error">{formik.errors.password}</Text>
        ) : null}

        <FormLabel htmlFor="repassword">Repeat Password</FormLabel>
        <Input
          id="repasswordHost"
          name="repassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repassword}
        />
        {formik.touched.repassword && formik.errors.repassword ? (
          <Text color="tomato" className="error">{formik.errors.repassword}</Text>
        ) : null}
        <FormLabel>Phone Number</FormLabel>
        <Input
          id="phoneNumberHost"
          name="phoneNumber"
          onChange={formik.handleChange}
          type="number"
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <Text color="tomato" className="error">{formik.errors.phoneNumber}</Text>
        ) : null}
        <FormLabel>Image Profile</FormLabel>
        <Input
          id="imageHost"
          name="image"
          type="file"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />

        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign Up
        </Button>
      </form >
    </div>
  )
}

export default RegisterHost;





