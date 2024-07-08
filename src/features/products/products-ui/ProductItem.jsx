import styled from "styled-components";
import PropTypes from "prop-types";
import { IoMdCart } from "react-icons/io";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import Button from "../../../ui/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 36rem;
  height: 100%;
  border-radius: 1.6rem;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px #00000014;

  margin: 0 auto;
`;

const Top = styled.div`
  position: relative;
  text-align: center;
  padding: 1.5rem 1.5rem;
  background-color: #c8efd9;
`;

const Discount = styled.p`
  position: absolute;
  right: 1.5rem;
  color: var(--color-primary-green);
  background-color: #f1ffed;
  font-size: 1.4rem;
  padding: 0.2rem 1.2rem;
  text-transform: uppercase;

  border: 1px solid #86e588;
  border-radius: 3.2rem;
`;

const Bottom = styled.div`
  padding: 1.5rem 1.5rem;
  background-color: #fff;
  margin-top: auto;

  & div div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  & p {
    font-size: 1.4rem;
    font-weight: 400;
    color: #00000099;
    margin: 0.7rem 0;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  & h3 {
    font-size: 2.4rem;
    font-weight: 700;
  }

  & h4 {
    font-size: 1.4rem;
    font-weight: 400;
    color: #269255;
  }
`;

const ProductItem = ({ product }) => {
  return (
    <Container>
      <Top>
        <Discount>{product.discount}% discount</Discount>
        <img src={product.image} />
      </Top>
      <Bottom>
        <Title>
          <h3>{product.name}</h3>
          <h4>#{product.price}</h4>
        </Title>
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
        <Button>
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
