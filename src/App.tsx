import "./App.css"
 


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RotinaPage from "./pages/rotina/page";
import TemplatePage from "./pages/template/page";
import LoginPage from "./pages/login/page";
import ModalBlank from "./pages/blank_modal/modal"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/rotina" element={<RotinaPage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/login" element={<LoginPage /> }/>
        <Route path="/blank_modal" element={<ModalBlank width="428" height="504" layoutButton={2} modalTitle="teste de titulo"   />} />
      </Routes>
    </Router>
    
  );
}

export default App;
