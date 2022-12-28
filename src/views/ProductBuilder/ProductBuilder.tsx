import { useState } from "react";
import { BuilderFooter } from "../../components/BuilderFooter/BuilderFooter";
import { BuilderNavigation } from "../../components/BuilderNavigation/BuilderNavigation";
import { NavItem } from "../../types/NavItem";

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
        <BuilderNavigation
          navItems={navItems}
          handleSetActiveNavItem={handleSetActiveNavItem}
        />
      </header>
      <BuilderFooter
        navItems={navItems}
        handleSetActiveNavItem={handleSetActiveNavItem}
      />
    </div>
  );
};
