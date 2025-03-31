import redirectionables from "../../utils/redirectionables";
import { Navigate, Outlet } from "react-router-dom";

export const CommonRoutes: ({
  status,
  userTypeId,
}: {
  status: string;
  userTypeId: string;
}) => React.JSX.Element = ({ status, userTypeId }) => {
  return status !== "authenticated" ? (
    <Outlet />
  ) : (
    <Navigate to={redirectionables[userTypeId]} />
  );
};
