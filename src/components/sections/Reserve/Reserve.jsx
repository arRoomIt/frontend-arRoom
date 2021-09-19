import React, { useState, useEffect } from 'react';

import { Card } from '../../../pages/Login/Card'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import {
    Text,
    Box,
    Button,
    Flex,
} from "@chakra-ui/react"
import { postReservation } from '../../../api/reservation.api';

function Reserve(props) {

    const detail = props.detail;
    if (detail.reviews === undefined) detail.reviews = [];

    //precio total
    const [totalPrice,setTotalPrice] = useState("0");

    useEffect(() => {
        setTotalPrice(detail.price);
    },[detail])


    //guardar fechas
    const minDate = new Date();
    minDate.setDate(minDate.getDate())
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60)
    const [value, setValues] = useState([new Date(), new Date()]);

    const [startDay, setStartDay] = useState(new Date());
    const [endDay, setEndDay] = useState(new Date());
    const [totalDays, setTotalDays] = useState();

    const onChangeDate = (e) => {
        console.log("Onchange-->", e);
        if (e !== null) {
            setValues(e)
            setStartDay(new Date(e[0]));
            setEndDay(new Date(e[1]));
        } else {
            setValues([new Date(), new Date()]);
            setStartDay(new Date());
            setEndDay(new Date());
        }
    }

    const createReservation = () => {
        const newReservations = {
            start:startDay,
            end:endDay,
            price:totalPrice,
            workspaceId:detail._id,
        }
        postReservation(newReservations)
            .then((result) =>{
                console.log(result);
            })
            .catch(err =>{
                console.log(err)
            })

    }

    useEffect(() => {
        const differenceTime = endDay.getTime() - startDay.getTime();
        let differenceDay = differenceTime / (1000 * 3600 * 24);
        differenceDay = Math.trunc(differenceDay)
        setTotalDays(differenceDay);
    }, [startDay])

    useEffect(() => {
        const num = totalDays * detail.price;
        setTotalPrice(num + detail.price);
    },[totalDays])


    return (
        <Card mt="2">
            <Flex justify="center"direction="column" align="center">
                <Text fontSize="2xl">Add dates for total prices</Text>
                <Box mt="2" d="flex" mt="2" alignItems="center">
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {detail.reviews.length} reviews
                    </Box>
                </Box>
                <Box mt="2">
                    <DateRangePicker
                        onChange={(e) => { onChangeDate(e) }}
                        value={value}
                        minDate={minDate}
                        maxDate={maxDate}
                    />

                </Box>

                <Box mt="8">
                    <Text
                        mb={2}
                        fontSize="xl"
                        fontWeight={["bold",]}
                        lineHeight="tight"
                    >
                        Total: {totalPrice !== NaN && 
                            `${totalPrice}`
                        } €
                    </Text>
                </Box>

                <Box mt="3" >
                    <Button 
                        colorScheme="teal" 
                        onClick={createReservation}    
                    >Reserve Now!</Button>
                </Box>
            </Flex>

        </Card>
    )
}

export default Reserve
