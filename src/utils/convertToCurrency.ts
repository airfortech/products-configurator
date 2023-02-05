// funkcja formatujaca liczbe do stringa bedacego cena, np. "200,99 zł"
export const convertToCurrency = (price: number): string => {
  // Intl - ECMAScript Internationalization API
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(price);
};
