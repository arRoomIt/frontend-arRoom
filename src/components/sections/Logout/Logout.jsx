import React, { useContext,useState } from 'react'

import { Button, Box,useToast } from "@chakra-ui/react";

import { logout } from '../../../api/auth.api';
import { UserContext } from '../../../auth/UserContext';
import { useHistory } from 'react-router-dom';

const initialUser = {
    _id: "",
    email: "",
    name: "",
    googleId:"",
    facebookId:"",
    isHost: false,
    profileImage: "",
    hostsReview: [],
    reservations: []
}

function Logout() {

    const history = useHistory();

    const toast = useToast()
    const [sucessLogout,setSucessLogout] = useState();

    const [user,setUserContext] = useContext(UserContext);
    const logoutUser = (e) => {
        logout()
            .then(() =>{
                setUserContext(initialUser);
                history.push('/');
            })  
    }       

    return (



        <Box>
            <Button 
                colorScheme="red" 
                variant="outline" 
                size="sm"
                onClick={(e)=>{
                    logoutUser(e);
                    toast({
                        title: "See you later👋",
                        description: "Have a good day",
                        status: "info",
                        position: "top",
                        duration: 3000,
                        isClosable: true,
                    })
                }}
                >
                    Logout
            </Button>
        </Box>
    )
}

export default Logout
