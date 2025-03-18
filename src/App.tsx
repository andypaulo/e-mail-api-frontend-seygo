import "./App.css"
 


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
      <Routes>
        <Route path="/rotina" element={<RotinaPage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/login" element={<LoginPage /> }/>
        <Route path="/blank_modal" element={<ModalBlank width="428" height="504" layoutButton={2} modalTitle="teste de titulo"   />} />
        <Route path="/blank_sidebar" element={<Sidebar />} />
        <Route path="/connection" element={<ConnectionPage/>}  />
      </Routes>
    </Router>
    
  );
}

export default App;
