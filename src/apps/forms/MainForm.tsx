//https://mdbootstrap.com/docs/react/forms/validation/
//https://getbootstrap.com/docs/4.3/components/forms/
//form client side field validation : :invalid :valid  (psydeuoclass : together with .was_validated on parent form  
//and novalidate boolean attribute on form to prevent initial form validation errors : was_validated class is added in handleSubmit when the for client validation has passed without class side errors

//form service side validation : using .is_invalid and .is_valid for server side validation
//use ref https://medium.com/@rossbulat/react-using-refs-with-the-useref-hook-884ed25b5c29
//https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks
//filed validation
//display json data : https://forum.freecodecamp.org/t/accessing-json-object-within-an-object/171447/3
import React from 'react';

import {
  MDBContainer, MDBRow, MDBCol, MDBBtn, MDBFormInline, MDBDataTableV5
} from 'mdbreact';

import {useFieldsValidation} from '../../components/forms/useFieldsValidation';
import {useFormValidation} from '../../components/forms/useFormValidation';

import { ClientHints} from './utils';

import ErrorPage from '../layout/ErrorPage';
import Divider from '../../components/commons/Divider';
import Body from '../layout/Body';


const MainForm = () => {

  const initialStates = {
    input1: {value: "", error:"", dirty:false},
    input2: {value: "", error:"", dirty:false},
    input3: {value: "", error:"", dirty:false},
    input4: {value: "", error:"", dirty:false},
  };

  const {isInitial, fieldState, handleOnChange, handleOnBlur, handleOnClick}=useFieldsValidation(initialStates);

  const {formClientStatus, handleOnSubmit, isSubmitting, formServiceStatus, formServiceError, groupData}= useFormValidation(fieldState);

  const datatable=({
    columns: [
       {
        label: 'GroupId',
        field: 'group_id',
        sort: 'asc',
      },
      {
        label: 'GroupAttribute1',
        field: 'attr1',
        sort: 'disabled',
      },
      {
        label: 'GroupAttribute2',
        field: 'attr2',
        sort: 'disabled',
      },
      {
        label: 'MemberCount',
        field: 'member_count',
        sort: 'disabled',
      },
    ],
    rows: (!groupData || groupData.length===0)?[]:groupData.map(g => g?JSON.parse(g):{}),
   });

  return (
  <>
    <MDBContainer className="fluid">
     <MDBFormInline className="md-form md-auto py-3 needs-validation text-black darken-3" expand="md" onSubmit={handleOnSubmit} noValidate id="wform1">
        <MDBRow>
          <MDBCol>
           
            <input className="form-control" type="text" id="input1" name="input1" value={fieldState.input1.value} placeholder="input1" pattern="^[a-zA-Z0-9_]+$" minLength={4} maxLength={5} required={true} onChange={handleOnChange} onBlur={handleOnBlur} onClick={handleOnClick} />
            {(!fieldState.input1.error && fieldState.input1.value.length===0) && <label className="hint-center">{fieldState.input1.value}{ClientHints.HINT1}</label>}
            {(!!fieldState.input1.error || fieldState.input1.error.length>0 ) && fieldState.input1.error.split("\n").map((d:string, i:number) =><div className="error-center" key={i}>{!!d && d.trim().length>0 && d.trim()}</div>)}
        
          </MDBCol>
          <MDBCol>
         
            <input className="form-control" type="text" id="input2" name="input2" value={fieldState.input2.value} placeholder="input2" onChange={handleOnChange} minLength={2} maxLength={5} onBlur={handleOnBlur} onClick={handleOnClick}/>
             {(!fieldState.input2.error && fieldState.input2.value.length===0) && <label className="hint-center" color="green">{fieldState.input2.value}{ClientHints.HINT2} </label>}
             {(!!fieldState.input2.error || fieldState.input2.error.length>0) && fieldState.input2.error.split("\n").map((d:string, i:number) =><div className="error-center" key={i}>{!!d && d.trim().length>0 && d.trim()}</div>)}
          
          </MDBCol>
          <MDBCol>
        
             <input className="form-control" type="text" id="input3" name="input3" value={fieldState.input3.value} placeholder="input3" required maxLength={15} onChange={handleOnChange} onBlur={handleOnBlur} onClick={handleOnClick}/>
            {(!fieldState.input3.error && fieldState.input3.value.length===0) && <label className="hint-center">{fieldState.input3.value}{ClientHints.HINT3}</label>}
             {(!!fieldState.input3.error || fieldState.input3.error.length > 0) && fieldState.input3.error.split("\n").map((d:string, i:number) =><div className="error-center" key={i}>{ !!d && d.trim().length>0 && d.trim()}</div>)}
           
           </MDBCol>
          <MDBCol>
           
            <input className="form-control" type="text" id="input4" name="input4" value={fieldState.input4.value} placeholder="input4" minLength={1} maxLength={5} onChange={handleOnChange} onBlur={handleOnBlur} onClick={handleOnClick} />
            {(!fieldState.input4.error && fieldState.input4.value.length===0) && <label className="hint-center" color="purple">{fieldState.input4.value}{ClientHints.HINT4}</label>}
            {(!!fieldState.input4.error || fieldState.input4.error.length > 0) && fieldState.input4.error.split("\n").map((d:string, i:number) =><div color="red" className="error-center" key={i}>{!!d && d.trim().length>0 && d.trim()}</div>)}
        
          </MDBCol>
          <MDBCol>
         
        <MDBBtn color="primary" type="submit" name="submit" onClick={handleOnSubmit} disabled={isInitial?true:(!formClientStatus && !isSubmitting)?true:false}>Submit</MDBBtn>
              
          </MDBCol>
        </MDBRow>
</MDBFormInline>
  
 </MDBContainer>

 <Divider/>
 
    { (formServiceError ||  formServiceError.length>0) && <ErrorPage/>};
    <MDBContainer className="fluid">
    {(formServiceStatus === 200) && <div className="group1"><MDBDataTableV5 hover striped bordered entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable}/></div>}
    </MDBContainer>
   { (!formServiceStatus || formServiceStatus===-1) && <Body/>}
</>
  );
}
export default MainForm;