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

// tablica obiektow elementow nawigacji
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
  // stan przechowujacy elementu nawigacji wraz z aktualnie wybranym, stan w react mozna modyfikowac uzywajac w tym przypadku setNavItems(), navItems jest zmienna, ktora mozna odczytac by wykorzystac w komponencie
  const [navItems, setNavItems] = useState<NavItem[]>(defaultNavItems);
  // analogicznie jak wyzej dla przefiltrowanych produktow
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  // jak wyzej, dla aktualnie wybranego produktu
  const [selectedProduct, setSelectedProduct] = useState<
    SelectedProduct | undefined
  >(undefined);
  // jak wyzej, dla aktualnego alertu, domyslnie undefined, czyli nie ma zadnego wyrenderowanego alertu
  const [showAlert, setShowAlert] = useState<string | undefined>(undefined);

  // funkcja zmieniajaca stan aktualnie wybranego elementu nawigacji
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
        // przekazanie propsow do komponentow
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
