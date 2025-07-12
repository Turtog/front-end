import { createContext, useState, useContext, useEffect } from "react";
import servicesData from "../data/services.json";

export const ServicoContext = createContext({
  services: [],
  categories: [],
  loading: false,
  error: null,
  getFeaturedServices: () => [],
  getServiceById: () => null,
  getServicesByCategory: () => [],
  searchServices: () => [],
});

export const ServicoProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simula carregamento dos dados mockados
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // Simula delay de API
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setServices(servicesData.services);
        setCategories(servicesData.categories);
        setError(null);
      } catch (err) {
        setError("Erro ao carregar serviços");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Função para obter serviços em destaque
  const getFeaturedServices = () => {
    return services.filter((service) => service.featured);
  };

  // Função para obter serviço por ID
  const getServiceById = (id) => {
    return services.find((service) => service.id === parseInt(id));
  };

  // Função para obter serviços por categoria
  const getServicesByCategory = (categoryName) => {
    return services.filter((service) => service.category === categoryName);
  };

  // Função para buscar serviços
  const searchServices = (query) => {
    if (!query.trim()) return services;

    const searchTerm = query.toLowerCase().trim();
    return services.filter(
      (service) =>
        service.name.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.category.toLowerCase().includes(searchTerm)
    );
  };

  return (
    <ServicoContext.Provider
      value={{
        services,
        categories,
        loading,
        error,
        getFeaturedServices,
        getServiceById,
        getServicesByCategory,
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
