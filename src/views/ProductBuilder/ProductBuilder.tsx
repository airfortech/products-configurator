import { useState } from "react";
import { ProductsNavigation } from "../../components/ProductsNavigation/ProductsNavigation";

const defaultNavItems = [
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
  const [navItems, setNavItems] = useState(defaultNavItems);

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
        <ProductsNavigation
          navItems={navItems}
          handleSetActiveNavItem={handleSetActiveNavItem}
        />
      </header>
    </div>
  );
};
