import styled from "styled-components";

export const MainContainer = styled.main`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  min-height: calc(100vh - 200px);

  h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const FormSection = styled.section`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    color: #34495e;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 600;
  font-size: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ServicesSection = styled.section`
  margin-top: 3rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    color: #34495e;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 2rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ServiceCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
  }

  h3 {
    margin: 0 0 0.75rem 0;
    color: #2c3e50;
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    margin: 0 0 1rem 0;
    color: #6c757d;
    line-height: 1.5;
    font-size: 0.9rem;
  }

  .price {
    background: #2c5aa0;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
`;

export const EditButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 100px;
  flex: 1;

  &:hover {
    background: #218838;
    transform: translateY(-1px);
  }
`;

export const DeleteButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 100px;
  flex: 1;

  &:hover {
    background: #c82333;
    transform: translateY(-1px);
  }
`;
