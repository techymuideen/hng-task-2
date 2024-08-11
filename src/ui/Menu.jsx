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

const LiveChat = styled(Link)`
  background-color: var(--color-yellow);
  color: #fff;
  padding: 0.8rem 2rem;
  margin-top: 1rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Menu = () => {
  const navigate = useNavigate();
  return (
    <Menus>
      <Menus.Menu>
        <StyledMenu>
          <Menus.Toggle id={"account"}>
            <Container>
              <BsPersonFillCheck size={30} />
              Hi, Muideen <IoIosArrowDown />
            </Container>
          </Menus.Toggle>
          <Menus.List id={"account"}>
            <Menus.Button
              icon={<FaRegUser />}
              onClick={() => navigate("account")}
            >
              My Account
            </Menus.Button>

            <Menus.Button icon={<BsBox2 />} onClick={() => navigate("/admin")}>
              Order
            </Menus.Button>

            <Menus.Button icon={<FiMail />} onClick={() => navigate("/user")}>
              Inbox
            </Menus.Button>

            <Menus.Button
              icon={<FaRegHeart />}
              onClick={() => navigate("/user")}
            >
              Saved Item
            </Menus.Button>
            <Logout>Logout</Logout>
          </Menus.List>

          <Menus.Toggle id={"help"}>
            <Container>
              <IoMdHelpCircleOutline size={25} /> Help
              <IoIosArrowDown />
            </Container>
          </Menus.Toggle>
          <Menus.List id={"help"}>
            <Menus.Button onClick={() => navigate("account")}>
              Help Center
            </Menus.Button>

            <Menus.Button onClick={() => navigate("account")}>
              Place an Order
            </Menus.Button>

            <Menus.Button onClick={() => navigate("account")}>
              Payment options
            </Menus.Button>

            <Menus.Button onClick={() => navigate("account")}>
              Track an order
            </Menus.Button>

            <Menus.Button onClick={() => navigate("account")}>
              Cancel an order
            </Menus.Button>

            <Menus.Button onClick={() => navigate("account")}>
              Returns and Refunds
            </Menus.Button>
            <LiveChat size="large">
              {" "}
              <IoChatboxEllipsesOutline /> <span>Live chat</span>
            </LiveChat>
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
