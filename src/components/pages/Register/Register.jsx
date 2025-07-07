import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <main>
      <section className="form-section">
        <article>
          <h2>Registrar</h2>
          <form>
            <label htmlFor="newName">Nome:</label>
            <input type="text" id="newName" name="nome" required />

            <label htmlFor="newCpf">CPF:</label>
            <input type="text" id="newCpf" name="cpf" required />

            <label htmlFor="newEmail">Email:</label>
            <input type="email" id="newEmail" name="email" required />

            <label htmlFor="newPassword">Senha:</label>
            <input type="password" id="newPassword" name="senha" required />

            <label htmlFor="newImage">Imagem:</label>
            <input type="file" id="newImage" name="imagem" accept="image/*" />

            <br />
            <button type="submit">Registrar</button>
          </form>
          <p>
            Já tem uma conta? <Link to="/login">Faça login</Link>
          </p>
        </article>
      </section>
    </main>
  );
};

export default Register;
