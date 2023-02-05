import { BuilderSectionsProps } from "../../../types/BuilderSectionsProps";

// interfejs, ktory bierze typy propsow z BuilderSectionsProps i wywala "navItems" | "products" | "setProducts"
interface Props
  extends Omit<BuilderSectionsProps, "navItems" | "products" | "setProducts"> {}

export const Accessories = ({ selectedProduct, setSelectedProduct }: Props) => {
  // jesli zaden produkt nie jest wybrany, nic nie renderuje
  if (!selectedProduct) return null;
  const { accessories } = selectedProduct;

  // zmienia wartosc isSelected w selectedProduct.accessories[selectedId]
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
      </header>
      <ul className="accessories-list options-list">
        {/* mapowanie listy akcesoriow z obiektu selectedProduct do komponentu wizualnego <li> */}
        {selectedProduct?.accessories.map(({ id, isSelected, name, price }) => (
          <li
            className={`js-option ${isSelected ? "selected" : ""}`}
            data-price="149"
            // key potrzebny unikalny by nie sypalo bledem w react, stad unikalne id podawane w data/products i data/accessories
            key={id}
            // przypisanie zdarzenia na klikniecie <li>
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
