import { MenuItemUI } from "../menu-item-ui/menu-item-ui"
import { TMenuUIProps } from "./type"

export const MenuUI: React.FC<TMenuUIProps> = ({ isAuth }) => {
  return (
    <ul>
      <MenuItemUI path="/" title="Главная страница" />
      {!isAuth ? <MenuItemUI path='/login' title='Войти' /> : <MenuItemUI path='/profile' title='Профиль' />}
      <MenuItemUI path='/game' title='Играть' />
      <MenuItemUI path="/achievments" title="Достижения" />
      {/* <MenuItemUI path="" title=""/> */}
    </ul>)
}