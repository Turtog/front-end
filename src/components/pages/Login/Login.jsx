import { Link } from "react-router-dom";
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

const Login = () => {
  return (
    <MainContainer>
      <FormSection>
        <article>
          <h2>LOGIN</h2>
          <Form>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" required />

            <Label htmlFor="senha">Senha:</Label>
            <Input type="password" id="senha" name="senha" required />

            <Button type="submit">Entrar</Button>
          </Form>
          <RegisterText>
            Não tem uma conta?{" "}
            <RegisterLink as={Link} to="/register">
              Registre-se aqui
            </RegisterLink>
          </RegisterText>
        </article>
      </FormSection>
    </MainContainer>
  );
};

export default Login;
