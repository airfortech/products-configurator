import { NavItem } from "../../types/NavItem";

interface Props {
  navItems: NavItem[];
  handleSetActiveNavItem: (titleId: string) => void;
}

export const BuilderNavigation = ({
  navItems,
  handleSetActiveNavItem,
}: Props) => {
  return (
    <nav className="cd-builder-main-nav">
      <ul>
        {navItems.map(({ title, href, isActive }) => (
          <li
            className={isActive ? "active" : ""}
            key={title}
            onClick={() => handleSetActiveNavItem(title)}
          >
            <a href={`#${href}`}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
