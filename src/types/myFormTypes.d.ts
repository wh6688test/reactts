
export type FieldStateType= {
   value:string, 
   error:string,
   dirty:boolean;
  //input1: {value:string, error:string},
  //input2: {value:string, error:string},
  //input3: {value:string, error:string},
  //input4: {value:string, error:string}
};

export type FormStateType = {
    [name:string]:FieldStateType;
};



export type FuncType1 = (e:React.ChangeEvent<HTMLInputElement>) => any;

export type FuncType2= (e:React.FormEvent<HTMLInputElement>) => void;

export type FuncType3 = (ValueType, ErrorType) => any;

export type ValueType = {
   [key:string]:any;
};


//export type JsonServiceType=JSonify<ServiceDataType>;

export type GroupAttributeType = {
   attr1:string;
   attr2:string
}
export interface MemberType {
   member_id: string,
   rating:number
}

export type ErrorType = {
   [key:string]:any;
};

export type ValidationRules = {
   name:string;
   value:string;
   minLength:number;
   maxLength:number;
   required:boolean;
   pattern:string;
};

export type ServiceDataType = {
   group_id:string;
   group_attribute:GroupAttributeType;
   members?:MemberType[];
};

export type ServiceResponseType = {
   code:number;
   error?:string;
   //data?:JsonServiceType;
   data?: ServiceDataType[];
};

export type CallBackType = (...args:any[]) => ServiceResponseType;