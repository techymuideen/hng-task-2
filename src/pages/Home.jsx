import styled from "styled-components";
import Products from "../features/products/Products";
import Hero from "../ui/Hero";

const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

const Home = () => {
  return (
    <StyledHome>
      <Hero />
      <Products size="few" />
    </StyledHome>
  );
};

export default Home;
