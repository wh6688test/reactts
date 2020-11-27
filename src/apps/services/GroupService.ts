//https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5
//import {properties} from '../properties/app';
//https://blog.logrocket.com/async-await-in-typescript/
import axiosInstance1 from './ServiceConfig';
import { ServiceResponseType} from '../../types/myFormTypes';

export const getAllGroups = async ():Promise<ServiceResponseType> => {
   
  
     return await axiosInstance1.get("/groups").then (response => {
            return Promise.resolve({code:response.status, error: "", data:response.data});
     }

    ).catch(err=> {
      //Response.
      //return {code: err.status, data: [{"group_id":"1", "group_attribute":{"attr1":"group1", "attr2":"group2"}}], error:err};
       return Promise.resolve({code: err.status, data: [], error:err});
      
   });
}
