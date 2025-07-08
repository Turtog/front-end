import { Link } from "react-router-dom";
import { useServices, useCarousel } from "../../../hooks/useServices";
import {
  MainContainer,
  MainOptions,
  ServiceOption,
  StyledLink,
  ServicesSection,
  CarouselContainer,
  Items,
  Item,
  ServiceInfo,
  CarouselControls,
  CarouselBtn,
  ServiceLabels,
  ServiceLabel,
  FeaturedServices,
  ServicesGrid,
  ServiceCard,
} from "./Index.styled";

const Index = () => {
  const { services: allServices, getFeaturedServices } = useServices();
  const featuredServices = getFeaturedServices();
  const { currentSlide, nextSlide, prevSlide, getItemClass } =
    useCarousel(featuredServices);

  return (
    <MainContainer>
      <MainOptions>
        <ServiceOption>
          <h2>Cliente</h2>
          <p>Precisa de um serviço? Faça seu pedido agora mesmo.</p>
          <StyledLink as={Link} to="/cliente">
            Pedir Serviço
          </StyledLink>
        </ServiceOption>
      </MainOptions>

      <ServicesSection>
        <h1>Serviços mais procurados</h1>

        <ServiceLabels>
          <ServiceLabel>{featuredServices[currentSlide].name}</ServiceLabel>
        </ServiceLabels>
        <CarouselContainer>
          <Items>
            {featuredServices.map((service, index) => (
              <Item key={service.id} className={getItemClass(index)}>
                <img src={service.image} alt={service.name} />
                <ServiceInfo>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="price">{service.price}</div>
                  <div className="rating">
                    ⭐ {service.rating} ({Math.floor(Math.random() * 50 + 10)}{" "}
                    avaliações)
                  </div>
                  <div className="availability">{service.availability}</div>
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

      <FeaturedServices>
        <h2>Todos os Serviços Disponíveis</h2>
        <ServicesGrid>
          {allServices.map((service) => (
            <ServiceCard key={service.id}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-details">
                <span className="price">{service.price}</span>
                <span className="rating">⭐ {service.rating}</span>
              </div>
              <div className="availability">{service.availability}</div>
              <button className="service-btn">Solicitar Serviço</button>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </FeaturedServices>
    </MainContainer>
  );
};

export default Index;
