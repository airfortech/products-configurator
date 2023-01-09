import { Product } from "../../types/Product";
import dimensionsImage from "../../assets/img/dimensions.jpg";
import { BuilderFiltersInput } from "./BuilderFiltersInput/BuilderFiltersInput";

interface Props {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const BuilderFilters = ({ setProducts }: Props) => {
  return (
    <div className={"cd-builder-filters"}>
      <h2>Dobierz produkt dla Siebie</h2>
      <p>
        TATALU™ – od teraz spacery z Twoim dzieckiem są jeszcze bardziej
        komfortowe! Nowa odsłona wózka spacerowego, którego lekka i wytrzymała
        konstrukcja doskonale sprawdzi się w każdych warunkach, a forma
        parasolki pozwala na szybkie złożenie i przechowywanie go.
      </p>
      <div>
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
          {/* <BuilderFiltersInput
            name="weight"
            placeholder="Waga"
            unit="kg"
            value={0}
            setProducts={setProducts}
          /> */}
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
  );
};
