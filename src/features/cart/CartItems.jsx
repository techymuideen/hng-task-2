import CartItem from "./CartItem";
import cartImg from "../../../public/cart.svg";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);

  & > p {
    border-bottom: 1px solid #00000033;
    padding: 1rem 2rem;
    font-weight: 600;
    font-size: 2rem;
  }
`;

const StyledItems = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const EmptyContainer = styled.div`
  background-color: var(--color-grey-0);
  display: flex;
  padding: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-sm);
  gap: 1rem;

  img {
    max-height: 6rem;
    width: 6rem;
  }
`;

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  if (cartItems.length === 0) {
    return (
      <EmptyContainer>
        <img src={cartImg} />
        <h4>Your cart is empty!</h4>
        <p>Browse our categories and discover our best deals</p>

        <Link to="/">
          <Button size="large">Start Shopping</Button>
        </Link>
      </EmptyContainer>
    );
  }

  return (
    <CartContainer>
      <p>Cart ({totalQuantity})</p>
      <StyledItems>
        {cartItems.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </StyledItems>
    </CartContainer>
  );
};

export default CartItems;
