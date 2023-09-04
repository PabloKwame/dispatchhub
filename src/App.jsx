import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./lib/formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Customers from "./pages/customers/customers";
import Logins from "./pages/login/Login";
import Product from "./components/products/products";
import ProtectedRoute from "./pages/protectedRoute";

function App() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<BrowserRouter>
				<Routes>
					<Route element={<ProtectedRoute />}>
						<Route path="home" element={<Home />} />
						<Route path="users">
							<Route index element={<List />} />
							<Route path=":branchName" element={<Single />} />
							<Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
						</Route>
					</Route>
					<Route index path="login" element={<Logins />} />
					{/* <Route>
						<Route path="home" element={<Logins />} />
						<Route path="home" element={<Home />} />
						<Route path="users">
							<Route index element={<List />} />
							<Route path=":branchName" element={<Single />} />
							<Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
						</Route>
						<Route path="product">
							<Route index element={<Product />} />
						</Route>
						<Route path="customers">
							<Route index element={<Customers />} />
						</Route>
						<Route path="products">
							<Route index element={<List />} />
							<Route path=":productId" element={<Single />} />
							<Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
						</Route>
					</Route> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
