import { useState, useEffect } from "react";
import axiosClient from "../../../utils/axios-client";
import ModalEditServico from "./ModalEditServico";
import ModalRemoveServico from "./ModalRemoveServico";
import {
  MainContainer,
  FormSection,
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  Button,
  ServicesSection,
  ServicesGrid,
  ServiceCard,
  ActionButtons,
  EditButton,
  DeleteButton,
} from "./Cliente.styled";

const Cliente = () => {
  const [loading, setLoading] = useState(false);
  const [Servicos, setServicos] = useState([]);
  const [loadingServicos, setLoadingServicos] = useState(false);

  // Estados dos modais
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalRemove, setShowModalRemove] = useState(false);
  const [servicoAtual, setServicoAtual] = useState({});

  // Função para carregar todos os serviços
  const loadServicos = async () => {
    try {
      setLoadingServicos(true);

      const response = await axiosClient.get("/servicos");
      const servicos = response.data?.data || [];
      console.log("Serviços carregados:", servicos);
      setServicos(servicos);
    } catch (error) {
      console.error("Erro ao carregar serviços:", error);
      setServicos([]);
    } finally {
      setLoadingServicos(false);
    }
  };

  // Função para abrir modal de edição
  const openModalEdit = (id) => {
    const findedServico = Servicos.find((servico) => servico.id == id);
    if (!findedServico) return;
    setServicoAtual({ ...findedServico });
    setShowModalEdit(true);
  };

  // Função para abrir modal de remoção
  const openModalRemove = (id) => {
    const findedServico = Servicos.find((servico) => servico.id == id);
    if (!findedServico) return;
    setServicoAtual(findedServico);
    setShowModalRemove(true);
  };

  // Função para atualizar lista após operações
  const handleModalSuccess = () => {
    loadServicos();
  };

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
      e.target.reset();
      loadServicos();
    } catch (error) {
      console.error("Erro ao cadastrar serviço:", error);
      const errorMessage =
        error.response?.data?.message || "Erro ao cadastrar serviço";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Carregar serviços ao montar o componente
  useEffect(() => {
    loadServicos();
  }, []);

  return (
    <MainContainer>
      <h1>Painel Administrativo</h1>

      <FormSection>
        <h2>Cadastre um novo serviço</h2>
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

      <ServicesSection>
        <h2>Todos os Serviços</h2>
        {loadingServicos ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            Carregando serviços...
          </div>
        ) : (
          <ServicesGrid>
            {Servicos.length > 0 ? (
              Servicos.map((servico) => (
                <ServiceCard key={servico.id}>
                  <h3>{servico.titulo}</h3>
                  <p>{servico.descricao}</p>
                  <div className="price">R$ {servico.preco}</div>
                  <ActionButtons>
                    <EditButton onClick={() => openModalEdit(servico.id)}>
                      ✏️ Editar
                    </EditButton>
                    <DeleteButton onClick={() => openModalRemove(servico.id)}>
                      🗑️ Excluir
                    </DeleteButton>
                  </ActionButtons>
                </ServiceCard>
              ))
            ) : (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "2rem",
                  color: "#666",
                }}
              >
                Nenhum serviço cadastrado ainda.
              </div>
            )}
          </ServicesGrid>
        )}
      </ServicesSection>

      {showModalEdit && (
        <ModalEditServico
          servico={servicoAtual}
          close={() => setShowModalEdit(false)}
          onSuccess={handleModalSuccess}
        />
      )}
      {showModalRemove && (
        <ModalRemoveServico
          servico={servicoAtual}
          close={() => setShowModalRemove(false)}
          onSuccess={handleModalSuccess}
        />
      )}
    </MainContainer>
  );
};

export default Cliente;
