import { isFormValid, setBootStrapFormValid, handleApi} from '../../apps/forms/utils';
//https://upmostly.com/tutorials/form-validation-using-custom-react-hooks
//https://github.com/Upmostly/custom-react-hooks-form-validation

import { useState, useEffect} from 'react';
import { ValueType, ErrorType, FormStateType, ServiceResponseType, JsonServiceType} from './FormTypes';
//import axios from 'axios';
import {getAllGroups} from '../../apps/services/GroupService';

export const useFormValidation  = (fieldState:FormStateType )=> {

  //const [states, setStates] = useState(initialFieldStates);
   //const [errors, setErrors] = useState([]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formClientStatus, setFormClientStatus] = useState(false);
  const [formServiceError, setFormServiceError] = useState("");
  const [formServiceStatus, setFormServiceStatus] = useState(-1);
  const [formServiceData, setFormServiceData] = useState<JsonServiceType[]>(
                              []);
                          

  //const {fieldStates, setClientStatus, handleOnChange}
  //= validateFields(fieldValidateRule, initialFieldStates);
  
  useEffect(() => {
    //if (Object.keys(errors).length === 0 && isSubmitting) {
      //isFormValid(errors)
    setFormClientStatus(isFormValid(fieldState));
  }, [fieldState]);
  
  useEffect(() => {

    if (isSubmitting) {
          
          //let result:ServiceResponseType=handleApi();
          //axios.get("http://localhost:8000/groups/")
          getAllGroupAttributes().then(response1 => {
             if (response1.data) {
                 getAllGroups()
                 .then (data1 => {
                      setFormServiceData(data1);
                 }
             } else {
               createGroup().then ()
             }
       //let code:number=response.status, error="", data:JsonServiceType=JSON.stringify(response.json);
       //let code:number=response.status, error="", data:JsonServiceType=JSON.stringify(response.data);
       //result={code:code,error:error, data:data};
       //return {code, error, data};

         }
    )
    .catch(err => {
        let code:number=500, error:string ="unexpected error occured";
        //result={code:code, error:error, data:initialData};
        //return {code, error, data}
        setFormServiceError(error);
    });
    //return result;
  };

          //setFormServiceData(result);
          //console.log(result)
          //if (result.code) {
             //setFormServiceStatus(result.code);
          //}
          //if (result && result.error) {
             //result && result.error && setFormServiceError(result.error);
          //}
          //if (result.data) {
             //result && result.data && setFormServiceData(result);
          //}
   // }
          //done form submission
          setIsSubmitting(false);
    
  }, [isSubmitting]);

  
  const handleOnSubmit  = (event: React.FormEvent<EventTarget>) :void => {
    if (event) {
      event.preventDefault();
    }

    //validate form states : if no errors in any field, then the client is valid
    //setFieldStatus(validateFields(fieldValidateRule));
    //bootstrap required
    //submission is true
    setIsSubmitting(true);
    /** 
    if (formClientStatus) {
      setBootStrapFormValid(event);
      //setFormClientStatus(true)
    }**/
    
  }
  /**
  const handleOnBlur :{}= (event:React.MouseEvent)  => {
    if (event) {
      event.preventDefault();
    }
    //event.persist();
    setClientStatus();
  };
  **/
  
  //const handleChange : {}  =  (event1:React.ChangeEvent<HTMLInputElement>) =>  {
   // if (event1) event1.persist();
   // setValues(values => ({ ...values, [event1.target.name]: event1.target.value }));


  return {
    formClientStatus,
    handleOnSubmit,
    isSubmitting,
    formServiceStatus,
    formServiceError,
    formServiceData
  }

};