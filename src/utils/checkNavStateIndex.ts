import { NavItem } from "../types/NavItem";

// funkcja sprawdzajaca, ktory element nawigacji jest aktywny i zwracajaca jego pozycje w tablicy jako numer, odwolujemy sie potem do niego np. navItems[number]
export const checkNavStateIndex = (navItems: NavItem[]): number =>
  navItems.findIndex(({ isActive }) => isActive === true);
