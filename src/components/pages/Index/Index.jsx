import { useServicos, useCarousel } from "../../../contexts/ServicosProvider";
import "animate.css";
import { useEffect } from "react";
import { animate, svg } from "animejs";

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
  Skeleton,
  SkeletonCard,
} from "./Index.styled";

const LupaMotion = () => {
  useEffect(() => {
    const path = document.querySelector("#motionPathLupa");
    if (!path) return;

    const motion = svg.createMotionPath(path);

    animate(".lupa-motion", {
      ...motion,
      duration: 2500,
      easing: "easeInOutSine",
      loop: true,
      direction: "alternate",
    });
  }, []);

  return (
    <div
      id="lupa-motion-wrapper"
      style={{
        position: "relative",
        width: "350px",
        height: "150px",
        margin: "2rem auto",
      }}
    >
      <svg
        width="350"
        height="150"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <path
          id="motionPathLupa"
          d="M 10 75 C 100 10, 250 10, 340 75"
          stroke="transparent"
          fill="none"
        />
      </svg>

      <img
        src="/src/components/images/lupa.svg"
        className="lupa-motion"
        style={{
          width: "70px",
          height: "70px",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

const ToolsMorph = () => {
  useEffect(() => {
    const martelo = document.querySelector("#morphMartelo");
    const chave = document.querySelector("#morphChave");
    const inglesa = document.querySelector("#morphInglesa");
    const target = document.querySelector("#morphTarget");
    if (!martelo || !chave || !inglesa || !target) return;

    const seq = animate(target, {
      keyframes: [
        { d: svg.morphTo(martelo), fill: "#222", duration: 700 },
        { d: svg.morphTo(chave), fill: "#444", duration: 700 },
        { d: svg.morphTo(inglesa), fill: "#666", duration: 700 },
      ],
      easing: "easeInOutQuad",
      loop: true,
      autoplay: true,
    });
    return () => seq.pause();
  }, []);

  return (
    <div style={{ width: "140px", margin: "1.5rem auto" }}>
      <svg style={{ display: "none" }} viewBox="0 0 16 16">
        <path
          id="morphMartelo"
          d="M 9.972 2.508 C 10.006 2.41 10.009 2.304 9.981 2.205 C 9.952 2.105 9.893 2.017 9.812 1.952 L 9.634 1.823 C 9.009 1.41 8.3 1.142 7.558 1.04 C 6.215 0.862 4.504 1.229 2.84 3.133 L 1.786 3.133 C 1.72 3.133 1.655 3.146 1.594 3.171 C 1.534 3.196 1.478 3.233 1.432 3.28 L 0.146 4.567 C 0.053 4.661 0 4.788 0 4.92 C 0 5.052 0.053 5.179 0.146 5.273 L 2.717 7.852 C 2.779 7.914 2.856 7.959 2.941 7.982 C 3.026 8.005 3.116 8.005 3.201 7.982 C 3.286 7.959 3.363 7.914 3.425 7.852 L 4.711 6.562 C 4.804 6.468 4.857 6.341 4.857 6.209 L 4.857 5.57 L 13.244 14.443 C 13.301 14.52 13.379 14.58 13.469 14.614 C 13.559 14.648 13.657 14.655 13.752 14.635 C 13.846 14.615 13.932 14.568 14 14.5 L 15.5 13 C 15.591 12.909 15.643 12.787 15.646 12.659 C 15.649 12.531 15.603 12.406 15.517 12.311 L 6.388 3.681 C 7.135 3.225 8.16 2.842 9.5 2.842 C 9.604 2.842 9.705 2.81 9.789 2.75 C 9.874 2.69 9.938 2.606 9.972 2.508"
        />
        <path
          id="morphChave"
          d="M 0.102 2.223 C -0.079 2.904 -0.015 3.628 0.284 4.267 C 0.583 4.906 1.097 5.419 1.736 5.717 C 2.375 6.015 3.099 6.079 3.78 5.897 L 10.121 12.149 C 9.945 12.748 9.959 13.387 10.163 13.977 C 10.367 14.567 10.75 15.08 11.258 15.442 C 11.767 15.805 12.376 16 13 16 C 13.692 15.999 14.363 15.759 14.898 15.32 C 15.433 14.881 15.8 14.271 15.937 13.593 C 16.073 12.914 15.971 12.209 15.648 11.598 C 15.324 10.986 14.799 10.505 14.162 10.236 C 13.524 9.967 12.813 9.927 12.149 10.122 L 5.897 3.781 C 6.08 3.1 6.017 2.375 5.719 1.735 C 5.421 1.096 4.907 0.581 4.268 0.282 C 3.629 -0.017 2.905 -0.081 2.223 0.1 L 4.364 2.242 L 4 4 L 2.243 4.364 Z M 13.472 11.242 L 14 11.268 L 14.287 11.713 L 14.732 12 L 14.758 12.529 L 15 13 L 14.758 13.471 L 14.732 14 L 14.287 14.287 L 14 14.732 L 13.471 14.758 L 13 15 L 12.529 14.758 L 12 14.732 L 11.713 14.287 L 11.268 14 L 11.242 13.471 L 11 13 L 11.242 12.529 L 11.268 12 L 11.713 11.713 L 12 11.268 L 12.529 11.242 L 13 11 Z"
        />
        <path
          id="morphInglesa"
          d="M 0 0.995 L 0.995 0 L 4.059 2.19 C 4.188 2.282 4.292 2.404 4.365 2.544 C 4.437 2.685 4.475 2.841 4.476 2.999 L 4.476 3.069 C 4.476 3.333 4.581 3.586 4.767 3.773 L 10.444 9.449 L 11.353 9.146 C 11.528 9.088 11.716 9.08 11.896 9.122 C 12.076 9.165 12.24 9.256 12.371 9.386 L 15.709 12.725 C 15.895 12.911 16 13.164 16 13.428 C 16 13.692 15.895 13.945 15.709 14.131 L 14.13 15.71 C 13.944 15.896 13.691 16.001 13.427 16.001 C 13.163 16.001 12.91 15.896 12.724 15.71 L 9.387 12.37 C 9.257 12.239 9.166 12.075 9.123 11.895 C 9.081 11.715 9.089 11.527 9.147 11.352 L 9.449 10.443 L 3.773 4.766 C 3.586 4.58 3.333 4.475 3.069 4.475 L 3 4.475 C 2.842 4.475 2.686 4.437 2.545 4.364 C 2.404 4.292 2.282 4.187 2.19 4.058 Z M 11.293 10.59 C 11.219 10.515 11.123 10.466 11.019 10.45 C 10.915 10.433 10.809 10.45 10.715 10.497 C 10.621 10.545 10.545 10.621 10.497 10.715 C 10.45 10.809 10.433 10.915 10.45 11.019 C 10.466 11.123 10.515 11.219 10.59 11.293 L 13.574 14.277 C 13.667 14.37 13.794 14.422 13.925 14.421 C 14.057 14.421 14.183 14.369 14.276 14.276 C 14.369 14.183 14.421 14.057 14.421 13.925 C 14.422 13.794 14.37 13.667 14.277 13.574 Z"
        />
      </svg>
      <svg width="140" height="140" viewBox="0 0 16 16">
        <path
          id="morphTarget"
          fill="#222"
          d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334"
        />
      </svg>
    </div>
  );
};

const Index = () => {
  const { services, getFeaturedServices, loading, error } = useServicos();
  const featuredServices = getFeaturedServices();
  const { nextSlide, prevSlide, getItemClass } = useCarousel(featuredServices);

  if (loading) {
    return <MainContainer></MainContainer>;
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
      {/* SEÇÃO DE SERVIÇOS MAIS PROCURADOS */}
      {featuredServices.length > 0 && (
        <ServicesSection>
          <h1>Serviços mais procurados</h1>
          <CarouselContainer>
            <Items>
              {featuredServices.map((service, index) => (
                <Item key={service.id} className={getItemClass(index)}>
                  <img
                    className="img-fade-hover"
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
          {/* Morph logo abaixo da seção de serviços mais procurados */}
          <ToolsMorph />
        </ServicesSection>
      )}

      {/* TÍTULO */}
      <FeaturedServices>
        <h2>Todos os Serviços Disponíveis</h2>

        {/* 🔥 MOVI PARA FORA DA CONDIÇÃO E FORA DO RETURN ANTES DOS HOOKS */}
        <LupaMotion />

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
