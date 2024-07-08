import CartItem from "./CartItem";
import { cartItems } from "../../data/products/data-products";
import styled from "styled-components";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  padding: 4rem 0;

  .button-container {
    align-self: flex-end;
  }
`;

const CartButton = styled.button`
  font-size: 1.4rem;
  font-weight: 400;
  padding: 1rem 1.2rem;
  border: none;
  color: #fff;
  border-radius: 8px;
  background: linear-gradient(180deg, #269255 0%, #2d4c74 100%);

  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
  }
`;

const CartItems = () => {
  return (
    <CartContainer>
      {cartItems.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
      <div className="button-container">
        <CartButton>Checkout</CartButton>
      </div>
    </CartContainer>
  );
};

export default CartItems;
