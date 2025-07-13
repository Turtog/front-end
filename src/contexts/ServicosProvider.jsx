import { createContext, useState, useContext, useEffect } from "react";
import axiosClient from "../utils/axios-client";
import servicesData from "../data/services.json";

export const ServicoContext = createContext({
  data: null,
  services: [],
  loading: false,
  error: null,
  loadServicos: () => {},
  setData: () => {},
  editServico: () => {},
  deleteServico: () => {},
  createServico: () => {},
  getFeaturedServices: () => [],
  getServiceById: () => null,
  searchServices: () => [],
});

export const ServicoProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para gerar rating fictício
  const generateRandomRating = () => {
    return (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
  };

  // Função para gerar disponibilidade fictícia
  const generateRandomAvailability = () => {
    const options = [
      "Disponível hoje",
      "Disponível amanhã",
      "Disponível esta semana",
      "Disponível em 2-3 dias",
      "Disponível na próxima semana",
    ];
    return options[Math.floor(Math.random() * options.length)];
  };

  // Função para mapear imagem baseada no título do serviço
  const getServiceImage = (titulo) => {
    if (!titulo) return "/src/components/images/logo.png";

    const tituloLower = titulo.toLowerCase();
    const imageMap = {
      encanador: "encanador.jpg",
      encanadora: "encanadora.jpg",
      faxina: "faxineira.jpg",
      faxineira: "faxineira.jpg",
      limpeza: "faxineira.jpg",
      diarista: "diarista.jpg",
      eletricista: "eletricista.jpg",
      elétrica: "eletricista.jpg",
      jardim: "jardineiro.jpg",
      jardineiro: "jardineiro.jpg",
      marceneiro: "marceneiro.jpg",
      marcenaria: "marceneiro.jpg",
      pedreiro: "pedreiro.jpg",
      construção: "pedreiro.jpg",
      pintor: "pintor.jpg",
      pintura: "pintor.jpg",
    };

    // Procura por palavras-chave no título
    for (const [key, image] of Object.entries(imageMap)) {
      if (tituloLower.includes(key)) {
        return `/src/components/images/${image}`;
      }
    }

    // Se não encontrar, usa uma imagem padrão
    return "/src/components/images/servicos.jpg";
  };

  // Função para processar dados do backend e adicionar campos fictícios
  const processServiceData = (services) => {
    return services.map((service, index) => ({
      ...service,
      rating: parseFloat(generateRandomRating()),
      availability: generateRandomAvailability(),
      featured: index < 6, // Primeiros 6 serviços são featured
      image: getServiceImage(service.titulo),
      name: service.titulo,
      description: service.descricao,
      price: `R$ ${service.preco}`,
    }));
  };

  // Função para carregar serviços do backend
  const loadServicos = async (id = null) => {
    const url = id ? `/servicos/${id}` : `/servicos`;
    try {
      setLoading(true);
      setError(null);

      console.log(
        "Fazendo requisição para:",
        `${import.meta.env.VITE_API_URL}${url}`
      );

      const response = await axiosClient.get(url);
      const _data = response.data?.data;
      console.log("Dados recebidos do backend:", { _data });

      if (!_data) {
        throw new Error("Erro ao carregar serviços");
      }

      if (Array.isArray(_data)) {
        const processedServices = processServiceData(_data.reverse());
        console.log("Serviços processados:", processedServices);
        setServices(processedServices);
        setData(processedServices);
      } else {
        const processedService = processServiceData([_data])[0];
        setData(processedService);
      }
    } catch (error) {
      console.error("Erro ao carregar serviços:", error);
      setError(`Erro ao carregar serviços: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Função para criar novo serviço
  const createServico = async (serviceData) => {
    try {
      setLoading(true);
      const response = await axiosClient.post("/servicos", serviceData);

      if (response.data?.success) {
        await loadServicos();
        return response.data.data;
      }

      return null;
    } catch (error) {
      console.error("Erro ao criar serviço:", error);
      setError("Erro ao criar serviço");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Função para editar serviço
  const editServico = async (id, serviceData) => {
    try {
      setLoading(true);
      const response = await axiosClient.put(`/servicos/${id}`, serviceData);

      if (response.data?.success) {
        // Recarrega os dados após edição
        await loadServicos();
        return true;
      }

      return false;
    } catch (error) {
      console.error("Erro ao editar serviço:", error);
      setError("Erro ao editar serviço");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Função para deletar serviço
  const deleteServico = async (id) => {
    try {
      setLoading(true);
      const response = await axiosClient.delete(`/servicos/${id}`);

      if (response.data?.success) {
        // Recarrega os dados após deleção
        await loadServicos();
        return true;
      }

      return false;
    } catch (error) {
      console.error("Erro ao deletar serviço:", error);
      setError("Erro ao deletar serviço");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Carregar dados iniciais
  useEffect(() => {
    loadServicos();
  }, []);

  // Função para obter serviços em destaque
  const getFeaturedServices = () => {
    return services.filter((service) => service.featured);
  };

  // Função para obter serviço por ID
  const getServiceById = (id) => {
    return services.find((service) => service.id === parseInt(id));
  };

  // Função para buscar serviços
  const searchServices = (query) => {
    if (!query.trim()) return services;

    const searchTerm = query.toLowerCase().trim();
    return services.filter(
      (service) =>
        service.name?.toLowerCase().includes(searchTerm) ||
        service.description?.toLowerCase().includes(searchTerm) ||
        service.titulo?.toLowerCase().includes(searchTerm) ||
        service.descricao?.toLowerCase().includes(searchTerm)
    );
  };

  return (
    <ServicoContext.Provider
      value={{
        data,
        services,
        loading,
        error,
        loadServicos,
        setData,
        editServico,
        deleteServico,
        createServico,
        getFeaturedServices,
        getServiceById,
        searchServices,
      }}
    >
      {children}
    </ServicoContext.Provider>
  );
};

// Hook personalizado para usar o contexto de serviços
export const useServicos = () => {
  const context = useContext(ServicoContext);

  if (!context) {
    throw new Error("useServicos deve ser usado dentro de um ServicoProvider");
  }

  return context;
};

// Hook para gerenciar o carrossel
export const useCarousel = (items) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play do carossel
  useEffect(() => {
    if (items.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  const getItemClass = (index) => {
    if (index === currentSlide) return "item active";
    if (index === (currentSlide - 1 + items.length) % items.length)
      return "item prev";
    if (index === (currentSlide + 1) % items.length) return "item next";
    return "item";
  };

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    getItemClass,
  };
};

export default ServicoProvider;
