import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  padding: 2rem 8rem;
  margin: 0 auto;
  max-width: 144rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-color: var(--color-grey-0);

  @media (max-width: 1000px) {
    padding: 2rem 4rem;
    max-width: 100vw;
  }

  @media (max-width: 500px) {
    padding: 2rem 2rem;
    width: 100vw;
  }
`;

function AppLayout() {
  return (
    <div>
      <Header />
      <StyledAppLayout>
        <Outlet />
      </StyledAppLayout>

      <Footer />
    </div>
  );
}

export default AppLayout;
