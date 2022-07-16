import ReactDOM from "react-dom/client";
import {
  BrowserRouter
} from "react-router-dom";
import "./main.css";
import { AppRoutes } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);