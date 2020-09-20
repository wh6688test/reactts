export type CallBackType =(...args:any[]) => ServiceStatusType;

export type FuncType1 = (e:React.ChangeEvent<HTMLInputElement>) => any;
export type FuncType2= (e:React.FormEvent<HTMLInputElement>) => void;

export type FuncType3 = (ValueType, ErrorType) => any;

export interface ValueType {
   [key:string]:any;
};

export interface ServiceResponseType {
   code:number;
   error?:string;
   data?:JsonServiceType;
}
export interface ServiceDataType {
   group_id:string;
   group_attribute:GroupAttributeType;
   members?:MemberType[];
}

export interface FieldStateType {
   value:string, 
   error:string,
  //input1: {value:string, error:string},
  //input2: {value:string, error:string},
  //input3: {value:string, error:string},
  //input4: {value:string, error:string}
}

export interface FormStateType {
    [name:string]:FieldStateType;
};



export type JsonServiceType=Jsonify<ServiceDataType>;

export interface GroupAttributeType {
   attr1:string;
   attr2:string
}
export interface MemberType {
   member_id: string,
   rating:number
}
export interface ErrorType {
   [key:string]:any;
};

export interface ValidationRules {
   name:string;
   value:string;
   minLength:number;
   maxLength:number;
   required:boolean;
   pattern:string;
}