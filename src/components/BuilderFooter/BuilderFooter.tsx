import { NavItem } from "../../types/NavItem";
import { SelectedProduct } from "../../types/Product";
import { pdf } from "@react-pdf/renderer";
import { PdfDocument } from "../PdfDocument/PdfDocument";
import { checkNavStateIndex } from "../../utils/checkNavStateIndex";
import { checkPrice } from "../../utils/checkPrice";
import { convertToCurrency } from "../../utils/convertToCurrency";

interface Props {
  navItems: NavItem[];
  selectedProduct: SelectedProduct | undefined;
  showAlert: string | undefined;
  setShowAlert: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleSetActiveNavItem: (titleId: string) => void;
}

export const BuilderFooter = ({
  navItems,
  selectedProduct,
  showAlert,
  setShowAlert,
  handleSetActiveNavItem,
}: Props) => {
  const extendedNavItems: NavItem[] = [
    ...navItems,
    {
      title: "Zamów",
      href: "buynow",
      isActive: false,
      back: false,
    },
  ];
  const navStateIndex = checkNavStateIndex(extendedNavItems);
  const imageSrc = selectedProduct?.colors.find(
    ({ isSelected }) => isSelected === true
  )?.image;

  const handleBuyNow = async () => {
    // generowanie pdfa wykorzystujac biblioteke reactowa "@react-pdf/renderer"
    const blob = await pdf(
      <PdfDocument selectedProduct={selectedProduct} />
    ).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <footer
      className={`cd-builder-footer ${navStateIndex === 0 ? "step-1" : ""} ${
        imageSrc === undefined ? "disabled" : ""
      } ${showAlert ? "show-alert" : ""}`}
    >
      <div className="selected-product">
        <img
          src={`/products-images/${imageSrc ? imageSrc : "tat01.jpg"}`}
          alt="Product preview"
        />
        <div className="tot-price">
          <span>Podsumowanie</span>
          <span className="total">
            <b>
              {selectedProduct
                ? // formatuje cene na podstawie prygotowanego utilsa
                  convertToCurrency(checkPrice(selectedProduct))
                : "0 zł"}
            </b>
          </span>
        </div>
      </div>
      <nav className="cd-builder-secondary-nav">
        <ul>
          <li className="next nav-item">
            <ul>
              {extendedNavItems.map(({ title, href }, index) => (
                <li
                  className={`${index <= navStateIndex ? "visited " : ""}${
                    index <= navStateIndex + 1 ? "visible" : ""
                  }`}
                  onClick={() =>
                    navStateIndex === extendedNavItems.length - 2
                      ? handleBuyNow()
                      : imageSrc
                      ? handleSetActiveNavItem(title)
                      : setShowAlert("Aby kontynuować, wybierz produkt")
                  }
                  key={title}
                >
                  <a href={`#${href}`}>{extendedNavItems[index].title}</a>
                </li>
              ))}
            </ul>
          </li>
          <li className="prev nav-item">
            <ul>
              {extendedNavItems.map(({ title, href }, index) => (
                <li
                  className={`${index <= navStateIndex - 2 ? "visited " : ""}${
                    index <= navStateIndex - 1 ? "visible" : ""
                  }`}
                  onClick={() =>
                    imageSrc
                      ? handleSetActiveNavItem(title)
                      : setShowAlert("Aby kontynuować, wybierz produkt")
                  }
                  key={title}
                >
                  <a href={`#${href}`}>{extendedNavItems[index].title}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
      <span className="alert">{showAlert}</span>
    </footer>
  );
};
