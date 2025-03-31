import { useEffect } from "react";
import { useCheckAuth } from "./common/hooks/useCheckAuth";
import { AppRouter } from "./router/AppRouter";
import { LoadingComponent } from "./common/components/LoadingComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { applicationLoading, checkUserAuthentication } = useCheckAuth();

  useEffect(() => {
    checkUserAuthentication();
  }, []);

  return applicationLoading ? (
    <div style={{ width: "100%", height: "100vh" }}>
      <LoadingComponent />
    </div>
  ) : (
    <AppRouter />
  );
}

export default App;
