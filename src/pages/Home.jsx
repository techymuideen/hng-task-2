import styled from "styled-components";
import AvailableProducts from "../features/products/available-products/AvailableProducts";
import Products from "../features/products/products-list/Products";

const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

const Home = () => {
  return (
    <StyledHome>
      <Products />
      <AvailableProducts />
    </StyledHome>
  );
};

export default Home;
