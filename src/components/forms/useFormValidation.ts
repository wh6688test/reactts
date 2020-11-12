//https://react-hook-form.com/advanced-usage/
//https://stackoverflow.com/questions/55565444/how-to-register-event-with-useeffect-hooks
import { isFormValid, getInputData, handleApi} from '../../apps/forms/utils';

import { useState, useEffect, useCallback} from 'react';
import { FormStateType, ServiceDataType } from '../../types/myFormTypes';

//need to rework
export const useFormValidation  = (fieldState:FormStateType )=> {

  const [inputData, setInputData] = useState<string[]>([]);
  const [formClientStatus, setFormClientStatus] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formServiceError, setFormServiceError] = useState("");
  const [formServiceStatus, setFormServiceStatus] = useState(-1);
  //const [formServiceData, setFormServiceData] = useState<ServiceDataType[]>([]);
  const [groupData, setGroupData] = useState<string[]>([]);
                          

  //client side validation
  useEffect(() => {
    setFormClientStatus(isFormValid(fieldState));
    //in case input data is reused
    setInputData(getInputData(fieldState));
  }, [fieldState]);
  
  
  const handleOnSubmit=useCallback( (event1:React.FormEvent<EventTarget>) => {

     if (event1) {
      event1.preventDefault();
     }
      
      setIsSubmitting(true);

      handleApi(inputData).then( result => {
         
            let {code, error, data} = {...result};
            (code !== -1) && setFormServiceStatus(code);
            setFormServiceError((!!error && error!=="")?error:"");

            if (data && data.length !== 0) {
                //simplify data passing and reuse
                let groupData1:string[]=data.map((g:ServiceDataType) => 
                    (JSON.stringify({group_id:g.group_id, attr1: g.group_attribute.attr1, attr2: g.group_attribute.attr2, member_count: g.members?g.members.length:0})));
                  setGroupData(groupData1);
            } else {
                setGroupData([]); 
            }
     });
     return () => reset();
   }, [isSubmitting, fieldState]);

  //could add more reset later
  const reset = () =>{
     setIsSubmitting(false);
  }
  
  return {
    formClientStatus,
    //inputData,
    handleOnSubmit,
    isSubmitting,
    formServiceStatus,
    formServiceError,
    //formServiceData,
    groupData,
  };
}
