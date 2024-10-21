import { TInput } from "./type";

export const InputUI: React.FC<TInput> = ({ placeholder, value, onChange, error, name }) => {
  return (
    <>
      <input name={name} type="text" placeholder={placeholder} value={value} onChange={onChange} />
      <span>{error}</span>
    </>
  )
}