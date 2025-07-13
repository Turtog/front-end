import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../utils/axios-client";
import {
  MainContainer,
  FormSection,
  Form,
  Label,
  Input,
  Button,
  LoginText,
  LoginLink,
} from "./Cadastro.styled";

const Cadastro = () => {
  const [disableButton, setDisableButton] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const inputPassword = useRef(null);
  const confirmPassword = useRef(null);
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleName = (event) => {
    handleEnableButton();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    handleEnableButton();
    setEmail(event.target.value);
    setEmailInvalid(!emailPattern.test(event.target.value));
  };

  const handlePassword = (event) => {
    handleEnableButton();
    setPassword(event.target.value);
  };

  const handleEnableButton = () => {
    if (name !== "" && email !== "" && password !== "")
      setDisableButton(
        !(confirmPassword.current.value === inputPassword.current.value)
      );
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const payload = {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword.current.value,
      };
      console.log({ payload });
      const response = await axiosClient.post("/auth/register", payload);
      console.log(response);
      const { data } = response;
      console.log({ data });
      alert("Usuário criado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("Erro no cadastro:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Erro ao criar usuário";
      alert(errorMessage);
    }
  };

  return (
    <MainContainer>
      <FormSection>
        <h2>Novo Usuário</h2>
        <Form onSubmit={onSubmit}>
          <Label htmlFor="name">Nome Completo</Label>
          <Input
            type="text"
            id="name"
            placeholder="Nome Completo"
            name="name"
            onChange={handleName}
            required
          />

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={handleEmail}
            required
          />
          {emailInvalid && <pre>{`Campo Email é inválido!!!`}</pre>}

          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            placeholder="Senha"
            onChange={handlePassword}
            ref={inputPassword}
            name="password"
            required
          />

          <Label htmlFor="password_confirm">Confirmar Senha</Label>
          <Input
            type="password"
            id="password_confirm"
            placeholder="Confirmar a senha"
            name="password_confirm"
            ref={confirmPassword}
            onChange={handleEnableButton}
            required
          />

          <Button type="submit" disabled={disableButton}>
            Cadastrar
          </Button>
        </Form>

        <LoginText>
          Já possui uma conta? <LoginLink href="/login">Entrar</LoginLink>
        </LoginText>
      </FormSection>
    </MainContainer>
  );
};

export default Cadastro;
