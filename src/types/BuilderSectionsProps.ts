import { NavItem } from "./NavItem";
import { Product } from "./Product";

export interface BuilderSectionsProps {
  navItems: NavItem[];
  selectedProduct: Product | undefined;
}
