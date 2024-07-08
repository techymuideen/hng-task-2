import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
