import ReactDOM from "react-dom/client";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import App from "./App";
import "./main.css";
import PointingPoker from "./pages/pointing-poker/PointingPoker";
import Retrospective from "./pages/retrospective/Retrospective";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <div className="sidebar">
      <App />
    </div>
    <div className="content">
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/retrospective" element={<Retrospective />}></Route>
        <Route path="/pointing-poker" element={<PointingPoker />}></Route>
      </Routes>
    </div>
  </BrowserRouter>
);