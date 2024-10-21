import { ButtonUI } from "../button-ui/button-ui";
import { InputUI } from "../input-ui/input-ui";
import { TFormUIProps } from "./type";

export const FormUI: React.FC<TFormUIProps> = ({ onSubmit, onChange, values, buttonText, error, formName }) => {
  return (
    <form onSubmit={onSubmit} name={formName}>
      <InputUI name='email' error={error} placeholder="email" value={values.email} onChange={onChange} />
      <InputUI name='password' error={error} placeholder="password" value={values.password} onChange={onChange} />
      <ButtonUI buttonText={buttonText} type='submit' disabled={!values} />
    </form>
  )
} 