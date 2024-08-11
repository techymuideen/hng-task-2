import styled from "styled-components";

import ProductItem from "./ProductItem.jsx";

import ProductsList from "./ProductsList.jsx";
import SpinnerMini from "../../ui/SpinnerMini.jsx";

import { useProducts } from "./useProducts.js";
import Pagination from "../../ui/Pagination.jsx";
import Button from "../../ui/Button.jsx";
import { Link } from "react-router-dom";
import ProductsOperations from "./ProductsOperation.jsx";

const StyledProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const Spinnerontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Products = ({ size }) => {
  const { products, error, isLoading } = useProducts({ size });

  if (isLoading) {
    return (
      <Spinnerontainer>
        <SpinnerMini />
      </Spinnerontainer>
    );
  }

  if (error) {
    return <p>Unable to fetch products</p>;
  }

  return (
    <StyledProducts>
      <ProductsOperations />
      <ProductsList>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={{
              id: product.id,
              name: product.title,
              image: product.image,
              price: product.price,
              description: product.description,
            }}
          />
        ))}
      </ProductsList>
      {size === "few" && (
        <ButtonContainer>
          <Button as={Link} to="/store">
            See more products
          </Button>
        </ButtonContainer>
      )}
      {size === "all" && <Pagination />}
    </StyledProducts>
  );
};

export default Products;
