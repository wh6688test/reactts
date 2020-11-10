
import { ServiceResponseType, ServiceDataType, FormStateType} from '../../types/myFormTypes';


import {getAllGroups} from '../services/GroupService';


// filtering out service data if data retrieved
  const retrieveGroups  = (inputData:string[]):ServiceResponseType => {
     
      //let allGroups:Promise<ServiceResponseType>  = getAllGroups();
      getAllGroups().then(g => {
         if ('data' in g ) {
             //let responseData:Set<ServiceDataType> = 
                //new Set((
                  let response1:ServiceResponseType=JSON.parse(JSON.stringify(g));
                  let responseData:ServiceDataType[]=response1.data;
                  return responseData.filter( (k:ServiceDataType) => (inputData.includes(k.group_attribute.attr1)) && inputData.includes(k.group_attribute.attr2));
                //return [{"gid":1}];
             //return Array.from(responseData);
         } 
         return g;
      });
      return {code:500, error:"General Error"};
  };

             
  export function handleApi(inputData:string[]):ServiceResponseType {
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
