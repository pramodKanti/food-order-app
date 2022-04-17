import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import CartProvider from "./store/CartProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
