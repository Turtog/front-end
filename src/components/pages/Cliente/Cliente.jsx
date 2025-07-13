import { useState } from "react";
import axiosClient from "../../../utils/axios-client";
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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(e.target);
      const data = {
        titulo: formData.get("titulo"),
        descricao: formData.get("descricao"),
        preco: formData.get("preco"),
      };

      console.log("Dados do serviço:", data);

      const response = await axiosClient.post("/servicos", data);
      console.log("Serviço criado:", response.data);

      alert("Serviço cadastrado com sucesso!");
      e.target.reset(); // Limpa o formulário
    } catch (error) {
      console.error("Erro ao cadastrar serviço:", error);
      const errorMessage =
        error.response?.data?.message || "Erro ao cadastrar serviço";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <h1>Oferecer Serviço</h1>
      <FormSection>
        <h2>Cadastre seu serviço</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="titulo">Título do Serviço</Label>
            <Input
              type="text"
              id="titulo"
              name="titulo"
              placeholder="Ex: Corte de cabelo, Limpeza residencial..."
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea
              id="descricao"
              name="descricao"
              rows="4"
              placeholder="Descreva detalhadamente o serviço oferecido..."
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="preco">Preço (R$)</Label>
            <Input
              type="number"
              id="preco"
              name="preco"
              step="0.01"
              placeholder="0.00"
              required
            />
          </FormGroup>

          <Button type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar Serviço"}
          </Button>
        </Form>
      </FormSection>
    </MainContainer>
  );
};

export default Cliente;
