import axios from "axios";
import qs  from 'qs';
import Config from "./Config";
const Helper = {
    Request: async(linkUrl,method = "get",dataPayload={})=>{
    
    
        var data = JSON.stringify(dataPayload);
        let urls = Config.base_url+linkUrl;
        console.log("MyData",data)
        let result = {};

        var config = {
            method: method,
            url: urls,
            headers: { 
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/json',
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI2YjlmZTA3M2QzNjVhOGM4ODVhZmRjIiwiZW1haWwiOiJvbGFsZXJlcGhpbGxpcHNAZ21haWwuY29tIiwiaWF0IjoxNjUxOTk5NjkxLCJleHAiOjE2NTIwMDY4OTF9.JYOa5pI678LR7sI4DVmry7xn-fOh8XeZGpjwaT_Zf9c',
                // 'Cookie': 'JSESSIONID=539E0A68F2BC33FC52FF1A9A3DA11657'
            },
            data : data
        };

        await axios(config)
        .then(function (response) {
            console.log("trydtryu",response);
        let data = response.data;
            console.log(data)
            if (!data) {
            result = {
                message: "There seems to be an Error",
                error: true,
                response: null,
            };
            } else {
            
            result = {
                message: "Success",
                error: false,
                response: response.data,
            };
            }

            
        })
        .catch(function (error) {
            console.log(error.response)
        result = {
            message: error.toString(),
            error: true,
            response: null,
        };
        });
        return result;
  },
};

export default Helper;