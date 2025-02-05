import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import GlobalStyle from "./style/style.js";
import Detail from "./pages/Detail.jsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/store.js";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
          </Provider>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
