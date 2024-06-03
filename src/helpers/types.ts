import { ReactNode } from "react";

export type FormFieldType = {
  id: string;
  children: ReactNode;
};

export type InputFieldType = FormFieldType & {
  value: string;
  type: string;
  onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  setValidMsg: (msg: string) => void;
};

export type RadioFieldsWrapperType = {
  children: ReactNode;
  value: string;
  setValidMsg: (msg: string) => void;
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
  setValidMsg: (msg: string) => void;
};

export type CheckboxFieldType = FormFieldType & {
  onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  setValidMsg: (msg: string) => void;
};
