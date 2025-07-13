import { useState } from "react";
import axiosClient from "../../../utils/axios-client";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  Button,
  CancelButton,
  WarningIcon,
  ServiceInfo,
} from "./ModalRemoveServico.styled";

const ModalRemoveServico = ({ servico, close, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleRemove = async () => {
    try {
      setLoading(true);

      const response = await axiosClient.delete(`/servicos/${servico.id}`);

      console.log("Serviço removido:", response.data);
      alert("Serviço removido com sucesso!");

      if (onSuccess) {
        onSuccess();
      }

      close();
    } catch (error) {
      console.error("Erro ao remover serviço:", error);
      const errorMessage =
        error.response?.data?.message || "Erro ao remover serviço";
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
          <h2>Remover Serviço</h2>
          <CloseButton onClick={close}>&times;</CloseButton>
        </ModalHeader>

        <ModalBody>
          <WarningIcon>⚠️</WarningIcon>
          <p>Tem certeza que deseja remover este serviço?</p>
          <p>
            <strong>Esta ação não pode ser desfeita.</strong>
          </p>

          <ServiceInfo>
            <h3>{servico.titulo}</h3>
            <p>{servico.descricao}</p>
            <span className="price">R$ {servico.preco}</span>
          </ServiceInfo>
        </ModalBody>

        <ModalFooter>
          <CancelButton onClick={close}>Cancelar</CancelButton>
          <Button onClick={handleRemove} disabled={loading}>
            {loading ? "Removendo..." : "Sim, Remover"}
          </Button>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalRemoveServico;
