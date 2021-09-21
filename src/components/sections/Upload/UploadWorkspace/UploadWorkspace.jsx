import React,{useState,useEffect} from 'react'
import { useFormik } from "formik";
import { Button, InputGroup, InputRightElement, FormLabel, Input, Text, Stack,useColorModeValue,Box, Checkbox, useToast } from '@chakra-ui/react'

import { Card } from '../../../../pages/Login/Card'
import { postWorkspace } from '../../../../api/WorkspaceApi';
import locationiq from '../../../../locations/locationiq';

function UploadWorkspace() {

    const [fileInputState, setFileInputState] = useState("");

    const [imgeEncoded,setImageEncoded] = useState();

    
    const toast = useToast()
    const [sucess, setSucess] = useState(false);
    const [errorToast, setErrorTost] = useState(false);
    useEffect(() => {
      setSucess(false);
    }, [sucess])
  
    useEffect(() => {
      setErrorTost(false);
    }, [errorToast])

    const validate = (values) => {
        const errors = {};

        if (!values.title) errors.title = "Required";
        if (!values.summary) errors.summary = "Required";
        if (!values.direction) errors.direction = "Required";
        if (!values.roomType) errors.roomType = "Required";
        if (!values.totalOccupancy) errors.totalOccupancy = "Required";
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
            hasAirCon: "false",
            hasAirHeating: "false",
            hasInternet: "false",
            price: "",
            images:"",
            publishedAt: new Date(),
            isBooked: "false",
        },
        validate,
        onSubmit: async (values) => {

            console.log("form---->",values);

            try {
                const newWorkspace ={...values};

                newWorkspace.images = await readAsDataURL(fileInputState);
                
                const location = await locationiq(values.direction);
                newWorkspace.latitude = location.latitude;
                newWorkspace.longitude = location.longitude;
                console.log(newWorkspace);
                await postWorkspace(newWorkspace);
                setSucess(true);

            } catch (error) {
                setErrorTost(true);
                console.log(error);
            }

        },
    });


    const readAsDataURL = (file)=> {
		return new Promise((resolve, reject)=>{
			let fileReader = new FileReader();
            fileReader.readAsDataURL(file);
			fileReader.onloadend = function(){
                setImageEncoded(fileReader.result);
			}
            return resolve(imgeEncoded);
		})
    } 


    return (

        
        
        <Card>
            {sucess &&
                toast({
                  title: "Your Workspace has been created successfully! 👍",
                  description: "Have your phone charged",
                  status: "info",
                  position: "top",
                  duration: 3000,
                  isClosable: true,
                })
              }
        
              {errorToast &&
                toast({
                  title: "We had an error!😱",
                  description: "Try again later!",
                  status: "error",
                  position: "top",
                  duration: 3000,
                  isClosable: true,
                })
              }
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

                    
                    <Checkbox
                        id="hasAirCon"
                        name="hasAirCon"
                        passive={false}
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.hasAirCon}
                    >
                    AirCon
                    </Checkbox>
                    {formik.touched.hasAirCon && formik.errors.hasAirCon ? (
                        <div className="error">{formik.errors.hasAirCon}</div>
                    ) : null}

                   
                    <Checkbox
                        id="hasAirHeating"
                        name="hasAirHeating"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.hasAirHeating}
                    >
                    AirHeating
                    </Checkbox>
                    {formik.touched.hasAirHeating && formik.errors.hasAirHeating ? (
                        <div className="error">{formik.errors.hasAirHeating}</div>
                    ) : null}
                
                 
                    <Checkbox
                       id="hasInternet"
                       name="hasInternet"
                       type="text"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.hasInternet}
                    >
                    Internet
                    </Checkbox>
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

                    <label>Upload Image</label>
                    <Input
                        id="images"
                        name="images"
                        type="file"
                        onChange={(e) => {
                            //formik no soporta subida de ficheros
                            console.log(e.target.files[0]);
                            setFileInputState(e.target.files[0]);    
                        }} 
                        value={formik.values.images}
                    />

                </Stack>

                <Button 
                    type="submit"
                    // onClick={()=>{
                    //     toast({
                    //         title: "Your Workspace has been created successfully! 👍",
                    //         description: "Have your phone charged",
                    //         status: "info",
                    //         position: "top",
                    //         duration: 3000,
                    //         isClosable: true,
                    //     })
                    // }}
                >
                    Submit
                </Button>
            </form>
        </Card>
        // </Box>
        // </Box>
    );
}

export default UploadWorkspace
