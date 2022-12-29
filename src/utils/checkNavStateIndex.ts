import { NavItem } from "../types/NavItem";

export const checkNavStateIndex = (navItems: NavItem[]): number =>
  navItems.findIndex(({ isActive }) => isActive === true);
