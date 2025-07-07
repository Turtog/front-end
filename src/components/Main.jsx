import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <h1>Pedir Serviço</h1>
      <section className="form-section">
        <h2>Preencha o formulário abaixo</h2>
        <form
          id="pedido-form"
          method="post"
          action="../../include/logica_pedido.php"
        >
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input type="text" id="titulo" name="titulo" required />
          </div>
          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="data">Data</label>
            <input type="date" id="data" name="data" required />
          </div>
          <div className="form-group">
            <label htmlFor="endereco">Endereço</label>
            <input type="text" id="endereco" name="endereco" required />
          </div>
          <div className="form-group">
            <label htmlFor="preco">Preço</label>
            <input type="number" id="preco" name="preco" step="0.01" required />
          </div>
          <button type="submit" name="cadastrar" value="cadastrar">
            Enviar Pedido
          </button>
          <p id="form-alert" className="alert"></p>
        </form>
      </section>
    </main>
  );
};

export default Main;
