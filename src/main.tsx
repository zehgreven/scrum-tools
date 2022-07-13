import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import PointingPoker from "./pointing-poker/PointingPoker";
import Retrospective from "./retrospective/Retrospective";
// import your route components too

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/retrospective" element={<Retrospective />}></Route>
      <Route path="/pointing-poker" element={<PointingPoker />}></Route>
    </Routes>
  </BrowserRouter>
);