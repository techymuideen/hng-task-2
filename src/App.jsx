import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { DarkModeProvider } from "./context/DarkModeContext";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import store from "./store/index";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <DarkModeProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="store" element={<Store />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0",
                color: "var(--color-grey-700",
              },
            }}
          />
        </QueryClientProvider>
      </Provider>
    </DarkModeProvider>
  );
}

export default App;
