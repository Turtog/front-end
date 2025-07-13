import { useState, useEffect } from "react";
import axiosClient from "../../../utils/axios-client";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  Button,
  CancelButton,
} from "./ModalEditServico.styled";

const ModalEditServico = ({ servico, close, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    preco: "",
  });

  useEffect(() => {
    if (servico) {
      setFormData({
        titulo: servico.titulo || "",
        descricao: servico.descricao || "",
        preco: servico.preco || "",
      });
    }
  }, [servico]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axiosClient.put(
        `/servicos/${servico.id}`,
        formData
      );

      console.log("Serviço editado:", response.data);
      alert("Serviço editado com sucesso!");

      if (onSuccess) {
        onSuccess();
      }

      close();
    } catch (error) {
      console.error("Erro ao editar serviço:", error);
      const errorMessage =
        error.response?.data?.message || "Erro ao editar serviço";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalHeader>
          <h2>Editar Serviço</h2>
          <CloseButton onClick={close}>&times;</CloseButton>
        </ModalHeader>

        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="titulo">Título do Serviço</Label>
              <Input
                type="text"
                id="titulo"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
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
                value={formData.descricao}
                onChange={handleChange}
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
                value={formData.preco}
                onChange={handleChange}
                placeholder="0.00"
                required
              />
            </FormGroup>

            <ModalFooter>
              <CancelButton type="button" onClick={close}>
                Cancelar
              </CancelButton>
              <Button type="submit" disabled={loading}>
                {loading ? "Salvando..." : "Salvar Alterações"}
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalEditServico;
