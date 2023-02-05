import { Product, ProductSize, ProductSizeUnit } from "../../../types/Product";
import { useState } from "react";
import { products } from "../../../data/products";

interface Props {
  name: ProductSizeUnit;
  value: number;
  placeholder: string;
  unit: string;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

// obsluga i stylowanie pojedynczego inputa
export const BuilderFiltersInput = ({
  name,
  value,
  placeholder,
  unit,
  setProducts,
}: Props) => {
  const [val, setVal] = useState(value);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    if (isNaN(value)) return;
    setVal(value);
    setProducts(
      products.filter(product => {
        if (value <= 0) return true;
        return (
          product[("min" + name) as ProductSize] <= value &&
          product[("max" + name) as ProductSize] >= value
        );
      })
    );
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
