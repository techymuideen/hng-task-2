import styled from "styled-components";
import { products } from "../../../data/products/data-products";

import ProductItem from "../products-ui/ProductItem";
import ProductsList from "../products-ui/ProductsList";
import ProductsPagination from "../products-ui/ProductsPagination";

const StyledAvailableProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const Title = styled.h2`
  background-color: var(--color-primary-green);
  border-radius: 1.2rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
  padding: 1.3rem 1.8rem;
`;

const AvailableProducts = () => {
  return (
    <StyledAvailableProducts>
      <Title>Available Products</Title>
      <ProductsList>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsList>
      <ProductsPagination />
    </StyledAvailableProducts>
  );
};

export default AvailableProducts;
