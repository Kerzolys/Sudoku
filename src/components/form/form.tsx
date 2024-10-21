import { useState } from "react";
import { TFormProps } from "./type";
import { useDispatch } from "../../store/store";
import { FormUI } from "../ui/form-ui/form-ui";

export const Form: React.FC<TFormProps> = ({ formName, formHeader, action, buttonText }) => {
  const [values, setValues] = useState({ email: "", password: '' })
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target
    setValues(prevValues => ({
      ...prevValues, [name]: value
    }))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    if (values.email === '' && values.password === '') {
      setError('Please enter your email address.')
      return
    }

    setError('')
    // dispatch(loginUser({ email: values.email, password: values.password }))
    dispatch(action({ email: values.email, password: values.password }))
  }


  return (<>
    <h2>{formHeader}</h2>
    <FormUI values={values} onChange={handleChange} onSubmit={handleSubmit} buttonText={buttonText} error={error} formName={formName} />
  </>)

}