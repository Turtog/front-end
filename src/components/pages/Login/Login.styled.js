import styled from "styled-components";

export const MainContainer = styled.main`
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;

  h2 {
    margin-bottom: 1.5rem;
    color: #333;
    text-align: center;
  }

  @media (min-width: 600px) {
    justify-content: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease, background-color 1s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    background-color: #e3f2fd;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #28a745;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.7s ease, color 0.7s ease,
    box-shadow 0.3s linear, border-left 0.1s ease-out,
    border-right 0.1s ease-out, padding-left 1.5s, padding-right 1.5s;

  &:hover {
    background-color: #005514ff;
    color: #fff;
    box-shadow: 0px 0px 10px #005514ff;
    border-left: 20px solid #005514ff;
    border-right: 20px solid #005514ff;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const RegisterText = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: #333;
`;

export const RegisterLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
