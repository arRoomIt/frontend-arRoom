import React from 'react';
import {CalendarDetail} from '../..//sections';
import { Map } from '../../sections';
import {Box} from "@chakra-ui/react"

function DetailLayout() {
    return (
        <>
            <Map/> 
            <CalendarDetail />
        </>

    )
}

export default DetailLayout
