import { BuilderSectionsProps } from "../../../types/BuilderSectionsProps";

interface Props extends Omit<BuilderSectionsProps, "navItems" | "products"> {}

export const Colors = ({ selectedProduct, setSelectedProduct }: Props) => {
  if (!selectedProduct) return null;

  const { colors, shortName } = selectedProduct;
  const imageSrc = colors.find(({ isSelected }) => isSelected === true)?.image;

  const handleChangeProductColor = (id: number) =>
    setSelectedProduct({
      ...selectedProduct,
      colors: colors.map(color => {
        return { ...color, isSelected: id === color.id ? true : false };
      }),
    });

  return (
    <section className="cd-step-content">
      <header>
        <h1>Wybierz kolor</h1>
        <span className="steps-indicator">
          Step <b>2</b> of 4
        </span>
      </header>
      <div className="cd-product-previews">
        <img
          src={`/products-images/${imageSrc}`}
          alt={`zdjęcie wózka ${shortName}`}
          className="product-preview"
        />
      </div>
      <ul className="cd-product-customizer">
        {colors.map(({ id, name, hexColor, isSelected, price }) => {
          const option = `${name} - ${
            price === 0 ? "w standardzie" : price + " zł"
          }`;
          return (
            <li
              className={isSelected ? "selected" : ""}
              key={id}
              data-content={option}
              onClick={() => handleChangeProductColor(id)}
            >
              <button style={{ backgroundColor: hexColor }}>{option}</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
