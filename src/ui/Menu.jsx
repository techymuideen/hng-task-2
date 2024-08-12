import styled from "styled-components";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";
import { BsPersonFillCheck } from "react-icons/bs";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { BsBox2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import DarkModeToggle from "./DarkModeToggle";
import CartIcon from "../features/cart/CartIcon";
import Menus from "./Menus";
import Logout from "../features/authentication/Logout";
import { useUser } from "../features/authentication/useUser";
import Button from "./Button";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Container = styled(NavLink)`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  padding: 1rem 0.5rem;
  position: relative;
  gap: 0.5rem;

  &:hover {
    color: var(--color-green-700);
  }
`;

const YellowButton = styled(Link)`
  background-color: var(--color-yellow);
  color: #fff;
  padding: 0.8rem 2rem;
  margin-top: 1rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
`;

const Menu = () => {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  return (
    <Menus>
      <Menus.Menu>
        <StyledMenu>
          <Menus.Toggle id={"account"}>
            <Container>
              <BsPersonFillCheck size={30} />
              {isAuthenticated ? "Hi, Muideen" : "Account"} <IoIosArrowDown />
            </Container>
          </Menus.Toggle>
          <Menus.List id={"account"}>
            {!isAuthenticated && (
              <YellowButton to="login" size="large">
                Sign up
              </YellowButton>
            )}
            <Menus.Button icon={<FaRegUser />} to="/customer/account">
              My Account
            </Menus.Button>

            <Menus.Button icon={<BsBox2 />} to="customer/order">
              Order
            </Menus.Button>

            {isAuthenticated && (
              <Menus.Button icon={<FiMail />} to="customer/account/inbox">
                Inbox
              </Menus.Button>
            )}

            <Menus.Button icon={<FaRegHeart />} to="customer/wishlist">
              Saved Item
            </Menus.Button>
            {isAuthenticated && <Logout>Logout</Logout>}
          </Menus.List>

          <Menus.Toggle id={"help"}>
            <Container>
              <IoMdHelpCircleOutline size={25} /> Help
              <IoIosArrowDown />
            </Container>
          </Menus.Toggle>
          <Menus.List id={"help"}>
            <Menus.Button to="help-center">Help Center</Menus.Button>

            <Menus.Button to="help-center/place-an-order">
              Place an Order
            </Menus.Button>

            <Menus.Button to="help-center/payment-options">
              Payment options
            </Menus.Button>

            <Menus.Button to="help-center/track-an-order">
              Track an order
            </Menus.Button>

            <Menus.Button to="help-center/cancel-an-order">
              Cancel an order
            </Menus.Button>

            <Menus.Button to="help-center/returns-and-refunds">
              Returns and Refunds
            </Menus.Button>
            <YellowButton size="large">
              {" "}
              <IoChatboxEllipsesOutline /> <span>Live chat</span>
            </YellowButton>
          </Menus.List>
          <Container to="cart">
            <CartIcon />
          </Container>
          <Container>
            <DarkModeToggle />
          </Container>
        </StyledMenu>
      </Menus.Menu>
    </Menus>
  );
};

export default Menu;
