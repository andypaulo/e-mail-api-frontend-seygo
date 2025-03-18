// routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import RotinaPage from "../pages/rotina/page";
import TemplatePage from "../pages/template/page";
import LoginPage from "../pages/login/page";
import ConnectionPage from "../pages/connection/page";
import Layout from "../components/layout/layout";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<Layout />}>
        <Route path="/rotina" element={<RotinaPage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/connection" element={<ConnectionPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

