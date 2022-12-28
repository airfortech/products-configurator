import { NavItem } from "../../types/NavItem";

interface Props {
  navItems: NavItem[];
  handleSetActiveNavItem: (titleId: string) => void;
}

const checkNavStateIndex = (navItems: NavItem[]): number =>
  navItems.findIndex(({ isActive }) => isActive === true);

export const BuilderFooter = ({ navItems, handleSetActiveNavItem }: Props) => {
  const extendedNavItems = [
    ...navItems,
    { title: "Kup teraz", href: "buynow", isActive: false },
  ];
  const navStateIndex = checkNavStateIndex(extendedNavItems);

  return (
    <footer
      className={`cd-builder-footer ${navStateIndex === 0 ? " step-1" : ""}`}
    >
      <div className="selected-product">
        <img src="../assets/img/tat01.jpg" alt="Product preview" />

        <div className="tot-price">
          <span>Podsumowanie</span>
          <span className="total">
            <b>0</b> zł
          </span>
        </div>
      </div>

      <nav className="cd-builder-secondary-nav">
        <ul>
          <li className="next nav-item">
            <ul>
              {extendedNavItems.map(({ title, isActive }, index) => (
                <li
                  className={`${index <= navStateIndex ? "visited " : ""}${
                    index <= navStateIndex + 1 ? "visible" : ""
                  }`}
                  onClick={() =>
                    navStateIndex === extendedNavItems.length - 2
                      ? {}
                      : handleSetActiveNavItem(title)
                  }
                  key={title}
                >
                  <a href="#0">{extendedNavItems[index].title}</a>
                </li>
              ))}
            </ul>
          </li>
          <li className="prev nav-item">
            <ul>
              {extendedNavItems.map(({ title, isActive }, index) => (
                <li
                  className={`${index <= navStateIndex - 2 ? "visited " : ""}${
                    index <= navStateIndex - 1 ? "visible" : ""
                  }`}
                  onClick={() => handleSetActiveNavItem(title)}
                  key={title}
                >
                  <a href="#0">{extendedNavItems[index].title}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      <span className="alert">Aby kontynuować, wybierz produkt</span>
    </footer>
  );
};
