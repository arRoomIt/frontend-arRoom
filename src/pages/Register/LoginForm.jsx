import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from './PasswordField'

export const LoginForm = (props) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault() // your login logic here
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>Name</FormLabel>
        <Input name="text" type="text" autoComplete="email" required />
        <FormLabel>Email</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
        <FormLabel>Phone Number</FormLabel>
        <Input name="text" type="text" autoComplete="email" required />
        <FormLabel>Host</FormLabel>
        <Input name="text" type="text" autoComplete="email" required />
      </FormControl>
      <PasswordField />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign in
      </Button>
    </Stack>
  </chakra.form>
)

