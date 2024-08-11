import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import store from "./store/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { DarkModeProvider } from "./context/DarkModeContext";
import Store from "./pages/Store";

function App() {
  const queryClient = new QueryClient();

  return (
    <DarkModeProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="store" element={<Store />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </DarkModeProvider>
  );
}

export default App;
