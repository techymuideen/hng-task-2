import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(NavLink)`
  text-align: center;
`;

const Heading = styled.h1`
  text-transform: uppercase;
`;

const Logo = () => {
  return (
    <StyledLogo to="/">
      <Heading>Kasua</Heading>
    </StyledLogo>
  );
};

export default Logo;
