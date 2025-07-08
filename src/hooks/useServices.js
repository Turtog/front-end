import { useState, useEffect } from "react";
import servicesData from "../data/services.json";

// Hook para gerenciar dados de serviços
export const useServices = () => {
  const [services] = useState(servicesData.services);
  const [categories] = useState(servicesData.categories);

  // Função para obter serviços em destaque
  const getFeaturedServices = () => {
    return services.filter((service) => service.featured);
  };

  return {
    services,
    categories,
    getFeaturedServices,
  };
};

// Hook para gerenciar o carossel
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
