import { BuilderSectionsProps } from "../../../types/BuilderSectionsProps";
import { Color } from "../../../types/Color";

interface Props
  extends Omit<
    BuilderSectionsProps,
    "navItems" | "products" | "setProducts" | "setSelectedProduct"
  > {}

export const Summary = ({ selectedProduct }: Props) => {
  if (!selectedProduct) return null;

  const { shortName, fullName, description, colors, accessories } =
    selectedProduct;
  const imageSrc = colors.find(({ isSelected }) => isSelected === true)?.image;
  const selectedColor = colors.find(
    ({ isSelected }) => isSelected === true
  ) as Color;

  return (
    <section className="cd-step-content">
      <header>
        <h1>Podsumowanie</h1>
        <span className="steps-indicator">
          Step <b>4</b> of 4
        </span>
      </header>
      <ul className="summary-list">
        <li>
          <h2>Skonfigurowany przez Ciebie produkt:</h2>

          <img
            src={`/products-images/${imageSrc}`}
            alt={`zdjęcie wózka ${shortName}`}
            className="product-preview"
          />

          <h3>{fullName}</h3>

          <p>{description}</p>
        </li>

        <li data-summary="colors">
          <h2>Wybrany kolor</h2>

          <span className="summary-color">
            <em
              className="color-swatch"
              style={{ backgroundColor: selectedColor.hexColor }}
            ></em>
            <em className="color-label">{selectedColor.name}</em>
          </span>
        </li>

        <li data-summary="accessories">
          <h2>Akcesoria, na które się zdecydowałeś/aś</h2>

          <ul className="summary-accessories">
            {accessories.map(({ id, isSelected, name }) =>
              isSelected ? (
                <li key={id}>
                  <p>{name}</p>
                </li>
              ) : null
            )}
            {accessories.filter(({ isSelected }) => isSelected === true)
              .length === 0 && (
              <li>
                <p>Nie wybrano żadnych akcesoriów</p>
              </li>
            )}
          </ul>
        </li>
      </ul>
    </section>
  );
};
