import { NavItem } from "../../types/NavItem";
import { Product, SelectedProduct } from "../../types/Product";
import { BuilderNavigation } from "./BuilderNavigation/BuilderNavigation";

interface Props {
  navItems: NavItem[];
  selectedProduct: SelectedProduct | undefined;
  handleSetActiveNavItem: (titleId: string, back?: boolean) => void;
  setShowAlert: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const BuilderHeader = ({
  navItems,
  selectedProduct,
  handleSetActiveNavItem,
  setShowAlert,
}: Props) => {
  return (
    <header className="main-header">
      <h1>Wybierz odpowiedni produkt</h1>
      <BuilderNavigation
        navItems={navItems}
        isDisabled={!selectedProduct ? true : false}
        handleSetActiveNavItem={handleSetActiveNavItem}
        setShowAlert={setShowAlert}
      />
    </header>
  );
};
