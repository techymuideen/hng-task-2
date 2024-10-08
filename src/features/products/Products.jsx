import styled from "styled-components";

import ProductItem from "./ProductItem.jsx";

import ProductsList from "./ProductsList.jsx";
import SpinnerMini from "../../ui/SpinnerMini.jsx";

import { useProducts } from "./useProducts.js";
import Pagination from "../../ui/Pagination.jsx";
import Button from "../../ui/Button.jsx";
import { Link } from "react-router-dom";
import ProductsOperations from "./ProductsOperation.jsx";
import { HiChevronRight } from "react-icons/hi2";

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
  text-transform: uppercase;
`;

const Products = ({ size }) => {
  const { products, error, isLoading, count, refetch } = useProducts();

  if (isLoading) {
    return (
      <Spinnerontainer>
        <SpinnerMini />
      </Spinnerontainer>
    );
  }

  if (error) {
    return (
      <Spinnerontainer>
        <div>Unable to fetch roducts</div>
        <Button size="large" onClick={() => refetch()}>
          Try again
        </Button>
      </Spinnerontainer>
    );
  }

  return (
    <StyledProducts>
      {size === "all" && <ProductsOperations />}
      <ProductsList>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={{
              id: product.id,
              name: product.name,
              image: product.image_url,
              price: product.price,
              description: product.description,
            }}
          />
        ))}
      </ProductsList>
      {size === "few" && (
        <ButtonContainer>
          <Button size="large" as={Link} to="/store">
            <span> See All</span>
            <HiChevronRight />
          </Button>
        </ButtonContainer>
      )}
      {size === "all" && <Pagination count={count} />}
    </StyledProducts>
  );
};

export default Products;
