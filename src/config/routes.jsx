import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Index from "../components/pages/Index/Index";
import Login from "../components/pages/Login/Login";
import Cadastro from "../components/pages/Cadastro/Cadastro";
import Cliente from "../components/pages/Cliente/Cliente";
import Suporte from "../components/pages/Suporte/Suporte";
import Perfil from "../components/pages/Perfil.jsx/Perfil";
import NotFound from "../components/pages/NotFound/NotFound";
import Guest from "../layouts/Guest";
import Default from "../layouts/Default";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Guest />}>
        <Route index element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/" element={<Default />}>
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          }
        />
        <Route
          path="/cliente"
          element={
            <PrivateRoute>
              <Cliente />
            </PrivateRoute>
          }
        />
        <Route
          path="/suporte"
          element={
            <PrivateRoute>
              <Suporte />
            </PrivateRoute>
          }
        />
      </Route>
    </>
  )
);

export default router;
