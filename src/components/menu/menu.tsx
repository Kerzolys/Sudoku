import { userSelector } from "../../features/userSlice/userSlice"
import { useSelector } from "../../store/store"
import { MenuUI } from "../ui/menu-ui/menu-ui"

export const Menu = () => {
  const {isAuthenticated} = useSelector(userSelector)
  console.log(isAuthenticated)

  return <MenuUI isAuth={isAuthenticated}/>
}