import { useState } from "react";
import { BuilderFooter } from "../../components/BuilderFooter/BuilderFooter";
import { BuilderNavigation } from "../../components/BuilderNavigation/BuilderNavigation";
import { products } from "../../data/products";
import { NavItem } from "../../types/NavItem";
import { Product } from "../../types/Product";

const defaultNavItems: NavItem[] = [
  {
    title: "Produkt",
    href: "models",
    isActive: true,
  },
  {
    title: "Kolorystyka",
    href: "colors",
    isActive: false,
  },
  {
    title: "Akcesoria",
    href: "accessories",
    isActive: false,
  },
  {
    title: "Podsumowanie",
    href: "summary",
    isActive: false,
  },
];

export const ProductBuilder = () => {
  const [navItems, setNavItems] = useState<NavItem[]>(defaultNavItems);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProduct, setSelectedProduct] = useState<number | undefined>(2);
  const [showAlert, setShowAlert] = useState<string | undefined>(undefined);

  console.log(filteredProducts.find(item => item.id === 2));

  const handleSetActiveNavItem = (titleId: string) => {
    setNavItems(
      navItems.map(({ title, href }) => {
        return {
          title,
          href,
          isActive: titleId === title ? true : false,
        };
      })
    );
  };

  return (
    <div className="cd-product-builder">
      <header className="main-header">
        <h1>Wybierz odpowiedni produkt</h1>
        <BuilderNavigation
          navItems={navItems}
          isDisabled={!selectedProduct ? true : false}
          handleSetActiveNavItem={handleSetActiveNavItem}
          setShowAlert={setShowAlert}
        />
      </header>
      <BuilderFooter
        navItems={navItems}
        imageSrc={products.find(({ id }) => selectedProduct === id)?.image}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        handleSetActiveNavItem={handleSetActiveNavItem}
      />
    </div>
  );
};
