import { BuilderSectionsProps } from "../../../types/BuilderSectionsProps";

interface Props extends Omit<BuilderSectionsProps, "navItems"> {}

export const Models = ({
  products,
  selectedProduct,
  setSelectedProduct,
}: Props) => {
  const handleSetSelectedProduct = (id: number) => {
    const isProductSelected = id === selectedProduct?.id;
    setSelectedProduct(
      isProductSelected
        ? undefined
        : products.find(product => id === product.id)
    );
  };

  return (
    <section className="cd-step-content">
      <header>
        <h1>Wybierz produkt</h1>
        <span className="steps-indicator">
          Step <b>1</b> of 4
        </span>
      </header>
      <ul className="models-list options-list cd-col-2">
        {products.map(({ id, shortName, slogan, price, colors }) => {
          const imageSrc = colors.find(
            ({ isSelected }) => isSelected === true
          )?.image;

          return (
            <li
              className={`js-option js-radio ${
                selectedProduct?.id === id ? "selected loaded" : ""
              }`}
              onClick={() => handleSetSelectedProduct(id)}
              key={id}
            >
              <span className="name">{shortName}</span>
              <img
                src={`/products-images/${imageSrc}`}
                alt={`zdjęcie wózka ${shortName}`}
              />
              <span className="price">
                {slogan}
                <br />
                Dostępny już od {price} zł
              </span>
              <div className="radio"></div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
