import React,{useState,useContext} from "react";

import {uploadImage as uploadProfileImage} from '../../../api/user.api'
import { UserContext } from '../../../auth/UserContext';


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
      <div className="FileUpload">
        <form onSubmit={handleSubmitFile}>
            <input type="file" name="image" 
                onChange={handleFileInput} 
                value={fileInputState} />
            <button type="submit">Submit</button>
        </form>
        {previewSource && 
            <img src={previewSource} alt="" style={{height:"300px"}}/>
        }
      </div>
    );
  };

export default Upload
