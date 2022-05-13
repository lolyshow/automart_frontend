import React,{useState,useEffect} from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import Helper from "../helpers/Helper";
function ManageCars(){
    useEffect(() => {
            getCars()
        
    }, [])
    const [processing, setProcessing] = useState(false)
    const [userData, setUserData] = useState(null)
    const onClickDelete= async(id)=>{
        

            try {
                setProcessing(true);
                let path = "api/app/deleteCar";
                let payload = {
                    id
                }
                await Helper.Request(path,"post",payload,"application/json")
                .then((result) =>{ 
                  let { message, error, response } = result;
                  setProcessing(false);
                  if (!error) {
                      console.log(response);
                      if(response.status === 200){
                        setProcessing(false);
                        return getCars()
                      }
                    
                  } else {
                    setProcessing(false);
                  }
          
                });
                
            }catch (error) {
                setProcessing(false);
            }
        
    }

    const getCars= async()=>{
        try {
            setProcessing(true);
            let path = "api/app/getAllCars";
            await Helper.Request(path,"get")
            .then((result) =>{ 
              let { message, error, response } = result;
              setProcessing(false);
              
              if (!error) {
                setProcessing(false);
                if(response?.status == 200){
                    
                    setUserData(response)
                }
                
                
              } else {
                setProcessing(false);
              }
      
            });
            
        }catch (error) {
            setProcessing(false);
        }
    }

    const onclickImage = (url) =>{
        console.log("clickedMe",url)
    }

    const tableContent=()=>{
        let {data,others} = userData;
        return(
            <tbody>
                {data &&
                
                    (data.map((data, index)=>{
                        return(<tr key = {index}>
                        <th scope="row">{index+1}</th>
                        <td onClick={()=>onclickImage(others.imagePath+data.image)}><img  src = {others.imagePath+data.image} height={30} width={30}/></td>
                        <td>{data.name}</td>
                        <td>{data.description}</td>
                        
                        <td> <a onClick = {()=>onClickDelete(data._id)} class = "text-danger"><i class="bi bi-trash"></i></a></td>
                    </tr>)}))
                }
            </tbody>
        )
    }

    return (
        <div className = "container">
        {processing ? <LoadingSpinner />:null}
                            
            <div className = "card mt-3">
                <div className = "card-body justify-content-center">
                <table class="table table-striped ">
                    <thead class="thead-dark">
                        <tr class="">
                            <th scope="col">id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action
                            </th>
                        </tr>
                    </thead>
                    
                    {userData && tableContent()}
                        
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageCars;