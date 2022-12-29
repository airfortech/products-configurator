import { NavItem } from "../../types/NavItem";
import { checkNavStateIndex } from "../../utils/checkNavStateIndex";

interface Props {
  navItems: NavItem[];
}

export const BuilderSections = ({ navItems }: Props) => {
  const navStateIndex = checkNavStateIndex(navItems);

  return (
    <div className="cd-builder-steps">
      <ul>
        {navItems.map(({ component, title, isActive, back }, index) => (
          <li
            data-selection="models"
            className={`builder-step ${isActive ? "active" : ""} ${
              index < navStateIndex ? "move-left" : ""
            } ${back ? "back" : ""}`}
            key={title}
          >
            {component}
          </li>
        ))}
      </ul>
    </div>
  );
};
