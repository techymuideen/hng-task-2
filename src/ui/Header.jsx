import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Menu from "./Menus";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Noto Sans", sans-serif;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
  z-index: 100;

  & .hamburger {
    @media (min-width: 700px) {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <MainNav />
      <Menu />
    </StyledHeader>
  );
};

export default Header;
