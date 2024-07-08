import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCartItem = styled.div`
  display: flex;
  gap: 5rem;

  @media (max-width: 700px) {
    flex-direction: column;
    box-shadow: 0px 4px 8px 0px #00000014;
    padding: 2rem;
  }
`;

const ImgContainer = styled.div`
  background-color: #c8efd9b2;
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #000;
  }

  & .text {
    font-size: 14px;
    font-weight: 400;
    color: #00000099;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Review = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & span {
    font-size: 11.6px;
    font-weight: 400;
    line-height: 17.4px;
    color: #787a80;
  }
`;

const DiscountedPrice = styled.p`
  font-size: 2.1rem;
  font-weight: 700;
  color: #2a6b66;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #787a80;
`;
const Percentage = styled.p`
  border-radius: 4px;
  padding: 0.2rem 0.6rem;
  background-color: #ff4242;

  font-family: Lato;
  font-size: 12.68px;
  font-weight: 700;

  color: #ffffff;
`;

const Colors = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }

  span {
    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;

const ColorLink = styled(Link)`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 1000px;
  background-color: ${({ color }) => (color ? color : "red")};

  &:hover {
    opacity: 0.8;
  }
`;

const Input = styled.input`
  align-self: flex-start;
  border: none;
  padding: 0.5rem 1rem;
  max-width: 8rem;
  border-radius: 0.5rem;
`;

const CartButtonRed = styled(Link)`
  border: 0.5px solid #269255;
  border-radius: 5px;
  color: #269255;
  font-size: 1.2rem;
  font-weight: 700;
  align-self: flex-start;
  padding: 0.7rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

const CartButtonGreen = styled(Link)`
  border: 0.5px solid #d13821;
  border-radius: 5px;
  color: #d13821;
  font-size: 1.2rem;
  font-weight: 700;
  align-self: flex-start;
  padding: 0.7rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

const CartItem = ({ product }) => {
  return (
    <StyledCartItem>
      <ImgContainer>
        <img src={product.image} />
      </ImgContainer>
      <TextContainer>
        <h2>{product.name}</h2>
        <p className="text">{product.description}</p>
        <PriceContainer>
          <DiscountedPrice>#10,000</DiscountedPrice>
          <Price>#20,000</Price>
          <Percentage>-{product.discount}%</Percentage>

          <Review>
            <div>
              <FaStar color="#FFD203" />
              <FaStar color="#FFD203" />
              <FaStar color="#FFD203" />
              <FaRegStar color="#FFD203" />
              <FaRegStar color="#FFD203" />
            </div>
            <span>12k reviews</span>
          </Review>
        </PriceContainer>
        <Colors>
          <span>Color</span>
          <ColorLink color="#D3A693" />
          <ColorLink color="#2C384C" />
          <ColorLink color="#5C493B" />
          <ColorLink color="#4E6553" />
          <ColorLink color="#D13821" />
          <ColorLink color="#FFD205" />
          <ColorLink color="#3C3B5C" />
          <ColorLink color="#2AC84C" />
        </Colors>
        <Input type="number" defaultValue="1" />
        <CartButtonGreen>
          <FaRegHeart size={20} />
          Favorites
        </CartButtonGreen>
        <CartButtonRed>
          <RiDeleteBin6Line size={20} />
          Remove from Cart
        </CartButtonRed>
      </TextContainer>
    </StyledCartItem>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartItem;
