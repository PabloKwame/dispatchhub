import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Customers from "./pages/Customers/customers";
import Logins from "./pages/Login/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import AuthProvider from "./context/AuthProvider";
import Orders from "./pages/Orders/order";
import Products from "./pages/Products/products";
import OrderProvider from "./context/OrderProvider";
import ProductProvider from "./context/ProductProvider";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <AuthProvider>
        <OrderProvider>
          <ProductProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/customers" element={<Customers />} />
                </Route>
                <Route index path="login" element={<Logins />} />
              </Routes>
            </BrowserRouter>
          </ProductProvider>
        </OrderProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
