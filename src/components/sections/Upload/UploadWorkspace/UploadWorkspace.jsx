import React from 'react'
import { useFormik } from "formik";
import { Button, InputGroup, InputRightElement, FormLabel, Input, Text, Stack,useColorModeValue,Box } from '@chakra-ui/react'

import { Card } from '../../../../pages/Login/Card'
import { postWorkspace } from '../../../../api/WorkspaceApi';
import locationiq from '../../../../locations/locationiq';

function UploadWorkspace() {

    const validate = (values) => {
        const errors = {};

        if (!values.title) errors.title = "Required";
        if (!values.summary) errors.summary = "Required";
        if (!values.direction) errors.direction = "Required";
        if (!values.roomType) errors.roomType = "Required";
        if (!values.totalOccupancy) errors.totalOccupancy = "Required";
        if (!values.hasAirCon) errors.hasAirCon = "Required";
        if (!values.hasAirHeating) errors.hasAirHeating = "Required";
        if (!values.hasInternet) errors.hasInternet = "Required";
        if (!values.price) errors.price = "Required";

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            summary: "",
            direction: "",
            roomType: "",
            totalOccupancy: "",
            hasAirCon: "",
            hasAirHeating: "",
            hasInternet: "",
            price: "",
            publishedAt: new Date(),
            isBooked: "false",
        },
        validate,
        onSubmit: async (values) => {

            const newWorkspace ={...values} ;

            const location = await locationiq(values.direction);
            newWorkspace.latitude = location.latitude;
            newWorkspace.longitude = location.longitude;
            
            const createdWorkspace = await postWorkspace(newWorkspace);
            console.log("linea 60-->",createdWorkspace);

        },
    });

    return (

        <Box
            bg={useColorModeValue('gray.50', 'inherit')}
            minH="100vh"
            py="12"
            px={{ base: '4', lg: '8' }}
        >
            <Box maxW="md" mx="auto">

        <Card>
            <h1>Upload workspace</h1>
            <form onSubmit={formik.handleSubmit}>
                <Stack>
                    <label>Title</label>

                    <Input
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <div className="error">{formik.errors.title}</div>
                    ) : null}
                    <label>Summary</label>
                    <Input
                        id="summary"
                        name="summary"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.summary}
                    />
                    {formik.touched.summary && formik.errors.summary ? (
                        <div className="error">{formik.errors.summary}</div>
                    ) : null}

                    <label>Direction</label>
                    <Input
                        id="direction"
                        name="direction"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.direction}
                    />
                    {formik.touched.direction && formik.errors.direction ? (
                        <div className="error">{formik.errors.direction}</div>
                    ) : null}

                    <label>Type of the room</label>
                    <Input
                        id="roomType"
                        name="roomType"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.roomType}
                    />
                    {formik.touched.roomType && formik.errors.roomType ? (
                        <div className="error">{formik.errors.roomType}</div>
                    ) : null}

                    <label>Occupancy</label>
                    <Input
                        id="totalOccupancy"
                        name="totalOccupancy"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.totalOccupancy}
                    />
                    {formik.touched.totalOccupancy && formik.errors.totalOccupancy ? (
                        <div className="error">{formik.errors.totalOccupancy}</div>
                    ) : null}

                    <label>hasAirCon</label>
                    <Input
                        id="hasAirCon"
                        name="hasAirCon"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.hasAirCon}
                    />
                    {formik.touched.hasAirCon && formik.errors.hasAirCon ? (
                        <div className="error">{formik.errors.hasAirCon}</div>
                    ) : null}

                    <label>hasAirHeating</label>
                    <Input
                        id="hasAirHeating"
                        name="hasAirHeating"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.hasAirHeating}
                    />
                    {formik.touched.hasAirHeating && formik.errors.hasAirHeating ? (
                        <div className="error">{formik.errors.hasAirHeating}</div>
                    ) : null}
                    <label>hasInternet</label>
                    <Input
                        id="hasInternet"
                        name="hasInternet"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.hasInternet}
                    />
                    {formik.touched.hasInternet && formik.errors.hasInternet ? (
                        <div className="error">{formik.errors.hasInternet}</div>
                    ) : null}

                    <label>Price</label>
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div className="error">{formik.errors.price}</div>
                    ) : null}
                </Stack>

                <Button type="submit">Submit</Button>
            </form>
        </Card>
        </Box>
        </Box>
    );
}

export default UploadWorkspace
