import "./App.css";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "./context/searchContext";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <Outlet />;
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
