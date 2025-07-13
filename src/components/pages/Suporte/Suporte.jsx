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
} from "./Suporte.styled";

const Suporte = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(e.target);
      const data = {
        nome: formData.get("nome"),
        email: formData.get("email"),
        mensagem: formData.get("mensagem"),
      };

      console.log("Dados de suporte:", data);

      const response = await axiosClient.post("/suporte", data);
      console.log("Mensagem enviada:", response.data);

      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      e.target.reset(); // Limpa o formulário
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      const errorMessage =
        error.response?.data?.message || "Erro ao enviar mensagem";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <h1>Suporte</h1>
      <FormSection>
        <h2>Entre em Contato Conosco</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nome">Nome</Label>
            <Input type="text" id="nome" name="nome" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea id="mensagem" name="mensagem" rows={4} required />
          </FormGroup>

          <Button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </Form>
      </FormSection>
    </MainContainer>
  );
};

export default Suporte;
