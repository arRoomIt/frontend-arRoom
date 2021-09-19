import React, { useState, useEffect,useContext } from 'react';

import { Card } from '../../../pages/Login/Card'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import {
    Text,
    Box,
    Button,
    useToast,
    Flex,
} from "@chakra-ui/react"
import { postReservation } from '../../../api/reservation.api';

import {UserContext} from '../../../auth/UserContext'

function Reserve(props) {

    const [user,setUserContext] = useContext(UserContext);

    const toast = useToast()
    const [incorrectToast, setIncorrectToast] = useState(false);
    const [sucess, setSucess] = useState(false);


    useEffect(() => {
        setIncorrectToast(false);
    }, [incorrectToast]);

    useEffect(() => {
        setSucess(false)
    }, [sucess]);


    const detail = props.detail;
    if (detail.reviews === undefined) detail.reviews = [];

    //precio total
    const [totalPrice, setTotalPrice] = useState("0");

    useEffect(() => {
        setTotalPrice(detail.price);
    }, [detail])


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


    const createReservation = async() => {

        try {
            const newReservations = {
                start: startDay,
                end: endDay,
                price: totalPrice,
                workspaceId: detail._id,
            }
            if(user._id === "") throw new Error("Usuario no logueado")

            await postReservation(newReservations)
            setSucess(true);
    
        } catch (error) {
            console.error(error);
            setIncorrectToast(true);
        }
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
    }, [totalDays])


    return (
        <div>

            {incorrectToast &&
                toast({
                    title: user._id !== ""? "Failed to reserve 😔": "Please login before reserve 😒",
                    status: "error",
                    position: "top",
                    duration: 3000,
                    isClosable: true,
                })
            }

            {sucess &&
                toast({
                    position: "top",
                    title: "Reserve successfully! 😎",
                    description: 'Remenber: with great power comes great responsibility!',
                    status: "success",
                    duration: 6000,
                    isClosable: true,
                })
            }



            <Card mt="2">
                <Flex justify="center" direction="column" align="center">
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
        </div>
    )
}

export default Reserve
