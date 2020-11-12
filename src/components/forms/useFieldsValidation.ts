import { useState} from 'react';
import  {ClientErrors} from '../../apps/forms/utils';

import {ValidationRules, FormStateType} from '../../types/myFormTypes';

export const useFieldsValidation  = (initialStates: FormStateType) => {
  // for field validation
  const [isInitial, setIsInitial] = useState(true);

  const [fieldState, setFieldState] = useState<FormStateType>(initialStates);


  const validateField=(e: React.FormEvent<HTMLInputElement>) : void => {

      let name:string =e.currentTarget.name, value:string=e.currentTarget.value;
     
      let validationRules:ValidationRules = {"name": name, "value":value, "minLength":e.currentTarget.minLength, "maxLength":e.currentTarget.maxLength, "required":e.currentTarget.required, "pattern":e.currentTarget.pattern};
  
      let error="";
      let dirty=false;

      const pattern1=new RegExp(validationRules.pattern);
      if (!validationRules["required"] || (!!value) || (!!error)) {
        dirty=true;
      }
      if ( validationRules["required"] && (!value || value.trim()==="")) {
                error +="\n"+ClientErrors.REQUIRED;
            
      }

      if (validationRules['pattern'] && !pattern1.test(value.trim()))  {
          
            error +="\n"+ClientErrors.PATTERN;
          
      }
      if (validationRules['minLength'] && validationRules['minLength'] > 0 && value.trim().length < validationRules['minLength']) {
            
              error +="\n"+ClientErrors.MIN;
    
      }
       if (validationRules['maxLength'] && validationRules['maxLength'] > 0 && value.trim().length > validationRules['maxLength'] ) {
             error +="\n"+ClientErrors.MAX;
      }
      
      setFieldState(prevState => ({
        ...prevState,
        [name]: {value, error, dirty},
      }))

  };

  const handleOnChange = (e:React.FormEvent<HTMLInputElement>) => {
   
   
    setIsInitial(false);

    if (e) {
      e.persist();
    }
    
    validateField(e);
  }
  
  const handleOnBlur = (e:React.FormEvent<HTMLInputElement>) => {
    
    if (e) {
      e.preventDefault();
    }
    validateField(e);
   
  };

  const handleOnClick = (e:React.FormEvent<HTMLInputElement>) => {
   
    if (e) {
      e.preventDefault();
    }
    validateField(e);
   
  };

  return {
     isInitial, fieldState, handleOnChange, handleOnBlur, handleOnClick
  } as const;

};