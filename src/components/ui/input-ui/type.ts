export type TInput = {
  placeholder: string;
  value?: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
  name?: string;
};
