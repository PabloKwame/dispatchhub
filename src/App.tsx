import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Customers from "./pages/Customers/customers";
import Logins from "./pages/Login/Login";
import Product from "./components/products/products";
import ProtectedRoute from "./pages/ProtectedRoute";
import AuthProvider from "./context/AuthProvider";
import List from "./components/table/Table";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/users" element={<List />} />
              <Route path="/product" element={<Product />} />
              <Route path="/customers" element={<Customers />} />
            </Route>
            <Route index path="login" element={<Logins />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
