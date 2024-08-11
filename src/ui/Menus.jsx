import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { BsCart } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BsPersonFillCheck } from "react-icons/bs";
import { IoMdHelpCircleOutline } from "react-icons/io";
import DarkModeToggle from "./DarkModeToggle";

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

const Active = styled.div`
  background-color: var(--color-primary-green);
  border: 2px solid var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-0);
  padding: 0rem 0.4rem;
  border-radius: 1000px;

  text-align: center; /* Optional: center text alignment */

  position: absolute;
  right: 0;
  top: 0;
`;

const Menu = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <StyledMenu>
      <Container>
        <BsPersonFillCheck size={30} />
        Hi, Muideen <IoIosArrowDown />
      </Container>
      <Container>
        <IoMdHelpCircleOutline size={25} /> Help
        <IoIosArrowDown />
      </Container>
      <Container to="cart">
        {totalQuantity > 0 && <Active>{totalQuantity}</Active>}
        <BsCart size={30} />
      </Container>
      <Container>
        <DarkModeToggle />
      </Container>
    </StyledMenu>
  );
};

export default Menu;
