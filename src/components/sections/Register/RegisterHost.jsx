import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { PasswordField } from './PasswordField'

import React , { useState,useContext } from 'react'

import { useFormik } from "formik";

import './RgisterUser.scss';

function RegisterHost(props) {

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else {
      console.error("Hola???")
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const test = re.test(String(values.email).toLowerCase());
      if(!test){
        errors.email = "It's not a valid email";
      }
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    } else if (values.password === "12345678") {
      errors.password = "Must not be 12345678 !!!";
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
      isHost: true,
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
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
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
          <div className="error">{formik.errors.repassword}</div>
        ) : null}

          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Sign Up
          </Button>
      </form >
    </div>
    )
}

export default RegisterHost;





