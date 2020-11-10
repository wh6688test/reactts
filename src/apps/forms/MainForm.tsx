//https://mdbootstrap.com/docs/react/forms/validation/
//https://getbootstrap.com/docs/4.3/components/forms/
//form client side field validation : :invalid :valid  (psydeuoclass : together with .was_validated on parent form  
//and novalidate boolean attribute on form to prevent initial form validation errors : was_validated class is added in handleSubmit when the for client validation has passed without class side errors

//form service side validation : using .is_invalid and .is_valid for server side validation
//use ref https://medium.com/@rossbulat/react-using-refs-with-the-useref-hook-884ed25b5c29
//https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks
//filed validation
//display json data : https://forum.freecodecamp.org/t/accessing-json-object-within-an-object/171447/3
import React, { useEffect, useState } from 'react';

import {
  MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDataTableV5, MDBFormInline
} from 'mdbreact';

import {useFieldsValidation} from '../../components/forms/useFieldsValidation';
import {useFormValidation} from '../../components/forms/useFormValidation';
//import {FormStateType, FieldStateType, MemberType} from '../../types/myFormTypes';

import { ClientHints} from './utils';
//import Divider from '../../components/commons/Divider';
import ErrorPage from '../layout/ErrorPage';
import Divider from '../../components/commons/Divider';

//import MemberComponent from './MemberComponent';


const MainForm = () => {
  
/** 
  const initialErrors = {
    input1: [],
    input2: [],
    input3: [],
    input4: []
  };**/

  const initialStates = {
    input1: {value: "", error:"", dirty:false},
    input2: {value: "", error:"", dirty:false},
    input3: {value: "", error:"", dirty:false},
    input4: {value: "", error:"", dirty:false},
  };

  let initialFieldStates = {value:"", error:"", dirty:false};
  
  const fieldValidationRules = {
    input1: {
      minLength: 1,
      maxLength: 25,
      pattern: {
        regExp: /^[a-zA-Z]+$/,
        error: 'characters only',
      },
    },
    input2: {
      minLength: 1,
      maxLength: 25,
    },
    input3: {
      minLength: 1,
      maxLength: 25,
    },
    input4: {
      required: true,
      minLength: 1,
      maxLength: 25,
    },
    input5: {
    },
  };
      
  const {isInitial, fieldState, handleOnChange, handleOnBlur, handleOnClick}=useFieldsValidation(initialStates);

  //let {formClientStatus, handleOnSubmit, isSubmitting, formServiceError, formServiceData}={false, null, false, {}, {}};
  let {formClientStatus, handleOnSubmit, isSubmitting, formServiceStatus, formServiceError, formServiceData} = useFormValidation(fieldState);
 
  /** 
  const groupId=formServiceData.map( (data1, i) => (
       formServiceData[i].group_id
       //Object.keys(formServiceData).map((key) => (
       //formServiceData[key].group_id
  ));

  const group_attr1=formServiceData.map( (data1, i) => (
       formServiceData[i].group_attribute.attr1
       //Object.keys(formServiceData).map((key) => (
       //formServiceData[key].group_id
  ));

  const group_attr2=formServiceData.map( (data1, i) => (
       formServiceData[i].group_attribute.attr2
       //Object.keys(formServiceData).map((key) => (
       //formServiceData[key].group_id
  ));
  const members2=formServiceData.map( (data1, i) => (
        data1.members
       //Object.keys(formServiceData).map((key) => (
       //formServiceData[key].group_id
  ));
  
  
  let members:any[]= [{group_id: groupId,
        group_attr1: group_attr1,
        group_attr2: group_attr2, 
        }];
**/

        /** 
  let allobject1:Object={group_id: groupId,
        group_attr1: group_attr1,
        group_attr2: group_attr2
       };**/
  let allobject:any[]=[];
        //group_attr1: group_attr1,
        //group_attr2: group_attr2);
  /** 
  members.map( (m, i) => (Object.keys(members[i]).map(k=>(allobject.push({group_id: groupId,
        group_attr1: group_attr1,
        group_attr2: group_attr2, member_id:members[i][k].member_id, rating:members[i][k].rating})))));
 **/

  
   

  //members2.map( (m, i) => (Object.keys(members2[i]).map(k=>(members.push({member_id:members2[i][k].member_id, rating:members2[i][k].rating})))));
  //allobject=members;
    /** 
   allobject=[{group_id: groupId,
        group_attr1: group_attr1,
        group_attr2: group_attr2, 
        }];
   **/
        /**
   allobject.push
       {group_id: groupId,
        group_attr1: group_attr1,
        group_attr2: group_attr2,
        members[0]
       }**/
  //allobject=members;

  const datatable={
     columns : [
       {label : 'group',
        field: "group_id",
        sort: 'asc',
       },
       {label : 'group_attr1',
       field : 'group_attr1'},

       {label : 'group_attr2',
       field : 'group_attr2'},

       {label : 'member_id',
        field:  "member_id",
       },

       {label : 'rating',
        field:  "rating",
       },
     ],
    
     rows: 
      allobject
    
  }

  const membertable={
      columns : [
       {label : 'group',
        field: "group_id",
        sort: 'asc',
       },
       {label : 'group_attr1',
       field : 'group_attr1'},

       {label : 'group_attr2',
       field : 'group_attr2'},

       {label : 'member_id',
        field:  "member_id",
       },

       {label : 'rating',
        field:  "rating",
       },
     ],
     rows:  
       [allobject]
  }

/** 
  
  let datalist:JsonServiceType[]=[];
  for (let key1 in formServiceData) {
        let data1:JsonServiceType;
        const group1=formServiceData.group_id;

        data1.group_id=group1;

  }**/

  /** 
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'MemberId',
        field: 'member_id',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'MemberId',
        },
      },
      {
        label: 'Rating',
        field: 'rating',
        width: 270,
      },
      {
        label: 'GroupAttribute1',
        field: 'attr1',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'GroupAttribute2',
        field: 'attr2',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'GroupId',
        field: 'group_id',
        sort: 'disabled',
        width: 100,
      },
    ],
    
    
    rows: [
      {
        member_id: formServiceData.members[0].member_id,
        rating: formServiceData.members[0].rating,
        attr1: formServiceData.group_attribute,
        attr2: formServiceData.group_attribute.attr2,
        group_id: formServiceData.group_id,
      },
      
      {
        name: 'Paul Byrd',
        position: 'Chief Financial Officer (CFO)',
        office: 'New York',
        age: '64',
        date: '2010/06/09',
        salary: '$725',
      },
      {
        name: 'Gloria Little',
        position: 'Systems Administrator',
        office: 'New York',
        age: '59',
        date: '2009/04/10',
        salary: '$237',
      },
    ],
    
  });
  **/
  
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
         
                <MDBBtn color="primary" type="submit" name="submit" onClick={handleOnSubmit} disabled={(isInitial?true:!formClientStatus) && !isSubmitting}>Submit</MDBBtn>
              
          </MDBCol>
        </MDBRow>
</MDBFormInline>
 </MDBContainer>

   {!isSubmitting && !formServiceError && formServiceData.length!==0 && <MDBDataTableV5 hover striped bordered data={datatable}/>}
  
   { (formServiceError ||  formServiceError.length>0) && <ErrorPage/>}
  


</>

  )
}

export default MainForm;