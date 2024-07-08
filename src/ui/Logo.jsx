import styled from "styled-components";
import LogoImg from "../../public/Logo.png";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img``;

const Logo = () => {
  return (
    <StyledLogo>
      <Img src={LogoImg} alt="Logo" />
    </StyledLogo>
  );
};

export default Logo;
