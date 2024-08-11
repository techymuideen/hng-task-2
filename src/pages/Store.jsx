import styled from "styled-components";
import Products from "../features/products/Products";

const StyledStore = styled.div``;

const Store = () => {
  return (
    <StyledStore>
      <Products size="all" />
    </StyledStore>
  );
};

export default Store;
