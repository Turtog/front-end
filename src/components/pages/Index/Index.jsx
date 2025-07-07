import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Index.css";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    {
      id: 1,
      name: "Encanador",
      image: "/src/components/images/encanador.jpg"
    },
    {
      id: 2,
      name: "Faxineira",
      image: "/src/components/images/faxineira.jpg"
    },
    {
      id: 3,
      name: "Jardineiro",
      image: "/src/components/images/jardineiro.jpg"
    },
    {
      id: 4,
      name: "Pedreiro",
      image: "/src/components/images/pedreiro.jpg"
    },
    {
      id: 5,
      name: "Pintor",
      image: "/src/components/images/pintor.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play do carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  const getItemClass = (index) => {
    if (index === currentSlide) return "item active";
    if (index === (currentSlide - 1 + services.length) % services.length) return "item prev";
    if (index === (currentSlide + 1) % services.length) return "item next";
    return "item";
  };

  return (
    <main className="index">
      <section className="main-options">
        <article className="service-option">
          <h2>Cliente</h2>
          <p>Precisa de um serviço? Faça seu pedido agora mesmo.</p>
          <Link to="/cliente" className="btn">
            Pedir Serviço
          </Link>
        </article>
      </section>

      <section className="services-section">
        <h1>Serviços mais procurados</h1>
        
        <div className="carousel-container">
          <div className="items">
            {services.map((service, index) => (
              <div key={service.id} className={getItemClass(index)}>
                <img src={service.image} alt={service.name} />
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="carousel-btn" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="carousel-indicators">
            {services.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <div className="service-labels">
            <div className="service-label">
              {services[currentSlide].name}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
