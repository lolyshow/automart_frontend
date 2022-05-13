import React from "react";

const FileUploadComponent = ({onImageChange})=>{
    return (
        <div class="in">                     
            <input type="file" class="mt-2" onChange={onImageChange} name ="file" id="formGroupExampleInput2"/>
        </div>
    )
}
export default FileUploadComponent;