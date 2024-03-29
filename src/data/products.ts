import { Product } from "../types/Product";

export const products: Product[] = [
  {
    /* unique */
    id: 1,
    shortName: "Tatalu",
    fullName: "Wózek spacerowy Tatalu",
    slogan: "Idealny dla dzieci do 100 cm wzrostu.",
    description:
      "TATALU™ – od teraz spacery z Twoim dzieckiem są jeszcze bardziej komfortowe! Nowa odsłona wózka spacerowego, którego lekka i wytrzymała konstrukcja doskonale sprawdzi się w każdych warunkach, a forma parasolki pozwala na szybkie złożenie i przechowywanie go, zajmując niewiele miejsca. Szereg udoskonaleń wpływa na poprawę odczuć zarówno użytkownika, jak i opiekuna. Wózek można w pełni personalizować – to Ty decydujesz o akcesoriach. TATALU™ – to komfort i stabilizacja! Szereg udoskonaleń takich jak tapicerka SOFT osłaniająca boki konstrukcji, zapewniając tym samym ochronę użytkownika, regulowane pasy 5 – punktowe z dodatkową osłoną, zagłówek czy podnóżek z możliwością zmiany pozycji, sprawia, że mały użytkownik czuje się w nim komfortowo i bezpiecznie. Tapicerka SOFT spełnia wysokie wymagania stawiane przez opiekunów, co potwierdza m. in. przeprowadzony test papierosa, świadczący o niepalności tkaniny. Zwiększenie komfortu zapewnia niezależny, wzmocniony system amortyzacji oraz obrotowe koła przednie, które zapewniają zwrotność wózka TATALU™. Przekonaj się, że spacery z Twoją pociechą mogą być jeszcze przyjemniejsze!",
    price: 2499,
    minWSize: 100,
    maxWSize: 120,
    minASize: 0,
    maxASize: 34,
    minCSize: 0,
    maxCSize: 60,
    minESize: 0,
    maxESize: 24,
    minFSize: 13,
    maxFSize: 29,
    minLSize: 13,
    maxLSize: 35,
    colors: [
      {
        /* unique */
        id: 1,
        name: "Szary",
        hexColor: "#bbb",
        image: "tat01.jpg",
        /* price 0 means "in standard" */
        price: 0,
        /* true if color is default, only one should be true */
        isSelected: true,
      },
      {
        id: 2,
        name: "Złoty",
        hexColor: "#e2d300",
        image: "tat02.jpg",
        price: 350,
        isSelected: false,
      },
    ],
    accessories: [1, 2],
  },
  {
    id: 2,
    shortName: "Mamalu",
    fullName: "Wózek spacerowy Mamalu",
    slogan: "Idealny dla dzieci do 130 cm wzrostu.",
    description:
      "Nowoczesny, praktyczny o wyjątkowym designie – MAMALU™ to wózek stworzony z myślą o naszych najmłodszych użytkownikach, który doskonale sprawdzi się w każdych warunkach. Konstrukcja opiera się na lekkim oraz wytrzymałym stelażu w formie parasolki, przez co możemy go błyskawicznie złożyć, a przy tym zajmuje on niewiele miejsca podczas transportu. MAMALU™ rośnie wraz z Twoją pociechą! Szeroki zakres personalizacji pozwala m.in. na zamontowanie pasów 5-punktowych i zagłówka na różnych wysokościach, a także na ustawienie podnóżka w 3 różnych pozycjach oraz regulację głębokości siedziska. Prowadzenie wózka to czysta przyjemność. Niezależny system amortyzacji i obrotowe koła przednie sprawiają, że MAMALU™ jest niezwykle zwrotny. Komfort i wygodę zapewnia dwustronna tapicerka COMFORT, która z jednej strony pokryta jest miękkim, przyjaznym dla skóry dziecka materiałem MINKY, zaś z drugiej wodoodporną tapicerką FLEX. Weź MAMALU™ na spacer i przekonaj się, że jest on stworzony dla Ciebie i Twojej pociechy",
    price: 3549,
    minWSize: 100,
    maxWSize: 140,
    minASize: 0,
    maxASize: 50,
    minCSize: 0,
    maxCSize: 60,
    minESize: 0,
    maxESize: 24,
    minFSize: 13,
    maxFSize: 29,
    minLSize: 13,
    maxLSize: 35,
    colors: [
      {
        id: 1,
        name: "Czerwony",
        hexColor: "#da0202",
        image: "mam01.jpg",
        price: 0,
        isSelected: true,
      },
      {
        id: 2,
        name: "Różowy",
        hexColor: "#b4005a",
        image: "mam02.jpg",
        price: 350,
        isSelected: false,
      },
      {
        id: 3,
        name: "Ciemnoniebieski",
        hexColor: "#000f97",
        image: "mam03.jpg",
        price: 350,
        isSelected: false,
      },
    ],
    accessories: [1, 2],
  },
];
