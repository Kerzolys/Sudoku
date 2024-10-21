import { NavLink } from "react-router-dom";
import { TMenuItemUIProps } from "./type";

export const MenuItemUI: React.FC<TMenuItemUIProps> = ({ title, path }) => <li><NavLink to={path}>{title}</NavLink></li>
