import React,{useState} from "react";
import Helper from "../helpers/Helper";


function CreateCar(){
    const [carName, setCarName] = useState("")
    const [description, setDescription] = useState("")
    const [year, setYear] = useState("")
    const [image, setImage] = useState(null)
    const [processing, setProcessing] = useState(false)
    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log("mememem",image.name)
        if(carName && description && year && image){
            try {

                setProcessing(true);
                let payload = {
                    carName,
                    description,
                    year,
                    // image
                }
                console.log("MyPayload",payload)
                let path = "api/app/createCar";
                console.log("Mp",path)
                await Helper.Request(path,"post",payload)
                .then((result) =>{ 
                  let { message, error, response } = result;
                  setProcessing(false);
                  
                  if (!error) {
                    console.log("loaded");
                    setProcessing(false);
                    
                  } else {
                    setProcessing(false);
                    // Alert.alert("Shop", message);
                  }
          
                });
          
                
            } catch (error) {
                this.setState({processing:false});
                // Alert.alert("Error", error.toString());
              }
            


        }else{
            console.log("falseFalse")
        }
        
        
    };

    const onImageChange = event => {
        console.log("hi")
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          console.log(img)
          setImage(img)
        }
      };


    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-md-6 createCarcontainer">
                    <div class="card border-0">
                        <h5 class="card-header bg-primary mt-5 text-white">Add Car</h5>
                        <div class="card-body shadow p-3 mb-5 bg-white rounded">
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Car Name</label>
                                    <input type="text" class="form-control" value={carName} onChange={(e)=>setCarName(e.target.value)} id="formGroupExampleInput" placeholder="Honder"/>
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Car Description</label>
                                    <input type="text" class="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} name ="file" id="formGroupExampleInput2" placeholder="Honder With Working Ac"/>
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Car Year</label>
                                    <input type="text" class="form-control" value={year} onChange={(e)=>setYear(e.target.value)} name ="file" id="formGroupExampleInput2" placeholder="2015"/>
                                </div>

                                <div class="in">
                                    
                                    <input type="file" class="mt-2" onChange={onImageChange} name ="file" id="formGroupExampleInput2"/>
                                </div>
                                <div class="form-group ">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block mt-2">Save</button>
                                </div>
                            </form>
                            {/* <a href="#" class="btn btn-primary mt-2">Add Car</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCar;