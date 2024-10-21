import { MenuAuth } from "../menu-auth/menu-auth";
import { Menu } from "../menu/menu";
import { TLayoutProps } from "./type";

export const Layout: React.FC<TLayoutProps> = ({ children }) => {
  return <div className="layout">
    <Menu />
    <MenuAuth />
    {children}
  </div>
}