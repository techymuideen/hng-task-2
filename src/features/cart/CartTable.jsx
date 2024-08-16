import CartItem from "./CartItem";
import cartImg from "../../../public/cart.svg";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  flex: 70%;

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

const CartSummary = styled.div`
  background-color: red;
  flex: 30%;
  position: sticky;
  top: 97px;

  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);

  & > p {
    border-bottom: 1px solid #00000033;
    padding: 1rem 2rem;
    font-weight: 400;
    font-size: 1.6rem;
    text-transform: uppercase;
  }

  @media (max-width: 700px) {
    width: 100%;
    align-self: center;
  }
`;

const StyledSummaryItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  font-weight: 700;
`;

const CartTable = () => {
  const cartItems = useSelector((state) => state.cart?.items);
  const totalQuantity = useSelector((state) => state.cart?.totalQuantity);
  const subTotal = useSelector((state) => state.cart?.totalAmount);

  // console.log(cartItems);

  if (cartItems?.length === 0) {
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
      <CartItems>
        <p>Cart ({totalQuantity})</p>
        <StyledItems>
          {cartItems?.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </StyledItems>
      </CartItems>
      <CartSummary>
        <p>Cart summary</p>
        <StyledSummaryItems>
          <span>Subtotal</span>
          <span>${subTotal.toFixed(2)}</span>
        </StyledSummaryItems>
        <Button size="large">CHECKOUT ($ {subTotal.toFixed(2)})</Button>
      </CartSummary>
    </CartContainer>
  );
};

export default CartTable;
