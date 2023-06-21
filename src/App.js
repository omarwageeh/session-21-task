import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Details from "./pages/Details.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:q" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
