import { BuilderSectionsProps } from "../../../types/BuilderSectionsProps";

interface Props extends Omit<BuilderSectionsProps, "navItems" | "products"> {}

export const Accessories = ({ selectedProduct, setSelectedProduct }: Props) => {
  if (!selectedProduct) return null;
  const { accessories } = selectedProduct;

  const handleChangeAccesorySelection = (selectedId: number) =>
    setSelectedProduct({
      ...selectedProduct,
      accessories: accessories.map(accessory => {
        const { id, isSelected } = accessory;
        return {
          ...accessory,
          isSelected: selectedId === id ? !isSelected : isSelected,
        };
      }),
    });

  return (
    <section className="cd-step-content">
      <header>
        <h1>Wybrane przez Ciebie akcesoria</h1>
        <span className="steps-indicator">
          Step <b>3</b> of 4
        </span>
      </header>
      <ul className="accessories-list options-list">
        {selectedProduct?.accessories.map(({ id, isSelected, name, price }) => (
          <li
            className={`js-option ${isSelected ? "selected" : ""}`}
            data-price="149"
            key={id}
            onClick={() => handleChangeAccesorySelection(id)}
          >
            <p>{name}</p>
            <span className="price">{price} zł</span>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </section>
  );
};
