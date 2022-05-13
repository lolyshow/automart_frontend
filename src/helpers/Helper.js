import axios from "axios";
import qs  from 'qs';
import Config from "./Config";
const Helper = {
    Request: async(linkUrl,method = "post",data=null,content_type='multipart/form-data')=>{
        let urls = Config.base_url+linkUrl;
        console.log("MyData",data)
        let result = {};

        var config = {
            method: method,
            url: urls,
            headers: { 
                'Content-Type': content_type,
            },
            data : data
        };

        await axios(config)
        .then(function (response) {
            console.log(response);
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