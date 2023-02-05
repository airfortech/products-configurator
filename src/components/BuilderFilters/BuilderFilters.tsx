import { Product } from "../../types/Product";
import { useState } from "react";
import { BuilderFiltersInput } from "./BuilderFiltersInput/BuilderFiltersInput";
import dimensionsImage from "../../assets/img/dimensions.jpg";
import arrowImg from "../../assets/img/icon-arrow-down.svg";

interface Props {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const BuilderFilters = ({ setProducts }: Props) => {
  // stan uzywany do stwierdzenia czy filtry maja byc wyswietlone czy nie
  const [isVisible, setIsVisible] = useState(true);

  // funkcja zmieniajaca stan wyswietlania filtrow true/false
  const handleShowFilters = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className={"cd-builder-filters"}>
      <div className="header">
        <h2>Dobierz produkt dla Siebie</h2>
        {/* przypisanie zdarzenia do kliknecia buttona, ktory ukrywa lub pokazuje filtry */}
        <button className="toggle" onClick={handleShowFilters}>
          <img
            className={isVisible ? "" : "up"}
            src={arrowImg}
            alt="pokaż / ukryj"
          />
        </button>
      </div>
      <div style={{ display: isVisible ? "block" : "none" }}>
        <p>
          TATALU™ – od teraz spacery z Twoim dzieckiem są jeszcze bardziej
          komfortowe! Nowa odsłona wózka spacerowego, którego lekka i wytrzymała
          konstrukcja doskonale sprawdzi się w każdych warunkach, a forma
          parasolki pozwala na szybkie złożenie i przechowywanie go.
        </p>
        <div className="form-container">
          <img src={dimensionsImage} alt="wymiary" />
          <form action="">
            <legend>podaj wymiary:</legend>
            <BuilderFiltersInput
              name="WSize"
              placeholder="Wymiar W"
              unit="cm"
              value={0}
              setProducts={setProducts}
            />
            <BuilderFiltersInput
              name="ESize"
              placeholder="Wymiar E"
              unit="cm"
              value={0}
              setProducts={setProducts}
            />
            <BuilderFiltersInput
              name="ASize"
              placeholder="Wymiar A"
              unit="cm"
              value={0}
              setProducts={setProducts}
            />
            <BuilderFiltersInput
              name="CSize"
              placeholder="Wymiar C"
              unit="cm"
              value={0}
              setProducts={setProducts}
            />
            <BuilderFiltersInput
              name="FSize"
              placeholder="Wymiar F"
              unit="cm"
              value={0}
              setProducts={setProducts}
            />
            <BuilderFiltersInput
              name="LSize"
              placeholder="Wymiar L"
              unit="cm"
              value={0}
              setProducts={setProducts}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
