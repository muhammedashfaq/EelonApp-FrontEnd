import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Helper/Redux/store.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "./Context/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
        <ThemeProvider>
     
          <App />
   
        </ThemeProvider>
    </AuthProvider>
  </Provider>
);
