import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Spinner from "./Spinner";
import Header from "./Header";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUpdateCart } from "../features/cart/useUpdateCart";
import { useUser } from "../features/authentication/useUser";
import { cartActions } from "../store/cart-slice";
import { useCart } from "../features/cart/useCart";

const StyledAppLayout = styled.div`
  padding: 2rem 8rem;
  margin: 0 auto;
  max-width: 144rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-color: var(--color-grey-50);

  @media (max-width: 1000px) {
    padding: 2rem 4rem;
    max-width: 100vw;
  }

  @media (max-width: 500px) {
    padding: 2rem 2rem;
    width: 100vw;
  }
`;

function AppLayout() {
  const dispatch = useDispatch();
  const { id: userId, isLoading: isUserLoading } = useUser(); // Get user details
  const { isLoading: isCartLoading, cart } = useCart(); // Get cart data for user
  const { updateCart } = useUpdateCart(); // Update cart API handler
  const cartData = useSelector((state) => state.cart); // Get Redux cart state
  const defaultCartData = cart?.[0]?.cart; // Extract cart data from the DB response

  // Fetch and set cart data into Redux when defaultCartData changes
  useEffect(() => {
    if (defaultCartData) {
      dispatch(cartActions.setCart(defaultCartData));
    } else {
      dispatch(cartActions.clearCart()); // Clear cart if no data found
    }
  }, [defaultCartData, dispatch]);

  // Memoize the cart update handler to avoid unnecessary re-renders
  const updateCartHandler = useCallback(() => {
    if (userId) {
      updateCart({ id: userId, newCartData: cartData });
    }
  }, [cartData, updateCart, userId]);

  // Trigger cart update when cartData changes
  useEffect(() => {
    if (cartData.changed) {
      updateCartHandler();
    }
  }, [cartData, updateCartHandler]);

  // Spinner while loading user or cart data
  if (isUserLoading || isCartLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Header />
      <StyledAppLayout>
        <Outlet />
      </StyledAppLayout>
      <Footer />
    </div>
  );
}

export default AppLayout;
