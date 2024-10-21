import { logout, userSelector } from "../../features/userSlice/userSlice"
import { useDispatch, useSelector } from "../../store/store"
import { MenuAuthUI } from "../ui/menu-auth-ui/menu-auth-ui"

export const MenuAuth = () => {
  const {isAuthenticated} = useSelector(userSelector)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
  }

  return <MenuAuthUI isAuth={isAuthenticated} onClick={handleClick} />

}