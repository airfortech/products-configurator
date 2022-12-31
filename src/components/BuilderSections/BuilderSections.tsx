import { BuilderSectionsProps } from "../../types/BuilderSectionsProps";
import { checkNavStateIndex } from "../../utils/checkNavStateIndex";

export const BuilderSections = (props: BuilderSectionsProps) => {
  const { navItems } = props;
  const navStateIndex = checkNavStateIndex(navItems);

  return (
    <div className="cd-builder-steps">
      <ul>
        {navItems.map(({ component, title, isActive, back }, index) =>
          component ? (
            <li
              data-selection="models"
              className={`builder-step ${isActive ? "active" : ""} ${
                index < navStateIndex ? "move-left" : ""
              } ${back ? "back" : ""}`}
              key={title}
            >
              {component(props)}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};
