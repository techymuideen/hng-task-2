import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiGearSixLight } from "react-icons/pi";
import { VscBell } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import CartIcon from "../features/cart/CartIcon";

const StyledMobileHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 100%;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    flex: 100%;
    justify-content: space-between;
    height: 5rem;
    padding: 1rem 0.5rem;

    & > div {
      display: flex;
      align-items: center;
      gap: .5rem
    }
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & .only-mobile {
    @media (min-width: 700px) {
      display: none;
    }
  }

  @media (max-width: 700px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    top: -6rem;
    right: -5rem;
    background: var(--color-grey-0);
    min-width: 90vw;
    height: 120vh;
    z-index: 1000;
    align-items: flex-start;
    padding-top: 15rem;
    padding-left: 2rem;
    padding-right: 2rem;
    position: fixed;
  }
`;

const StyledNavLink = styled(NavLink)`
  &,
  &:link,
  &:visited {
    color: #00000099;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 1rem;
    transition: all 0.3s;

    @media (max-width: 700px) {
      font-size: 2.5rem;
      color: var(--color-50);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-primary-green);
    font-weight: 700;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: var(--color-grey-600);

  z-index: 1100; /* Above the NavList */

  @media (max-width: 700px) {
    display: flex;
  }
`;

const Backdrop = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 900;

  ${({ open }) =>
    open &&
    `
      backdrop-filter: blur(5px);
    `}
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

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledMobileHeader>
      <Backdrop open={open} onClick={handleClose} />
      <nav>
        <Logo />

        <div>
          <Container to="cart">
            <CartIcon />
          </Container>
          <DarkModeToggle />

          <Hamburger open={open} onClick={() => setOpen(!open)}>
            {!open && <GiHamburgerMenu size="40px" color="inherit" />}
            {open && <IoMdClose size="40px" color="inherit" />}
          </Hamburger>
        </div>

        <NavList open={open}>
          <li>
            <StyledNavLink to="/" onClick={() => setOpen(false)}>
              <MdOutlineHome className="only-mobile" size={24} />
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="user" onClick={() => setOpen(false)}>
              <FaRegUser className="only-mobile" size={24} /> User
            </StyledNavLink>
          </li>

          <li className="only-mobile">
            <StyledNavLink to="settings" onClick={() => setOpen(false)}>
              <PiGearSixLight size={24} /> Settings
            </StyledNavLink>
          </li>
          <li className="only-mobile">
            <StyledNavLink to="cart" onClick={() => setOpen(false)}>
              <BsCart size={24} />
              Carts
            </StyledNavLink>
          </li>
          <li className="only-mobile">
            <StyledNavLink to="notification" onClick={() => setOpen(false)}>
              <VscBell size={24} /> Notification
            </StyledNavLink>
          </li>

          <li className="only-mobile">
            <StyledNavLink to="profile" onClick={() => setOpen(false)}>
              <CgProfile size={24} /> Profile
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
    </StyledMobileHeader>
  );
};

export default MobileHeader;
