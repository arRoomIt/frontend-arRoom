import React from "react";
import {
  chakra,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  useDisclosure,
  Spacer,
  IconButton,
  SimpleGrid,
  Stack,
  VStack,
  CloseButton,
  useColorMode,
} from "@chakra-ui/react";

import {  } from "react-icons/io";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import {BsFillPeopleFill,BsSearch } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Logo } from "@choc-ui/logo";

function Header(props) {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const ic = useColorModeValue("teal.600", "teal.50");
  const hbg = useColorModeValue("gray.50", "brand.400");
  const tcl = useColorModeValue("gray.900", "gray.50");
  const dcl = useColorModeValue("gray.500", "gray.50");
  const hbgh = useColorModeValue("gray.100", "brand.500");

  const Section = (props) => {
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: hbg }}
        href="/"
        
      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

 

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
      <Link href="/">
      <Button w="full" variant="ghost"  leftIcon={<AiFillHome />}>
        Home
      </Button>
      </Link>
      <Link href="/list">
      <Button
        w="full"
        variant="ghost"
        colorScheme="brand"
        
        leftIcon={<BsSearch />}
      >
        Workspaces
      </Button>
      </Link>
      <Link href="/">
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
          <Link display="flex" alignItems="center" href="/">
            <Logo />
          </Link>
          <Box display={{ base: "none", md: "inline-flex" }}>
            <HStack spacing={1}>
              <Box role="group">
                <Link href="/">
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
              <Link href="/list">
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
            <HStack spacing={1}>
              <Link href="/register">
              <Button colorScheme="brand" variant="ghost" size="sm">
                Sign in
              </Button>
              </Link>
              <Link href="/login">
              <Button colorScheme="teal" variant="solid" size="sm">
                Sign up
              </Button>
              </Link>
            </HStack>
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