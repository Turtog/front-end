import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset global */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    overflow-x: hidden;
    line-height: 1.6;
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 200px);
    text-align: center;
    padding: 2rem;
  }

  /* Estilos para formulários */
  .form-section, .pedidos-section {
    width: 100%;
    max-width: 600px;
    margin-bottom: 2rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    font-weight: bold;
  }

  .form-group input, .form-group textarea {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #218838;
  }

  .alert {
    color: red;
    font-size: 0.875rem;
  }

  /* Estilos para listas */
  .pedidos-section ul {
    list-style: none;
    padding: 0;
  }

  .pedidos-section li {
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .lista-servicos {
    list-style: none;
    padding: 0;
  }

  .servico-item {
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  /* Responsividade */
  @media (min-width: 768px) {
    .form-section,
    .pedidos-section {
      width: 50%;
    }
  }
`;
