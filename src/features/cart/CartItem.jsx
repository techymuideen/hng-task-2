import { useDispatch } from "react-redux";
import styled from "styled-components";
import { cartActions } from "../../store/cart-slice";

const StyledCartItem = styled.li`
  display: flex;
  padding: 1rem 0;
  gap: 2rem;

  &:not(:last-child) {
    border-bottom: 1px solid #00000033;
  }

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const Img = styled.img`
  height: 8rem;
`;

const Title = styled.p`
  font-size: 2rem;
  max-width: 40rem;
`;

const StyledPrice = styled.p`
  font-size: 2rem;
  color: var(--color-green);
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;

  button {
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-red-800);
  }
`;

const PriceContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  justify-content: center;

  div {
    display: flex;
    gap: 1rem;

    button {
      background-color: var(--color-brand-700);
      border: none;
      color: #fff;
      font-size: 3rem;
      line-height: 0;
      padding: 1.5rem 1.5rem;
    }
  }
`;

const CartItem = (props) => {
  const { image, title, totalPrice, quantity, id, price } = props.product;

  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: id,
        title: title,
        price: price,
        image: image,
      }),
    );
  };

  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const removeItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <StyledCartItem>
      <ImgContainer>
        <Img src={image} />
        <button onClick={removeItem}>Remove</button>
      </ImgContainer>

      <Title>{title}</Title>

      <PriceContainer>
        <StyledPrice>${totalPrice.toFixed(2)}</StyledPrice>
        <div>
          <button onClick={removeItemFromCartHandler}>-</button>
          <p>{quantity}</p>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </PriceContainer>
    </StyledCartItem>
  );
};

export default CartItem;
