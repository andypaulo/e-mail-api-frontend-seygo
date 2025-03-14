import "./App.css"
 


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RotinaPage from "./pages/rotina/page";
import TemplatePage from "./pages/template/page";
import ModalBlank from "./pages/blank_modal/modal"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/rotina" element={<RotinaPage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/blank_modal" element={<ModalBlank />}>
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
