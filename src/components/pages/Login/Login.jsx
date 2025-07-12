import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthProvider";
import { useRef } from "react";
import axiosClient from "../../../utils/axios-client";
import {
  MainContainer,
  FormSection,
  Form,
  Label,
  Input,
  Button,
  RegisterText,
  RegisterLink,
} from "./Login.styled";

export default function Login() {
  const { setToken, setUser } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log({ payload });

    // Simulando login bem-sucedido
    const mockUser = {
      id: 1,
      name: "Usuário Teste",
      email: payload.email,
    };

    setToken("mock-token-123");
    setUser(mockUser);
    alert("Bem Vindo!!");
    navigate("/perfil");
  };

  return (
    <MainContainer>
      <FormSection>
        <h2>Conectar Conta</h2>
        <Form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            required
          />

          <Label htmlFor="password">Senha</Label>
          <Input
            ref={passwordRef}
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            required
          />

          <Button type="submit">Login</Button>
        </Form>

        <RegisterText>
          Não possui uma conta?{" "}
          <RegisterLink as={Link} to="/cadastro">
            Criar conta
          </RegisterLink>
        </RegisterText>
      </FormSection>
    </MainContainer>
  );
}
