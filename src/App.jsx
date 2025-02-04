import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import GlobalStyle from "./style/style.js";
import Detail from "./pages/Detail.jsx";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
};

export default App;
