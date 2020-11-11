import { isFormValid, getInputData, handleApi} from '../../apps/forms/utils';
//https://upmostly.com/tutorials/form-validation-using-custom-react-hooks
//https://github.com/Upmostly/custom-react-hooks-form-validation

//https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/

import { useState, useEffect} from 'react';
import { FormStateType, ServiceDataType, ServiceResponseType, GroupType} from '../../types/myFormTypes';
//import axios from "axios";
//import {axiosInstance} from "../../"

//import axios from 'axios';
//import {getAllGroups} from '../../apps/services/GroupService';

//need to rework
export const useFormValidation  = (fieldState:FormStateType )=> {

  
   //const [errors, setErrors] = useState([]);
  const [inputData, setInputData] = useState<string[]>([]);
  const [formClientStatus, setFormClientStatus] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formServiceError, setFormServiceError] = useState("");
  const [formServiceStatus, setFormServiceStatus] = useState(-1);
  //const [formServiceData, setFormServiceData] = useState<ServiceDataType[]>(
                           //  []);
  const [groupData, setGroupData] = useState<string[]>([]);
                          

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
    
    
    
  }, [groupData]);**/

  
    

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

            let {code, error, data} = {...result};

              //let data1:ServiceDataType[] = data;
              //let data1:string=JSON.stringify(data);
               (code !== -1) && setFormServiceStatus(code);
              (!!error && error !== "") &&  setFormServiceError(error);

              if (data && data.length !== 0) {
                  //setFormServiceData(data);
                  let groupData1:string[]=data.map((g:ServiceDataType) => 
                    (JSON.stringify({group_id:g.group_id, attr1: g.group_attribute.attr1, attr2: g.group_attribute.attr2, member_count: g.members?g.members.length:0})));
        
                  setGroupData(groupData1);
                  
              } else {
                setGroupData([]);
              }

            
      });

    setIsSubmitting(false);

    //using the form input only during the submit for the logic

    /** 
    if (formClientStatus) {
      setBootStrapFormValid(event);
      //setFormClientStatus(true)
    }**/
    
  };
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
    //formServiceData,
    groupData,
  }
};
