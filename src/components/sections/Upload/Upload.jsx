import { Handler } from "leaflet";
import React,{useState} from "react";
import { useForm } from "react-hook-form";

function Upload() {

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
            console.log(base64EncodedImage);
            // await fetch() --> llamar a la api
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
