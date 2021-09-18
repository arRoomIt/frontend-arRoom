import React,{useState,useContext} from "react";

import {uploadImage as uploadProfileImage} from '../../../api/user.api'
import { UserContext } from '../../../auth/UserContext';
import './Upload.css';
import { Flex, Center, Text } from "@chakra-ui/react";

function Upload() {

    const [userContext,setUserContext] = useContext(UserContext);

    const [fileInputState, setFileInputState] = useState("");

    const [previewSource,setPreviewSource] = useState();

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if(!previewSource) return;
        uploadImage(previewSource);
    }

    const uploadImage = (base64EncodedImage) => {
        try {

            if(userContext._id === "" ){
                throw new Error("No hay id de usuario")
            }
            const form = {
                userId: userContext._id,
                image: base64EncodedImage
            }
            console.log("upload--->",userContext);
            uploadProfileImage(form)
                .then((result)=>{
                    setUserContext(result)
                })
                .catch((error) => {console.error(error)})
        } catch (error) {
            console.error(error);
        }
    }
  
    return (
      <Flex >
        
      <Center w="70%" ml="12" borderRadius="15px">
        <Text><div className="FileUpload">
            <form onSubmit={handleSubmitFile}>
                <input className="binput" type="file" name="image" 
                    onChange={handleFileInput} 
                    value={fileInputState} />
            {previewSource && 
                <img className="bimage" src={previewSource} alt="" style={{width:"250px", height:"250px"}}/>
            }
                <button  className="binput__sub" type="submit">Submit</button>
            </form> 
        </div>
        </Text>
    </Center>
      </Flex>
    );
  };

export default Upload
