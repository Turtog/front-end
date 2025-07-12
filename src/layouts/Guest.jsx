import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { GuestContainer, GuestMain, ContentWrapper } from "./Guest.styled.js";

function Guest() {
  return (
    <GuestContainer>
      <Header />
      <GuestMain>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </GuestMain>
      <Footer />
    </GuestContainer>
  );
}

export default Guest;
