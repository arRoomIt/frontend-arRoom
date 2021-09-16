import React, { useContext } from 'react'

import { Button, Box } from "@chakra-ui/react";

import { logout } from '../../../api/auth.api';
import { UserContext } from '../../../auth/UserContext';

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

    const [setUserContext] = useContext(UserContext);
    const logoutUser = () => {
        logout()
            .then(() =>{
                setUserContext(initialUser)
            })  
    }       

    return (
        <Box>
            <Button 
                colorScheme="red" 
                variant="outline" 
                size="sm"
                onClick={logoutUser}
                >
                    Logout
            </Button>
        </Box>
    )
}

export default Logout
