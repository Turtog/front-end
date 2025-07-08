import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MainOptions = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
`;

export const ServiceOption = styled.article`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: #7f8c8d;
    line-height: 1.6;
  }

  @media (min-width: 768px) {
    flex: 1;
    max-width: 400px;
  }
`;

export const StyledLink = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;

export const ServicesSection = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 2rem 0;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 2rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const Items = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

export const Item = styled.div`
  position: absolute;
  width: 250px;
  height: 320px;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  z-index: 1;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: #fff;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &.active {
    opacity: 1;
    z-index: 3;
    transform: translateX(0) scale(1.1);
  }

  &.prev {
    opacity: 0.8;
    z-index: 2;
    transform: translateX(-200px) scale(0.9);
  }

  &.next {
    opacity: 0.8;
    z-index: 2;
    transform: translateX(200px) scale(0.9);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 280px;

    img {
      height: 140px;
    }

    &.active {
      transform: translateX(0) scale(1.05);
    }

    &.prev {
      transform: translateX(-150px) scale(0.85);
    }

    &.next {
      transform: translateX(150px) scale(0.85);
    }
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 240px;

    img {
      height: 120px;
    }

    &.prev {
      transform: translateX(-120px) scale(0.8);
    }

    &.next {
      transform: translateX(120px) scale(0.8);
    }
  }
`;

export const ServiceInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #2c3e50;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 0.85rem;
    color: #7f8c8d;
    line-height: 1.4;
    flex-grow: 1;
  }

  .price {
    font-weight: 600;
    color: #27ae60;
    font-size: 1rem;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.9rem;
    color: #f39c12;
  }

  .availability {
    font-size: 0.8rem;
    color: #3498db;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.8rem;
    }

    .price {
      font-size: 0.9rem;
    }
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const CarouselBtn = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

export const ServiceLabels = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const ServiceLabel = styled.div`
  background-color: #34495e;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

export const FeaturedServices = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 3rem 0;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    margin: 2rem 0;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
`;

export const ServiceCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    color: #7f8c8d;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .service-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .price {
    color: #27ae60;
    font-weight: 600;
    font-size: 1.1rem;
  }

  .rating {
    color: #f39c12;
    font-size: 0.9rem;
  }

  .availability {
    color: #3498db;
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .service-btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }
`;
