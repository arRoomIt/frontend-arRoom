import React, { useContext } from 'react'

import { Button, Box } from "@chakra-ui/react";

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

    const [user,setUserContext] = useContext(UserContext);
    const logoutUser = () => {
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
                onClick={logoutUser}
                >
                    Logout
            </Button>
        </Box>
    )
}

export default Logout
