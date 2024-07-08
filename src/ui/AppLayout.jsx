import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Contact from "../ui/Contact";

const StyledAppLayout = styled.div`
  padding: 6rem 8rem;
  margin: 0 auto;
  max-width: 144rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 1000px) {
    padding: 4rem;
    max-width: 100vw;
  }

  @media (max-width: 500px) {
    padding: 2rem;
    width: 100vw;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Hero />
      <main>
        <Outlet />
      </main>
      <Contact />
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
