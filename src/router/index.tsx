import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import MainLayout from "../layouts/main-layout";
import AtendimentosPage from "../pages/atendimentos";
import ChamadosPage from "../pages/chamados";
import InfoChamadoPage from "../pages/chamados/info-chamado";
import NovoChamadoPage from "../pages/chamados/novo-chamado";
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
        path: "/chamados/novo",
        element: <NovoChamadoPage />,
      },
      {
        path: "/chamados/:id",
        element: <InfoChamadoPage />,
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
