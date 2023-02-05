import { NavItem } from "./NavItem";
import { Product, SelectedProduct } from "./Product";

export interface BuilderSectionsProps {
  navItems: NavItem[];
  selectedProduct: SelectedProduct | undefined;
  // takie typy raczej sie szuka jak typowac lub kopiuje z podpowiedzi edutora ;)
  setSelectedProduct: React.Dispatch<
    React.SetStateAction<SelectedProduct | undefined>
  >;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
