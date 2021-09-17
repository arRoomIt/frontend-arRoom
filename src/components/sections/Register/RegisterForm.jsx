import React from 'react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

import RegisterHost from './RegisterHost';
import RegisterUser from './RgisterUser';

function RegisterForm() {
    return (
        <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
                <Tab>Book Space</Tab>
                <Tab>Share Space</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <RegisterUser/>
                </TabPanel>
                <TabPanel>
                    <RegisterHost/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default RegisterForm
