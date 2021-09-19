import React, {useContext} from 'react'

import {Upload} from '../../components/sections'
import {UserContext} from '../../auth/UserContext';
import {VerticallyCenter} from '../../components/sections/Modal/ModalFilter';
import {ModalWorkspace} from '../../components/sections/Modal/ModalWorkspace';

import {
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { MdHeadset, MdEmail } from "react-icons/md";
import { BsFillBriefcaseFill, BsFillPersonFill, BsShieldFill} from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";



function User() {

    const [userContext] = useContext(UserContext);

    console.log(userContext);

    return (
        <div>
            <ModalWorkspace />
        

       <div>
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.800")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="sm"
        mx="auto"
        bg={useColorModeValue("white", "gray.700")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <VerticallyCenter />
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src={userContext.profileImage}
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">
          
        <Icon as={BsFillPersonFill} h={6} w={6} mr={2} />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
          {userContext._id !== '' &&  
               <h2>{userContext.name}</h2>
               }
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
               
          </chakra.h1>

          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={BsShieldFill} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              {userContext.isHost !== true 
              ? <h4>Host</h4> 
              : <h4>User</h4>
              }
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            
            <Icon as={AiFillPhone} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              {userContext._id !== '' && 
              <h4>{userContext.phoneNumber}</h4>
              }
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">

              {userContext._id !== '' && 
              <h4>{userContext.email}</h4>
              }
            </chakra.h1>
          </Flex>
        </Box>
      </Box>
    </Flex>
        </div>
    <div>
    </div>
  </div>
  );
};
    


export default User
