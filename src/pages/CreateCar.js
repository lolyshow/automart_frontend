import React,{useState} from "react";
import ButtonComponent from "../components/ButtonComponent";
import FileUploadComponent from "../components/FileUploadComponent";
import InputComponent from "../components/InputComponent";
import Helper from "../helpers/Helper";


function CreateCar(){
    const [carName, setCarName] = useState("")
    const [description, setDescription] = useState("")
    const [year, setYear] = useState("")
    const [image, setImage] = useState(null)
    const [amount, setAmount] = useState("")
    const [processing, setProcessing] = useState(false)
    let handleSubmit = async (e) => {
        e.preventDefault();
        
        if(carName && description && year && image){
            
            try {

                const formData = new FormData()
                formData.append("name", carName)
                formData.append("amount", amount)
                formData.append("description", description)
                formData.append("year", year)
                formData.append("image", image)
                

                setProcessing(true);
                let path = "api/app/createCar";
                await Helper.Request(path,"post",formData)
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
                
            }catch (error) {
                setProcessing(false);
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
                            <div >

                                <InputComponent
                                    type="text"
                                    value={carName}
                                    placeholder="Honder"
                                    label="Car Name"
                                    name="name"
                                    onChangeCarName={(e)=>setCarName(e.target.value)}
                                />


                                <InputComponent
                                    type="text"
                                    value={description}
                                    placeholder={"Honder With Working Ac"}
                                    label={"Car Description"}
                                    name={"description"}
                                    onChangeCarName={(e)=>setDescription(e.target.value)}
                                />
                                

                                <InputComponent
                                    type="number"
                                    value={year}
                                    placeholder={"2015"}
                                    label={"Car Year"}
                                    name={"year"}
                                    onChangeCarName={(e)=>setYear(e.target.value)}
                                />

                                <InputComponent
                                    type="number"
                                    value={amount}
                                    placeholder={"1000"}
                                    label={"amount"}
                                    name={"amount"}
                                    onChangeCarName={(e)=>setAmount(e.target.value)}
                                />
                        
                                <FileUploadComponent onImageChange = {onImageChange} />

                                <ButtonComponent handleClick={handleSubmit}/>
                            </div>
                            {/* <a href="#" class="btn btn-primary mt-2">Add Car</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCar;