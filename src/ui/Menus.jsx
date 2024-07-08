import styled from "styled-components";

import { PiGearSixLight } from "react-icons/pi";
import { BsCart } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import ProfilePicture from "../../public/image.png";
import { NavLink } from "react-router-dom";

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
`;

const Active = styled.div`
  background-color: var(--color-primary-green);
  height: 1.2rem;
  width: 1.2rem;
  border: 2px solid #fff;
  border-radius: 100px;
  position: absolute;
  right: 0;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

const Img = styled.img``;

const Menu = () => {
  return (
    <StyledMenu>
      <Container to="settings">
        <PiGearSixLight size={24} />
      </Container>
      <Container to="cart">
        <Active />
        <BsCart size={24} />
      </Container>
      <Container to="notifications">
        <Active />
        <VscBell size={24} />
      </Container>
      <ImgContainer>
        <Container to="profile">
          <Img src={ProfilePicture} />
          <MdOutlineKeyboardArrowDown color="#534FEB" size={24} />
        </Container>
      </ImgContainer>
    </StyledMenu>
  );
};

export default Menu;
