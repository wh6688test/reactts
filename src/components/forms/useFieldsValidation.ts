import { useState} from 'react';
import  {ClientErrors} from '../../apps/forms/utils';

import {ErrorType,ValueType, ValidationRules, FieldStateType, FormStateType} from './formTypes';

export const useFieldsValidation  = (initialStates: FormStateType) => {
  // for field validation
  const [isInitial, setIsInitial] = useState(true);

  const [fieldState, setFieldState] = useState<FormStateType>(initialStates);
  //const [errors, setErrors]= useState<ErrorType>(initialErrors);
  //const [fieldValid, setFieldValid] = useState(true);
  //const [formClientStatus, setFormClientStatus] = useState(false);

  // for form client side validation
  //const [isUpdated, setIsUpdated] = useState(false);
  

  const validateField=(e: React.FormEvent<HTMLInputElement>) : void => {

      let name:string =e.currentTarget.name, value:string=e.currentTarget.value;
      //let currentErrors:ErrorType=initialErrors;

      let validationRules:ValidationRules = {"name": name, "value":value, "minLength":e.currentTarget.minLength, "maxLength":e.currentTarget.maxLength, "required":e.currentTarget.required, "pattern":e.currentTarget.pattern};
  
      let error="";
      let dirty=false;

      const pattern1=new RegExp(validationRules.pattern);
      if (!validationRules["required"] || (!!value) || (!!error)) {
        dirty=true;
      }
      if ( validationRules["required"] && (!value || value.trim()==="")) {
          //if (!value || value.trim()==="" && !currentErrors[name].includes(ClientErrors.REQUIRED)) {
             
                //currentErrors[name].push(ClientErrors.REQUIRED);
                //setErrors(currentErrors)
                error +="\n"+ClientErrors.REQUIRED;
            
      }

      if (validationRules['pattern'] && !pattern1.test(value.trim()))  {

          //const pattern1=new RegExp(validationRules["pattern"]);
          //const pattern1=new RegExp("^[a-zA-Z_]+$");
        
          //if( (!pattern1.test(value.trim()) && !currentErrors[name].includes(ClientErrors.PATTERN) ) ) {
          
            error +="\n"+ClientErrors.PATTERN;
              //setFieldValid(false);
              //currentErrors[name].push(ClientErrors.PATTERN);
              //setErrors(currentErrors);

              /** 
              setErrors((prevState) => ({
                  ...prevState,
                  [name]: currentErrors,
              }))
              
          } else {
            // setFieldValid(true);
             let index1:number=currentErrors[name].indexOf(ClientErrors.PATTERN);
             if (index1 > 0) {
                 currentErrors[name].splice(index1, 1);
                 setErrors(currentErrors);
                 
                  setErrors((prevState) => ({
                  ...prevState,
                  [name]: currentErrors,
                  }))
               //setErrors(currentErrors);
             //setErrors(currentErrors[name].splice(currentErrors[name].indexOf(ClientErrors.PATTERN), 1));
            // }
             
         // }
         **/
      }
      if (validationRules['minLength'] && validationRules['minLength'] > 0 && value.trim().length < validationRules['minLength']) {
                //currentErrors[name].push(ClientErrors.MIN);
                /** 
                setErrors(prevState =>({
                  ...prevState,
                  [name]: currentErrors,
                }));
                **/
                //setErrors((prevState) => ({
                 // ...prevState,
                 // [name]: currentErrors,
              //}))
              error +="\n"+ClientErrors.MIN;
    
      }
       if (validationRules['maxLength'] && validationRules['maxLength'] > 0 && value.trim().length > validationRules['maxLength'] ) {
                //setFieldValid(false);
                //currentErrors[name].push(ClientErrors.MAX);
                //setErrors(currentErrors);
             error +="\n"+ClientErrors.MAX;
      }
      
      //return {isValid, errors};
      //return errors;
      setFieldState(prevState => ({
        ...prevState,
        [name]: {value, error, dirty},
      }))

  };

  //const updateField = (event:React.FormEvent<HTMLInputElement>) => {
  const handleOnChange = (e:React.FormEvent<HTMLInputElement>) => {
   
   // let name:string=e.currentTarget.name;
    //let value:string=e.currentTarget.value;
    setIsInitial(false);

    if (e) {
      e.persist();
    }
    /** 
    setValues((prevState) => ({
          ...prevState,
          [name]: value,
    }))**/
    validateField(e);
  
  // }
   // else {
      
   // }
   
    //return {validField, values, errors}
    //handle field pattern
    //pattern && !pattern.regex.test(value)) {
      // didn't have the error yet in the error array
      
    
    //update field values and set new errors
    //setFieldStates((prevState) => ({
     // ...prevState,
      //[name]: { value, fieldErrors },
   // }));
   
    //return fieldErrors.length==0;//change to each field property length === 0
    //return fieldStates;
  //}, [fieldStates]);
  //}

  //const updateFieldValue = useEffect {
   // updateField();
  }
  
  //const handleOnChange = (e:React.FormEvent<HTMLInputElement>) => {
    // A. following client side validations based on api request requirements
    // 1. field length validation
    // 2. field allowed validation
    // 3. field required validation
    // need to set disable state during validateFields : 
    // check the overal form state inside validate fields
    //only update values without error validation
    //if (e) {
     //  e.persist();
    //}
   // updateField(e);
    //validateField(e);
  //};
  //const handleOnClick = (e:React.FormEvent<HTMLInputElement>) => {
    // A. following client side validations based on api request requirements
    // 1. field length validation
    // 2. field allowed validation
    // 3. field required validation
    // need to set disable state during validateFields : 
    // check the overal form state inside validate fields
    //only update values without error validation
    //if (e) {
     //  e.persist();
    //}
    //updateField(e);
    //validateField(e);
  //};

  const handleOnBlur = (e:React.FormEvent<HTMLInputElement>) => {
    // A. following client side validations based on api request requirements
    // 1. field length validation
    // 2. field allowed validation
    // 3. field required validation
    // need to set disable state during validateFields : 
    // check the overal form state inside validate fields
    //only update values without error validation
    
    //only updates error states values
    if (e) {
      e.preventDefault();
    }
    validateField(e);
    /** 
    if (!fieldValid) {
      setFormClientStatus(false);
    }
    if (!errors || errors.length===0) {
      setFormClientStatus(true);
    }
    **/
    //update form UI component values
    //updateField(e);
  };

  const handleOnClick = (e:React.FormEvent<HTMLInputElement>) => {
    // A. following client side validations based on api request requirements
    // 1. field length validation
    // 2. field allowed validation
    // 3. field required validation
    // need to set disable state during validateFields : 
    // check the overal form state inside validate fields
    //only update values without error validation
    
    //only updates error states values
    if (e) {
      e.preventDefault();
    }
    validateField(e);
    /** 
    if (!fieldValid) {
      setFormClientStatus(false);
    }
    if (!errors || errors.length===0) {
      setFormClientStatus(true);
    }
    **/
    //update form UI component values
    //updateField(e);
  };

  return {
     isInitial, fieldState, handleOnChange, handleOnBlur, handleOnClick
  } as const;

};