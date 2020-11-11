//https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5
import {properties} from '../properties/app';
import axiosInstance1 from './serviceConfig';
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
/** 
export const getAllGroupAttributes = ():Promise<any> => {

   return axiosInstance1.get("/groups/attributes").then (response => {
             return response;
   });
};

export const getByMemberId = (memberId:string):Promise<any> => {
  return axiosInstance1.get("/group/member/"+memberId);
};

export const createGroup = (groupData:Object) => {
  axiosInstance1.post("/group", groupData);

}

export const updateMemberRating = (groupId:string, updateData:Object ) => {
  axiosInstance1.put(properties.baseUrl+"/group/"+groupId+"/attr/", updateData);
}
**/
