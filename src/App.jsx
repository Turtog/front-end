import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./components/pages/Index/Index";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Cliente from "./components/pages/Cliente/Cliente";
import Suporte from "./components/pages/Suporte/Suporte";
import Perfil from "./components/pages/Perfil.jsx/Perfil";
import NotFound from "./components/pages/NotFound/NotFound";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
