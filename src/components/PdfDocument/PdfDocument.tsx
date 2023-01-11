import { SelectedProduct } from "../../types/Product";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { convertToCurrency } from "../../utils/convertToCurrency";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
      fontWeight: 300,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
      fontWeight: 500,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 300,
  },
  title: {
    marginTop: "22pt",
    marginBottom: "20pt",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    textAlign: "right",
  },
  rowHead: {
    flexDirection: "row",
    textAlign: "right",
    fontWeight: 500,
    borderBottom: "1pt solid #444",
  },
  num: {
    padding: "5pt",
    width: "7%",
    backgroundColor: "#eee",
  },
  name: {
    padding: "5pt",
    width: "50%",
    backgroundColor: "#ddd",
    textAlign: "left",
  },
  price: {
    padding: "5pt",
    width: "18%",
    backgroundColor: "#eee",
  },
  count: {
    padding: "5pt",
    width: "7%",
    backgroundColor: "#ddd",
  },
  value: {
    padding: "5pt",
    width: "18%",
    backgroundColor: "#eee",
  },
  sum: {
    padding: "5pt",
    width: "82%",
    fontWeight: 500,
  },
  sumValue: {
    padding: "5pt",
    width: "18%",
    backgroundColor: "#ddd",
    fontWeight: 500,
  },
});

interface Product {
  name: string;
  price: number;
}

interface Props {
  selectedProduct: SelectedProduct | undefined;
}

export const PdfDocument = ({ selectedProduct }: Props) => {
  if (!selectedProduct) return null;
  const { fullName, colors, price, accessories } = selectedProduct;
  const selectedColor = colors.find(({ isSelected }) => isSelected === true);

  const products: Product[] = [
    {
      name: `${fullName} (${selectedColor?.name})`,
      price: price + (selectedColor?.price ? selectedColor.price : 0),
    },

    ...accessories
      .filter(({ isSelected }) => isSelected === true)
      .map(({ name, price }) => {
        return { name, price };
      }),
  ];

  const sumPrice = products.reduce((sum, { price }) => sum + price, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Zamówione produkty - potwierdzenie:</Text>
        <View style={styles.rowHead}>
          <Text style={styles.num}>Lp</Text>
          <Text style={styles.name}>Nazwa Produktu</Text>
          <Text style={styles.price}>Cena</Text>
          <Text style={styles.count}>Szt.</Text>
          <Text style={styles.value}>Wartość</Text>
        </View>
        {products.map(({ name, price }, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.num}>{index + 1}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{convertToCurrency(price)}</Text>
            <Text style={styles.count}>1</Text>
            <Text style={styles.value}>{convertToCurrency(price)}</Text>
          </View>
        ))}
        <View style={styles.row}>
          <Text style={styles.sum}>Razem</Text>
          <Text style={styles.sumValue}>{convertToCurrency(sumPrice)}</Text>
        </View>
      </Page>
    </Document>
  );
};
