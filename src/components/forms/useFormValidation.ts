import { isFormValid, getInputData, handleApi} from '../../apps/forms/utils';
//https://upmostly.com/tutorials/form-validation-using-custom-react-hooks
//https://github.com/Upmostly/custom-react-hooks-form-validation

import { useState, useEffect} from 'react';
import { FormStateType, ServiceDataType, ServiceResponseType} from '../../types/myFormTypes';
//import axios from "axios";
//import {axiosInstance} from "../../"

//import axios from 'axios';
//import {getAllGroups} from '../../apps/services/GroupService';

export const useFormValidation  = (fieldState:FormStateType )=> {

  
   //const [errors, setErrors] = useState([]);
  const [inputData, setInputData] = useState([]);
  const [formClientStatus, setFormClientStatus] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formServiceError, setFormServiceError] = useState("");
  const [formServiceStatus, setFormServiceStatus] = useState(-1);
  const [formServiceData, setFormServiceData] = useState(
                              "");
                          

  //const {fieldStates, setClientStatus, handleOnChange}
  //= validateFields(fieldValidateRule, initialFieldStates);
  

  useEffect(() => {
    //if (Object.keys(errors).length === 0 && isSubmitting) {
      //isFormValid(errors)
    //let formValid=false;
    
    setFormClientStatus(isFormValid(fieldState));
    setInputData(getInputData(fieldState));
  
    //setFormClientStatus(formValid);
  }, [fieldState]);
  
  /**
  useEffect(() => {
    
    if (isSubmitting) {
        
        //might need to move it to event handler
          let result:ServiceResponseType=handleApi(inputData);

        

             let {code, error, data} = {...result};

              !!code && setFormServiceStatus(code);
              !!data && setFormServiceData(data);
  
              !error && setFormServiceError(error);
  
       
          setIsSubmitting(false);
       
    
  }, [isSubmitting]);
**/
  
  function handleOnSubmit(event: React.FormEvent<EventTarget>)  {
    if (event) {
      event.preventDefault();
    }

    //validate form states : if no errors in any field, then the client is valid
    //setFieldStatus(validateFields(fieldValidateRule));
    //bootstrap required
    //submission is true
    setIsSubmitting(true);
   
      handleApi(inputData).then( result => {
         
             //let {code, error, data} = handleApi(inputData);
            console.log("WHSU : result", result);

            let {code, error, data} = {...result};

             console.log("WHSU : code", code);
               console.log("WHSU : error", error);
              //let data1:ServiceDataType[] = data;
              let data1:string=JSON.stringify(data);
              (code !== -1) && setFormServiceStatus(code);
              (!!error && error !== "") &&  setFormServiceError(error);

              if (data1 && data1.length !== 0) {
                  setFormServiceData(data1);
                 //setFormServiceData(data1);
              }
              //setFormServiceError(error);
      });

    setIsSubmitting(false);

    //using the form input only during the submit for the logic

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
    //inputData,
    handleOnSubmit,
    isSubmitting,
    formServiceStatus,
    formServiceError,
    formServiceData
  }
};
