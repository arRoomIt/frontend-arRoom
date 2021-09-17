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
  import { Card } from './Card'
  import { DividerWithText } from './DividerWithText'
  import { Link } from './Link'
  import { LoginForm } from './LoginForm'
  import { Link as ReachLink } from "react-router-dom";
 
  
  const Login = () => (
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
          Sign in to your account
        </Heading>
        <Card>
          <LoginForm />
          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Don&apos;t have an account?</Text>
          <Link  as={ReachLink} to="/register">Sign Up</Link>
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
  )

  export default Login;