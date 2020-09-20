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
  MDBContainer, MDBNavbar, MDBRow, MDBCol, MDBBtn, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBDataTable, MDBFormInline
} from 'mdbreact';

import {useFieldsValidation} from '../../components/forms/useFieldsValidation';
import {useFormValidation} from '../../components/forms/useFormValidation';
import {ValidationRules, ErrorType,ValueType, JsonServiceType, FormStateType, FieldStateType, MemberType} from '../../components/forms/FormTypes';

import { ClientHints, handleApi, ClientErrors, isFormValid } from './utils';
import Divider from '../../components/commons/Divider';
import MemberComponent from './MemberComponent';

const HeaderForm = () => {

  const initialErrors = {
    input1: [],
    input2: [],
    input3: [],
    input4: []
  };

  const initialStates = {
    input1: {value: "", error:""},
    input2: {value: "", error:""},
    input3: {value: "", error:""},
    input4: {value: "", error:""},
  };
  const initialFieldStates = {value:"", error:""};
  
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
      
  const {fieldState, handleOnChange, handleOnBlur, handleOnClick}=useFieldsValidation(initialStates);

  const {formClientStatus, handleOnSubmit,isSubmitting, formServiceError, formServiceData,}=useFormValidation(fieldState);
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

  const members1=formServiceData.map( (data1, i) => (
        data1.members
       //Object.keys(formServiceData).map((key) => (
       //formServiceData[key].group_id
  ));
  
 

  /** 
  const memberId=Object.keys(members1).map((key1) => (
     key1.member_id;

  ));
  **/

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
     ],
     rows: [ 
       {group_id: groupId,
        group_attr1: group_attr1,
        group_attr2: group_attr2
       }
     ]
  }

  const membertable={


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
    <MDBDataTable hover striped bordered data={datatable} />
   
  );
}
export default HeaderForm;