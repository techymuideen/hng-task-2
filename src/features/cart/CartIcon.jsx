import { useSelector } from "react-redux";

import { BsCart } from "react-icons/bs";
import styled from "styled-components";

const Active = styled.div`
  background-color: var(--color-grey-700);
  border: 2px solid var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-0);
  padding: 0rem 0.8rem;
  border-radius: 50%;

  text-align: center;

  position: absolute;
  right: 0;
  top: 0;
`;

const CartIcon = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      {totalQuantity > 0 && <Active>{totalQuantity}</Active>}
      <BsCart size={30} />
    </>
  );
};

export default CartIcon;
