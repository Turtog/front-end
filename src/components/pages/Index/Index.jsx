import { useServicos, useCarousel } from "../../../contexts/ServicosProvider";
import {
  MainContainer,
  ServicesSection,
  CarouselContainer,
  Items,
  Item,
  ServiceInfo,
  CarouselControls,
  CarouselBtn,
  FeaturedServices,
  ServicesGrid,
  ServiceCard,
} from "./Index.styled";

const Index = () => {
  const { services, getFeaturedServices, loading, error } = useServicos();
  const featuredServices = getFeaturedServices();
  const { nextSlide, prevSlide, getItemClass } = useCarousel(featuredServices);

  if (loading) {
    return (
      <MainContainer>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          Carregando serviços...
        </div>
      </MainContainer>
    );
  }

  if (error) {
    return (
      <MainContainer>
        <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
          {error}
        </div>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      {featuredServices.length > 0 && (
        <ServicesSection>
          <h1>Serviços mais procurados</h1>

          <CarouselContainer>
            <Items>
              {featuredServices.map((service, index) => (
                <Item key={service.id} className={getItemClass(index)}>
                  <img
                    src={service.image}
                    alt={service.name || service.titulo}
                  />
                  <ServiceInfo>
                    <h3>{service.name || service.titulo}</h3>
                    <p>{service.description || service.descricao}</p>
                    <div className="price">
                      {service.price || `R$ ${service.preco}`}
                    </div>
                  </ServiceInfo>
                </Item>
              ))}
            </Items>
            <CarouselControls>
              <CarouselBtn onClick={prevSlide}>
                <i className="fas fa-chevron-left"></i>
              </CarouselBtn>
              <CarouselBtn onClick={nextSlide}>
                <i className="fas fa-chevron-right"></i>
              </CarouselBtn>
            </CarouselControls>
          </CarouselContainer>
        </ServicesSection>
      )}

      <FeaturedServices>
        <h2>Todos os Serviços Disponíveis</h2>
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <h3>{service.name || service.titulo}</h3>
              <p>{service.description || service.descricao}</p>
              <div className="service-details">
                <span className="price">
                  {service.price || `R$ ${service.preco}`}
                </span>
                <span className="rating">⭐ {service.rating || "4.5"}</span>
              </div>
              <div className="availability">
                {service.availability || "Consulte disponibilidade"}
              </div>
              <button className="service-btn">Solicitar Serviço</button>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </FeaturedServices>
    </MainContainer>
  );
};

export default Index;
