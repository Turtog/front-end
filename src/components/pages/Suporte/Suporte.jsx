import "./Suporte.css";

const Suporte = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      mensagem: formData.get("mensagem"),
    };
    console.log("Dados de suporte:", data);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <main>
      <h1>Suporte</h1>
      <section className="form-section">
        <h2>Entre em Contato Conosco</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows={4} required />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
};

export default Suporte;
