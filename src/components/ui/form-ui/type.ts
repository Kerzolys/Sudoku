export type TFormUIProps = {
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  values: {
    email: string;
    password: string;
  };
  buttonText: string;
  error: string | undefined;
  formName: string;
}