import { NavItem } from "../../types/NavItem";
import { Product, SelectedProduct } from "../../types/Product";
import { useState } from "react";
import { BuilderFooter } from "../../components/BuilderFooter/BuilderFooter";
import { BuilderHeader } from "../../components/BuilderHeader/BuilderHeader";
import { BuilderSections } from "../../components/BuilderSections/BuilderSections";
import { Accessories } from "./Accessories/Accessories";
import { Colors } from "./Colors/Colors";
import { Products } from "./Products/Products";
import { Summary } from "./Summary/Summary";
import { products } from "../../data/products";

const defaultNavItems: NavItem[] = [
  {
    title: "Produkt",
    href: "models",
    component: props => <Products {...props} />,
    isActive: true,
    back: false,
  },
  {
    title: "Kolorystyka",
    href: "colors",
    component: props => <Colors {...props} />,
    isActive: false,
    back: false,
  },
  {
    title: "Akcesoria",
    href: "accessories",
    component: props => <Accessories {...props} />,
    isActive: false,
    back: false,
  },
  {
    title: "Podsumowanie",
    href: "summary",
    component: props => <Summary {...props} />,
    isActive: false,
    back: false,
  },
];

export const ProductBuilder = () => {
  const [navItems, setNavItems] = useState<NavItem[]>(defaultNavItems);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProduct, setSelectedProduct] = useState<
    SelectedProduct | undefined
  >(undefined);
  const [showAlert, setShowAlert] = useState<string | undefined>(undefined);

  const handleSetActiveNavItem = (titleId: string) => {
    const prevActiveIndex = navItems.findIndex(
      ({ isActive }) => isActive === true
    );
    setNavItems(
      navItems.map((navItem, index) => {
        return {
          ...navItem,
          isActive: titleId === navItem.title ? true : false,
          back:
            titleId === navItem.title && prevActiveIndex > index ? true : false,
        };
      })
    );
  };

  return (
    <div className="cd-product-builder">
      <BuilderHeader
        navItems={navItems}
        selectedProduct={selectedProduct}
        handleSetActiveNavItem={handleSetActiveNavItem}
        setShowAlert={setShowAlert}
      />
      <BuilderSections
        navItems={navItems}
        products={filteredProducts}
        setProducts={setFilteredProducts}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <BuilderFooter
        navItems={navItems}
        selectedProduct={selectedProduct}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        handleSetActiveNavItem={handleSetActiveNavItem}
      />
    </div>
  );
};
