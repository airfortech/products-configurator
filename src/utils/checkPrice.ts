import { SelectedProduct } from "../types/Product";

export const checkPrice = (selectedProduct: SelectedProduct): number => {
  const { price, colors, accessories } = selectedProduct;

  const colorPrice = colors.find(({ isSelected }) => isSelected === true)
    ?.price as number;
  const accessoriesPrice = accessories
    .filter(({ isSelected }) => isSelected === true)
    .reduce((sum, { price }) => sum + price, 0);

  return price + colorPrice + accessoriesPrice;
};
