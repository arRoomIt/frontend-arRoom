import React, { useContext } from 'react'
import { Link as ReachLink } from "react-router-dom";
import {
  chakra,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Box,
  useDisclosure,
  Spacer,
  IconButton,
  VStack,
  CloseButton,
  useColorMode,
} from "@chakra-ui/react";

import { } from "react-icons/io";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { BsFillPeopleFill, BsSearch } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Logo } from "@choc-ui/logo";

import { UserContext } from '../../auth/UserContext';
import Logout from './Logout/Logout';


function Header(props) {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const [userContext] = useContext(UserContext);


  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Link as={ReachLink} to="/">
        <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
          Home
        </Button>
      </Link>
      <Link as={ReachLink} to="/list">
        <Button
          w="full"
          variant="ghost"
          colorScheme="brand"

          leftIcon={<BsSearch />}
        >
          Workspaces
        </Button>
      </Link>
      {/* //TODO:AGREGAR RUTA */}
      <Link as={ReachLink} to="/">
        <Button
          w="full"
          variant="ghost"
          colorScheme="brand"
          leftIcon={<BsFillPeopleFill />}
        >
          Perfil
        </Button>
      </Link>
    </VStack>
  );

  return (
    <React.Fragment>
      <chakra.header h="full" bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4}>
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Link display="flex" alignItems="center" as={ReachLink} to="/">
            <Logo />
          </Link>
          <Box display={{ base: "none", md: "inline-flex" }}>
            <HStack spacing={1}>
              <Box role="group">
                <Link as={ReachLink} to="/">
                  <Button
                    bg={bg}
                    color="gray.500"
                    alignItems="center"
                    fontSize="md"
                    _hover={{ color: cl }}
                    _focus={{ boxShadow: "none" }}
                    rightIcon={<AiFillHome />}
                  >
                    Home
                  </Button>
                </Link>
                <Box
                  pos="absolute"
                  left={0}
                  w="full"
                  display="none"
                  _groupHover={{ display: "block" }}
                >

                </Box>
              </Box>
              <Link as={ReachLink} to="/list">
                <Button
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                >
                  Workspaces
                </Button>
              </Link>
              <Button
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl }}
                _focus={{ boxShadow: "none" }}
              >

              </Button>
            </HStack>
          </Box>
          <Spacer />
          <Box display="flex" alignItems="center">

            {userContext === null &&

              <HStack spacing={1}>
                <Link as={ReachLink} to="/login">
                  <Button colorScheme="brand" variant="ghost" size="sm">
                    Sign in
                  </Button>
                </Link>
                <Link as={ReachLink} to="/register">
                  <Button colorScheme="teal" variant="solid" size="sm">
                    Sign up
                  </Button>
                </Link>
              </HStack>

            }

            {userContext !== null &&
                <Logout/>
            }


            {/* <HStack spacing={1}>
              <Link as={ReachLink} to="/register">
              <Button colorScheme="brand" variant="ghost" size="sm">
                Sign in
              </Button>
              </Link>
              <Link as={ReachLink} to="/login">
              <Button colorScheme="teal" variant="solid" size="sm">
                Sign up
              </Button>
              </Link>
            </HStack> */}
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Box>
        </Flex>

        {MobileNavContent}
      </chakra.header>
    </React.Fragment>
  );
}

export default Header;