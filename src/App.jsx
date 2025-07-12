import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Index from "./components/pages/Index/Index";
import Login from "./components/pages/Login/Login";
import Cadastro from "./components/pages/Cadastro/Cadastro";
import Cliente from "./components/pages/Cliente/Cliente";
import Suporte from "./components/pages/Suporte/Suporte";
import Perfil from "./components/pages/Perfil.jsx/Perfil";
import NotFound from "./components/pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
