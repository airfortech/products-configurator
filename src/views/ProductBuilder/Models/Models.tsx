import { NavItem } from "../../../types/NavItem";

interface Props {
  navItems: NavItem[];
}

export const Models = ({ navItems }: Props) => {
  return (
    <section className="cd-step-content">
      <header>
        <h1>Wybierz produkt</h1>
        <span className="steps-indicator">
          Step <b>1</b> of 4
        </span>
      </header>
      <ul className="models-list options-list cd-col-2">
        <li
          className="js-option js-radio"
          data-price="2499"
          data-model="product-01"
        >
          <span className="name">Tatalu</span>
          <img src="img/tat01.jpg" alt="wzrost100" />
          <span className="price">
            Idealny dla dzieci do 100 cm wzrostu.
            <br />
            Dostępny już od 2499 zł
          </span>
          <div className="radio"></div>
        </li>
      </ul>
    </section>
  );
};
