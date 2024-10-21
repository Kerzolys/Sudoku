import { AsyncThunk } from "@reduxjs/toolkit";

export type TFormProps = {
  formName: string;
  formHeader: string;
  // formType: string;
  action: AsyncThunk<any, { email: string; password: string }, {}>;
  buttonText: string;
};
