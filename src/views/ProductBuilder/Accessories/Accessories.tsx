import { BuilderSectionsProps } from "../../../types/BuilderSectionsProps";

export const Accessories = (props: BuilderSectionsProps) => {
  return (
    <section className="cd-step-content">
      <header>
        <h1>Wybierz akcesoria</h1>
        <span className="steps-indicator">
          Step <b>1</b> of 4
        </span>
      </header>
    </section>
  );
};
