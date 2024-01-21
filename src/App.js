import "./App.css";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "./context/searchContext";

function App() {
  return (
    <SearchProvider>
      <Outlet />;
    </SearchProvider>
  );
}

export default App;
