// pages/routes/PrivateRoute.jsx
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const PrivateRoute = ({ allowedRoutes }) => {
    const { user, loading } = useContext(UserContext);

    if (loading) return <div>Loading...</div>;

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoutes.includes(user.role)) {
        return <Navigate to="/" />; // or a 403 page if you have one
    }

    return <Outlet />;
};

export default PrivateRoute;
