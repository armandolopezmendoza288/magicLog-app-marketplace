import { Navigate, Route, Routes } from "react-router-dom";
import { FC } from "react";
import {
  ADMIN,
  SELLER
} from "../utils/userTypes";
import { CommonRoutes } from "./ProtectedRoutes/CommonRoutes";
import { useCheckAuth } from "../common/hooks/useCheckAuth";
import { PrivateRoutes } from "./ProtectedRoutes/PrivateRoutes";
import LoginPage from "../common/pages/LoginPage";
import { BuyProductsPage } from "../common/pages/BuyProductsPage";
import { SignupPage } from "../common/pages/SignupPage";

export const AppRouter: FC = () => {
  const { userTypeId, status } = useCheckAuth();

  return (
    <Routes>
      {/* All public routes */}
      <Route element={<CommonRoutes status={status} userTypeId={userTypeId} />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/buy-products" element={<BuyProductsPage />} />
      </Route>

      {/* All private routes */}
      <Route element={<PrivateRoutes status={status} />}>
        
      </Route>

      <Route path="/*" element={<Navigate to="/buy-products" />} />
    </Routes>
  );
};
