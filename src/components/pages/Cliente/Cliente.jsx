import "./Cliente.css";

const Cliente = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      titulo: formData.get("titulo"),
      descricao: formData.get("descricao"),
      data: formData.get("data"),
      endereco: formData.get("endereco"),
      preco: formData.get("preco"),
    };
    console.log("Dados do pedido:", data);
    alert("Pedido enviado com sucesso!");
  };

  return (
    <main className="cliente">
      <h1>Pedir Serviço</h1>
      <section className="form-section">
        <h2>Preencha o formulário abaixo</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input type="text" id="titulo" name="titulo" required />
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea id="descricao" name="descricao" rows="4" required />
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

          <button type="submit">Enviar Pedido</button>
        </form>
      </section>
    </main>
  );
};

export default Cliente;
