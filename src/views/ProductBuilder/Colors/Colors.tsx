import { BuilderSectionsProps } from "../../../types/BuilderSectionsProps";

interface Props
  extends Omit<BuilderSectionsProps, "navItems" | "products" | "setProducts"> {}

export const Colors = ({ selectedProduct, setSelectedProduct }: Props) => {
  // jesli zaden produkt nie jest wybrany, nic nie renderuje
  if (!selectedProduct) return null;

  const { colors, shortName } = selectedProduct;
  // pobranie aktualnej nazwy obrazka na podstawie wybranego koloru
  const imageSrc = colors.find(({ isSelected }) => isSelected === true)?.image;

  // zmienia wartosc isSelected w selectedProduct.colors[id]
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
      </header>
      <div className="cd-product-previews">
        <img
          src={`/products-images/${imageSrc}`}
          alt={`zdjęcie wózka ${shortName}`}
          className="product-preview"
        />
      </div>
      <ul className="cd-product-customizer">
        {/* mapowanie do wersji wizuazlnej listy kolorow */}
        {colors.map(({ id, name, hexColor, isSelected, price }) => {
          const option = `${name} - ${
            price === 0 ? "w standardzie" : price + " zł"
          }`;
          return (
            <li
              // przypisanie klasy css "selected" jesli kolor zostal wybrany, czyli isSelected ma wartosc true
              className={isSelected ? "selected" : ""}
              key={id}
              data-content={option}
              // przypisanie zdarzenia na klikniecie <li>
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
