import styled from "styled-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { IoMdCart } from "react-icons/io";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import Button from "../../ui/Button";
import { cartActions } from "../../store/cart-slice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 36rem;
  height: 100%;
  border-radius: 1.6rem;
  overflow: hidden;
  background-color: var(--color-grey-0);
  box-shadow: 0px 4px 8px 0px #00000014;

  margin: 0 auto;
`;

const Top = styled.div`
  position: relative;
  text-align: center;
  padding: 1.5rem 1.5rem;
  background-color: var(--color-grey-0);
  max-height: 20rem;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Price = styled.div`
  font-size: 3rem;
  z-index: 10;
  color: var(--color-green);
`;

const Bottom = styled.div`
  padding: 1.5rem 1.5rem;
  background-color: var(--color-grey-0);
  margin-top: auto;

  & div div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  & p {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(color-grey-200);
    margin: 0.7rem 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  & h3 {
    font-size: 2.4rem;
    font-weight: 700;
  }

  & h4 {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--color-green-700);
  }
`;

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: product.id,
        title: product.name,
        price: product.price,
        image: product.image,
      }),
    );
  };
  return (
    <Container>
      <Top>
        <Img src={product.image} />
      </Top>
      <Bottom>
        <Title>
          <h3>{product.name}</h3>
        </Title>
        <Price>${product.price.toFixed(2)}</Price>
        <div>
          <div>
            <FaStar color="#FFD203" />
            <FaStar color="#FFD203" />
            <FaStar color="#FFD203" />
            <FaRegStar color="#FFD203" />
            <FaRegStar color="#FFD203" />
            <span>( 2k )</span>
          </div>
        </div>
        <p>{product.description}</p>
        <Button onClick={addItemToCartHandler}>
          Add to Cart <IoMdCart size="24px" />
        </Button>
      </Bottom>
    </Container>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
