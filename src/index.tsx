import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { App } from "./App";
import "./styles/reset.css";
import "./styles/index.css";
import "./styles/animations.css";
import "./styles/builderNavigation.css";
import "./styles/builderFooter.css";
import "./styles/builderSections.css";
import "./styles/builderProducts.css";
import "./styles/builderColors.css";
import "./styles/builderAccessories.css";
import "./styles/builderSummary.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
