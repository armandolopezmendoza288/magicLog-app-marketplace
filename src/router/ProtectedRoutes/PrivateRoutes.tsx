import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes: ({
  status,
}: {
  status: string;
}) => React.JSX.Element = ({ status }) => {
  return status !== "not-authenticated" ? <Outlet /> : <Navigate to="/login" />;
};
