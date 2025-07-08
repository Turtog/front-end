import { Link } from "react-router-dom";
import {
  MainContainer,
  FormSection,
  Form,
  Label,
  Input,
  Button,
  LoginText,
  LoginLink,
} from "./Register.styled";

const Register = () => {
  return (
    <MainContainer>
      <FormSection>
        <article>
          <h2>Registrar</h2>
          <Form>
            <Label htmlFor="newName">Nome:</Label>
            <Input type="text" id="newName" name="nome" required />

            <Label htmlFor="newCpf">CPF:</Label>
            <Input type="text" id="newCpf" name="cpf" required />

            <Label htmlFor="newEmail">Email:</Label>
            <Input type="email" id="newEmail" name="email" required />

            <Label htmlFor="newPassword">Senha:</Label>
            <Input type="password" id="newPassword" name="senha" required />

            <Label htmlFor="newImage">Imagem:</Label>
            <Input type="file" id="newImage" name="imagem" accept="image/*" />

            <Button type="submit">Registrar</Button>
          </Form>
          <LoginText>
            Já tem uma conta?{" "}
            <LoginLink as={Link} to="/login">
              Faça login
            </LoginLink>
          </LoginText>
        </article>
      </FormSection>
    </MainContainer>
  );
};

export default Register;
