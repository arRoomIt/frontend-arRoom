import React from 'react'

import { Button, Box } from "@chakra-ui/react";



function Logout() {


    const logoutUser = () => {
        console.log("he sido pulsado")
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
