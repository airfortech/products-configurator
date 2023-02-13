import { Product } from "../../types/Product";
import { useEffect, useState } from "react";
import { BuilderFiltersInput } from "./BuilderFiltersInput/BuilderFiltersInput";
import dimensionsImage from "../../assets/img/dimensions.jpg";
import arrowImg from "../../assets/img/icon-arrow-down.svg";
import { FiltersState } from "../../types/FiltersState";
import { products } from "../../data/products";
import { isSizeMatched } from "../../utils/isSizeMatched";

const defaultFiltersState: FiltersState = {
  ASize: 0,
  CSize: 0,
  ESize: 0,
  FSize: 0,
  LSize: 0,
  WSize: 0,
};

interface Props {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const BuilderFilters = ({ setProducts }: Props) => {
  // stan uzywany do stwierdzenia czy filtry maja byc wyswietlone czy nie
  const [isVisible, setIsVisible] = useState(true);
  // stan uzywany do przechowywania aktualnych wartosci inputow filtrowania
  const [filtersState, setFiltersState] = useState(defaultFiltersState);

  // funkcja zmieniajaca stan wyswietlania filtrow true/false
  const handleShowFilters = () => {
    setIsVisible(prevState => !prevState);
  };

  // useEffect nasluchuje czy zmienil sie stan filtersState, jesli tak to wykonywana jest zawartosc
  useEffect(() => {
    const { ASize, CSize, ESize, FSize, LSize, WSize } = filtersState;
    setProducts(
      // filtrowanie produktow
      products.filter(product => {
        const {
          minASize,
          maxASize,
          minCSize,
          maxCSize,
          minESize,
          maxESize,
          minFSize,
          maxFSize,
          minLSize,
          maxLSize,
          minWSize,
          maxWSize,
        } = product;

        return (
          isSizeMatched(minASize, maxASize, ASize) &&
          isSizeMatched(minCSize, maxCSize, CSize) &&
          isSizeMatched(minESize, maxESize, ESize) &&
          isSizeMatched(minFSize, maxFSize, FSize) &&
          isSizeMatched(minLSize, maxLSize, LSize) &&
          isSizeMatched(minWSize, maxWSize, WSize)
        );
      })
    );
  }, [filtersState]);

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
              setFiltersState={setFiltersState}
            />
            <BuilderFiltersInput
              name="ESize"
              placeholder="Wymiar E"
              unit="cm"
              value={0}
              setFiltersState={setFiltersState}
            />
            <BuilderFiltersInput
              name="ASize"
              placeholder="Wymiar A"
              unit="cm"
              value={0}
              setFiltersState={setFiltersState}
            />
            <BuilderFiltersInput
              name="CSize"
              placeholder="Wymiar C"
              unit="cm"
              value={0}
              setFiltersState={setFiltersState}
            />
            <BuilderFiltersInput
              name="FSize"
              placeholder="Wymiar F"
              unit="cm"
              value={0}
              setFiltersState={setFiltersState}
            />
            <BuilderFiltersInput
              name="LSize"
              placeholder="Wymiar L"
              unit="cm"
              value={0}
              setFiltersState={setFiltersState}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
