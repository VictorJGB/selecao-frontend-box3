import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/main-layout";
import ChamadosPage from "../pages/chamados";
import AtendimentosPage from "../pages/atendimentos";
import LoginPage from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/chamados",
        element: <ChamadosPage />,
      },
      {
        path: "/atendimentos",
        element: <AtendimentosPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
