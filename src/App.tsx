// App.tsx
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/route";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RotinaPage from "./pages/rotina/page";
import TemplatePage from "./pages/template/page";
import LoginPage from "./pages/login/page";
import ModalBlank from "./components/shared/Modal"
import Sidebar from "./pages/blank_sidebar/Sidebar"
import ConnectionPage from "./pages/connection/page";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

