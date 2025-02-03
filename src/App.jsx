import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import GlobalStyle from "./style/style.js";
const App = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
