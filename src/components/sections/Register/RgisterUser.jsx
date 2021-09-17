import { Button, InputRightElement, FormLabel, Input, Stack,InputGroup,Text } from '@chakra-ui/react'
import { PasswordField } from './PasswordField'

import React , { useState,useContext } from 'react'

import { useFormik } from "formik";

import './RgisterUser.scss';

function RgisterUser(props) {

  const [show, setShow] = useState(false)
  const showPass = () => setShow(!show)

  const validatePass = (password) => {
    const re = /^((?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,})$/;
    return re.test(String(password));
  }

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const test = re.test(String(values.email).toLowerCase());
      if(!test){
        errors.email = "It's not a valid email";
      }
    }

    if (!values.password) {
      errors.password = "Required";
    } else{
      if(validatePass(values.password)){
        errors.password = "It must contain 8 characters, including Upper Class and Lowe class";
      }
    }

    if (!values.repassword) {
      errors.repassword = "Required";
    } else if (values.repassword !== values.password) {
      errors.repassword = "Second password doesn't match";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repassword: "",
      image:"",
      isHost: false,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

    return (
      <div>
      <form  onSubmit={formik.handleSubmit}>
        <FormLabel>Email</FormLabel>
        <Input
          id="email"
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
            id="password"
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
          id="repassword"
          name="repassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repassword}
        />
        {formik.touched.repassword && formik.errors.repassword ? (
          <Text color="tomato" className="error">{formik.errors.repassword}</Text >
        ) : null}

        <Input
          id="image"
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

export default RgisterUser




