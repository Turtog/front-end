import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import {
  DefaultContainer,
  DefaultMain,
  ContentWrapper,
} from "./Default.styled.js";

function Default() {
  return (
    <DefaultContainer>
      <Header />
      <DefaultMain>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </DefaultMain>
      <Footer />
    </DefaultContainer>
  );
}

export default Default;
