import { NavItem } from "../../types/NavItem";

interface Props {
  navItems: NavItem[];
  isDisabled: boolean;
  handleSetActiveNavItem: (titleId: string) => void;
  setShowAlert: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const BuilderNavigation = ({
  navItems,
  isDisabled,
  handleSetActiveNavItem,
  setShowAlert,
}: Props) => {
  return (
    <nav className={`cd-builder-main-nav${isDisabled ? " disabled" : ""}`}>
      <ul>
        {navItems.map(({ title, href, isActive }) => (
          <li
            className={isActive ? "active" : ""}
            key={title}
            onClick={() =>
              isDisabled
                ? setShowAlert("Aby kontynuować, wybierz produkt")
                : handleSetActiveNavItem(title)
            }
          >
            <a href={`#${href}`}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
