import { Product, ProductSize, ProductSizeUnit } from "../../../types/Product";
import { useState } from "react";
import { products } from "../../../data/products";
import { FiltersState } from "../../../types/FiltersState";

interface Props {
  name: ProductSizeUnit;
  value: number;
  placeholder: string;
  unit: string;
  setFiltersState: React.Dispatch<React.SetStateAction<FiltersState>>;
}

// obsluga i stylowanie pojedynczego inputa
export const BuilderFiltersInput = ({
  name,
  value,
  placeholder,
  unit,
  setFiltersState,
}: Props) => {
  const [val, setVal] = useState(value);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    if (isNaN(value)) return;
    setVal(value);
    setFiltersState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="input">
      <input
        className={val > 0 ? "filled" : ""}
        type="text"
        name={name}
        value={val === 0 ? "" : val}
        // nasluchiwanie na kazda zmiene znaku w danym inpucie
        onChange={handleChange}
        placeholder={placeholder}
        pattern=""
        autoComplete="off"
      />
      <p>{unit}</p>
    </div>
  );
};
