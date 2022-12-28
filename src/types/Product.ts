import { Accessory } from "./Accessory";
import { Color } from "./Color";

export interface Product {
  /* unikalne */
  id: number;
  shortName: string;
  fullName: string;
  slogan: string;
  description: string;
  price: number;
  minHeight: number;
  maxHeight: number;
  minASize: number;
  maxASize: number;
  minCSize: number;
  maxCSize: number;
  minESize: number;
  maxESize: number;
  minFSize: number;
  maxFSize: number;
  minLSize: number;
  maxLSize: number;
  image: string;
  imageThumb: string;
  colors: number[];
  accessories: number[];
}
