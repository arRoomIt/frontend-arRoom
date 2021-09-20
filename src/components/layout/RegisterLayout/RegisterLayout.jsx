// import React from 'react'

import {
    Box,
    Button,
    Heading,
    SimpleGrid,
    Text,
    useColorModeValue,
    VisuallyHidden
} from '@chakra-ui/react'
  import * as React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Card } from '../../../pages/Login/Card'
import { DividerWithText } from '../../../pages/Login/DividerWithText'
import { Link } from '../../../pages/Login/Link'
import { Link as ReachLink } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";


import RegisterForm from '../../sections/Register/RegisterForm';





function RegisterLayout() {
    return (
    <div>
        <Link as={ReachLink} to="/">
            <Button variant="ghost" leftIcon={<AiFillHome />}>
            Home
            </Button>
        </Link>
        <Box
            bg={useColorModeValue('gray.50', 'inherit')}
            minH="100vh"
            py="12"
            px={{ base: '4', lg: '8' }}
        >
            <Box maxW="md" mx="auto">
                <Heading textAlign="center" size="xl" fontWeight="extrabold" mb="4">
                    ArRoom
                </Heading>

                <Heading textAlign="center" size="xl" fontWeight="bold" mb="8">
                    Create a new account
                </Heading>

                <Card>
                    <RegisterForm />
                    <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
                        <Text as="span">Don&apos;t have an account?</Text>
                        <Link as={ReachLink} to="/login">Sign In</Link>
                    </Text>
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
    </div>
    )
}

export default RegisterLayout
