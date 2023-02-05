import { SelectedProduct } from "../types/Product";

// funkcja przeliczajaca cene wybranego produktu korzystajac z jego obiektu
export const checkPrice = (selectedProduct: SelectedProduct): number => {
  // destrukturyzacja obiektu selectedProduct, by nie trzeba bylo sie za kazdym razem odwolywac przez selectedProduct.price, itp.
  const { price, colors, accessories } = selectedProduct;

  // oblicza cene koloru na podstawie wybranego koloru
  const colorPrice = colors.find(({ isSelected }) => isSelected === true)
    ?.price as number;
  // oblicza cene akcesoriow na podstawie listy wybranych
  const accessoriesPrice = accessories
    .filter(({ isSelected }) => isSelected === true)
    .reduce((sum, { price }) => sum + price, 0);

  // zwraca calosc ceny sumujac wszystko powyzsze
  return price + colorPrice + accessoriesPrice;
};
