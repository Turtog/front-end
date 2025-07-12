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
  const [surname, setSurname] = useState("");
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

  const handleSurname = (event) => {
    handleEnableButton();
    setSurname(event.target.value);
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
    if (name !== "" && surname !== "" && email !== "" && password !== "")
      setDisableButton(
        !(confirmPassword.current.value === inputPassword.current.value)
      );
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log({ name, email, password });
      const payload = {
        name: name,
        surname: surname,
        email: email,
        password: password,
        password_confirmation: confirmPassword.current.value,
      };
      console.log({ payload });
      const response = await axiosClient.post("/users", payload);
      if (response?.status !== 201) throw new Error(response.data);
      console.log(response);
      const { data } = response;
      console.log({ data });
      alert("Usuário criado");
      navigate("/login");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <MainContainer>
      <FormSection>
        <h2>Novo Usuário</h2>
        <Form onSubmit={onSubmit}>
          <Label htmlFor="name">Nome de Login</Label>
          <Input
            type="text"
            id="name"
            placeholder="Nome de Login"
            name="name"
            onChange={handleName}
            required
          />

          <Label htmlFor="surname">Sobrenome</Label>
          <Input
            type="text"
            id="surname"
            placeholder="Sobrenome"
            name="surname"
            onChange={handleSurname}
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
