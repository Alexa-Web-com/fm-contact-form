import { ReactNode } from "react";

export type FormFieldType = {
  id: string;
  children: ReactNode;
  setValidMsg: (msg: string) => void;
};

export type InputFieldType = FormFieldType & {
  value: string;
  type: string;
  onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
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
