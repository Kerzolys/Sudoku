import { TButtoUIProps } from "./type";

export const ButtonUI: React.FC<TButtoUIProps> = ({ buttonText, onClick, className, disabled, type }) => {
  return <button type={type} onClick={onClick} className={className} disabled={disabled}>{buttonText}</button>
}