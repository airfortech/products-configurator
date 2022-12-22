interface Props {
  navItems: {
    title: string;
    href: string;
    isActive: boolean;
  }[];
  handleSetActiveNavItem: (titleId: string) => void;
}

export const ProductsNavigation = ({
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
