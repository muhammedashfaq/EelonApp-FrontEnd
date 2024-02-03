import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import { UserProvider } from "./Context/userContext";
function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
