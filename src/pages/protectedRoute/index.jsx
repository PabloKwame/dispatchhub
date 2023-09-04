import { Navigate, useLocation, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const location = useLocation();

	if ("") {
		return <Navigate replace to="/login" state={{ from: location }} />;
	}
	return <Outlet />;
};

export default ProtectedRoute;
