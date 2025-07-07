import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="not-found">
      <h1>404</h1>
      <h2>Página Não Encontrada</h2>
      <p>A página que você está procurando não existe.</p>
      <Link to="/" className="btn">
        Voltar para Home
      </Link>
    </main>
  );
};

export default NotFound;
