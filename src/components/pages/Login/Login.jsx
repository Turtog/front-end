import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <main>
      <section className="form-section">
        <article>
          <h2>LOGIN</h2>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required />

            <button type="submit">Entrar</button>
          </form>
          <p>
            Não tem uma conta?{" "}
            <Link to="/register" className="register-link">
              Registre-se aqui
            </Link>
          </p>
        </article>
      </section>
    </main>
  );
};

export default Login;
