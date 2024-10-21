import { NavLink } from "react-router-dom";
import { ButtonUI } from "../button-ui/button-ui";
import { TMenuAuthUIProps } from "./type";

export const MenuAuthUI: React.FC<TMenuAuthUIProps> = ({ isAuth, onClick }) => {
  return (
    <>
      {
        isAuth ?
          <ButtonUI buttonText="Выйти" onClick={onClick} />
          : <NavLink to='/sign-up' >
            <ButtonUI buttonText="Зарегистрироваться" />
          </NavLink>}
    </>
  )
}