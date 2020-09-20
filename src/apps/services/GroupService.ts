
//https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5
import {properties} from '../properties/app';
import axios from 'axios';
import { ValueType, ErrorType, FormStateType, ServiceResponseType, JsonServiceType} from '../../components/forms/FormTypes';

export const getAllGroups = ():Promise<any> => {

   return axios.get(properties.baseUrl+"/groups/").then (response => {
             return response.data;
   });
};

export const getAllGroupAttributes = ():Promise<any> => {

   return axios.get(properties.baseUrl+"/groups/attributes").then (response => {
             return response;
   });
};

export const getByMemberId = (memberId:string):Promise<any> => {
  return axios.get(properties.baseUrl+"/group/member/"+memberId);
};

export const createGroup = (groupData:Object) => {
  axios.post(properties.baseUrl+"/group/", groupData);

}

export const updateMemberRating = (groupId:string, updateData:Object ) => {
  axios.put(properties.baseUrl+"/group/"+groupId+"/attr/", updateData);
}
/** 
export default {

    getAllGroups,
    getByMemberId,
    createGroup,
    updateMemberRating
    
}**/