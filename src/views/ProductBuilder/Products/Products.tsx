import { Product } from "../../../types/Product";
import { BuilderFilters } from "../../../components/BuilderFilters/BuilderFilters";
import { accessories as definedAccessories } from "../../../data/accessories";
import { Accessory } from "../../../types/Accessory";
import { BuilderSectionsProps } from "../../../types/BuilderSectionsProps";

interface Props extends Omit<BuilderSectionsProps, "navItems"> {}

export const Products = ({
  products,
  setProducts,
  selectedProduct,
  setSelectedProduct,
}: Props) => {
  // funkcja ustawiajaca aktualnie wybrany produkt
  const handleSetSelectedProduct = (id: number) => {
    // sprawdza czy przekazany id nalezy do wybranego aktualnie produktu
    const isProductSelected = id === selectedProduct?.id;
    // wyszukuje wybrany produkt w tablicy produktow products i prezypisuje go do product
    const product = products.find(product => id === product.id) as Product;
    setSelectedProduct(
      // jesli produkt jest aktualnie wybrany, klikniecie powoduje odznaczenie go, czyli zwraca undefined
      isProductSelected
        ? undefined
        : {
            // kopiuje obiekt w nienaruszonym stanie
            ...product,
            // wrzuca do wlanie skopiowanego obiektu key accessories i przypisuje mu tablice obiektow accessory, jesli definedAccessories nalezy do id danego produktu
            accessories: product.accessories.map(
              accessory =>
                definedAccessories.find(
                  ({ id }) => accessory === id
                ) as Accessory
            ),
          }
    );
  };

  return (
    <section className="cd-step-content">
      <header>
        <h1>Wybierz produkt</h1>
      </header>
      <BuilderFilters setProducts={setProducts} />{" "}
      {/* jesli tablica produktow jest pusta, renderuje napis brak produktow... */}
      {products.length <= 0 && (
        <p className="no-results">
          Brak produktów spełniających powyższe kryteria.
        </p>
      )}
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
