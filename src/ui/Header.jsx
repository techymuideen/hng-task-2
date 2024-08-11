import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Menu from "./Menus";
import MainNav from "./MainNav";

const HeaderContainer = styled.header`
  background-color: var(--color-grey-50);
  box-shadow: var(--shadow-sm);
  width: 100%;
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  z-index: 1000;
  margin-top: 3rem;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Noto Sans", sans-serif;

  gap: 2rem;
  flex-wrap: wrap;

  padding: 1rem 8rem;
  margin: 0 auto;
  max-width: 144rem;

  @media (max-width: 1000px) {
    padding: 1rem 4rem;
    max-width: 100vw;
  }

  @media (max-width: 500px) {
    padding: 1rem 2rem;
    width: 100vw;
  }

  & .hamburger {
    @media (min-width: 700px) {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <StyledHeader>
        <Logo />
        <SearchBar />
        <MainNav />
        <Menu />
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
