import { BuilderSectionsProps } from "../../../types/BuilderSectionsProps";

export const Colors = (props: BuilderSectionsProps) => {
  return (
    <section className="cd-step-content">
      <header>
        <h1>Wybierz kolor</h1>
        <span className="steps-indicator">
          Step <b>1</b> of 4
        </span>
      </header>
    </section>
  );
};
