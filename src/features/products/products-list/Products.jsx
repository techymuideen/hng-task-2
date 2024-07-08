import styled from "styled-components";
import { products } from "../../../data/products/data-products";

import ProductItem from "../products-ui/ProductItem";
import ProductsControl from "./ProductsControl";
import ProductsList from "../products-ui/ProductsList";
import ProductsPagination from "../products-ui/ProductsPagination";

const StyledProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const Products = () => {
  return (
    <StyledProducts>
      <ProductsControl />
      <ProductsList>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsList>
      <ProductsPagination />
    </StyledProducts>
  );
};

export default Products;
