
import { ServiceResponseType, ServiceDataType, FormStateType} from '../../types/myFormTypes';


import {getAllGroups} from '../services/GroupService';


// filtering out service data if data retrieved
  const retrieveGroups  = async (inputData:string[]):Promise<ServiceResponseType> => {
     

      return await getAllGroups().then(g => {
         
                  let response1:ServiceResponseType=JSON.parse(JSON.stringify(g));
                  let responseData:ServiceDataType[]=response1.data;
                  responseData=responseData.filter( (k:ServiceDataType) => (inputData.includes(k.group_attribute.attr1)) && inputData.includes(k.group_attribute.attr2));
               
                  return Promise.resolve({code: response1.code, data: responseData, error:response1.error});
                
      });
     
  };

             
  export async function handleApi(inputData:string[]):Promise<ServiceResponseType> {
    return retrieveGroups(inputData);
  }

  export const isFormValid  = (state:FormStateType):boolean => {
       
       if (Object.keys(state).some(key => 
         !!state[key].error || state[key].error.length !== 0 || !state[key].dirty
       ))  {
         return false;
       }

       return true;
  }

  export const getInputData  = (state:FormStateType):string[] => {

    return isFormValid(state) && (Object.values(state)).map(k=>k.value);

  }

  export const setBootStrapFormValid = (event: React.FormEvent<EventTarget>) : void => {
      
      let target=event.target as HTMLFormElement;
      target.className +=' was-validated';
    
  }
  const HINT="Please enter valid input";
  
  export const ClientHints = {
  HINT1: HINT+'1',
  HINT2: HINT+'2',
  HINT3: HINT+'3',
  HINT4: HINT+'4',
};

export const ClientErrors = {
  REQUIRED: 'required', 
  MIN: 'min not satisfied',
  MAX: 'max not satisfied',
  PATTERN: 'pattern not satisfied',
};
