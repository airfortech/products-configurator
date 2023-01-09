import { Accessory } from "./Accessory";
import { Color } from "./Color";

export type ProductSizeUnit =
  | "WSize"
  | "ASize"
  | "CSize"
  | "ESize"
  | "FSize"
  | "LSize";
export type ProductSizeType = "min" | "max";
export type ProductSize = `${ProductSizeType}${ProductSizeUnit}`;

type T = {
  [key in ProductSize]: number;
};

export interface Product extends T {
  id: number;
  shortName: string;
  fullName: string;
  slogan: string;
  description: string;
  price: number;
  colors: Color[];
  accessories: number[];
}

export interface SelectedProduct extends Omit<Product, "accessories"> {
  accessories: Accessory[];
}
