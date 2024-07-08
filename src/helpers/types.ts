import { ReactNode } from "react";

export type FormFieldWrapperType = {
  children: JSX.Element;
  validMsg: string;
  clearValidMsgInitiator: string | boolean;
  setValidMsg: (msg: string) => void;
}

export type FormFieldType = {
  id: string;
  children: ReactNode;
};

export type InputFieldType = FormFieldType & {
  value: string;
  type: string;
  onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
};

export type RadioFieldsWrapperType = {
  children: ReactNode;
};

export type RadioFieldType = FormFieldType & {
  name: string;
  value: string;
  onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

export type TextareaFieldType = FormFieldType & {
  value: string;
  onChangeFunction: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength: number;
};

export type CheckboxFieldType = FormFieldType & {
  onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};
