
import { ErrorType, CallBackType, ServiceResponseType, JsonServiceType, FormStateType} from '../../components/forms/formTypes';
//import {ServiceStatusType} from '../../common/Type.d.ts';
import { listenerCount } from 'process';
import axios from 'axios';
/** 
const submitHandler = (event: => {
    event.preventDefault();

    #add className for bootstrap4
    event.target.className += " was-validated";
    #enable submit button
};**/

// calling service side api
  export function handleApi():JsonServiceType {
    // stub  api calls
    const baseUrl="localhost:8000";
    let initialData={group_id:"", 
                                group_attribute:{attr1:"", attr2:""},
                                members:[{member_id:"", rating:-1}]
                    };

    let result:JsonServiceType={};
    //{code:-1, error:"", data:initialData};

    //fetch("{{baseUrl}}/groups/", {"method":"GET"})
    //fetch("http://localhost:8000/groups/", {"method":"GET"})
    axios.get("http://localhost:8000/groups/")
    .then (response => {
       /** 
       if (!response.ok) {
         let error="service error occured";
         result={'code': response.status, 'error':error};
         return result;
       } **/
       /** 
       response.json().then(jsondata => {
                result={'code': response.status, data: jsondata};
                return result;
               }
       )**/
       //let code:number=response.status, error="", data:JsonServiceType=JSON.stringify(response.json);
       let code:number=response.status, error="", data:JsonServiceType=JSON.stringify(response.data);
       result={code:code,error:error, data:data};
       //return {code, error, data};

     }
    )
    .catch(err => {
        let code:number=500, error:string ="unexpected error occured";
        result={code:code, error:error, data:initialData};
        //return {code, error, data}
    });
    return result;
  };

  export const isFormValid  = (state:FormStateType):boolean => {
       
       if (Object.keys(state).some(key => 
         !!state[key].error || state[key].error.length !== 0
       ))  {
         return false;
       }

       return true;

     //2. if valid form, add className and enable submit, else disable submit

     
     //3. return isFormValid status

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