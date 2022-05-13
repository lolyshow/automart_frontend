import React from "react";

const ButtonComponent = ({handleClick})=>{
    return(
        <div class="form-group">
            <button type="submit" onClick={handleClick} class="btn btn-primary btn-lg btn-block mt-2">Save</button>
        </div>
    )
}
export default ButtonComponent;