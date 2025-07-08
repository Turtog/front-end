import {
  MainContainer,
  FormSection,
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  Button,
} from "./Cliente.styled";

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
    <MainContainer>
      <h1>Pedir Serviço</h1>
      <FormSection>
        <h2>Preencha o formulário abaixo</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="titulo">Título</Label>
            <Input type="text" id="titulo" name="titulo" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea id="descricao" name="descricao" rows="4" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="data">Data</Label>
            <Input type="date" id="data" name="data" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="endereco">Endereço</Label>
            <Input type="text" id="endereco" name="endereco" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="preco">Preço</Label>
            <Input type="number" id="preco" name="preco" step="0.01" required />
          </FormGroup>

          <Button type="submit">Enviar Pedido</Button>
        </Form>
      </FormSection>
    </MainContainer>
  );
};

export default Cliente;
