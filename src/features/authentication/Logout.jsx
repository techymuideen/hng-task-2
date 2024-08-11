import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../ui/Heading";

const StyledLogout = styled(Link)`
  text-transform: uppercase;
  color: var(--color-yellow);
`;

const Logout = ({ children }) => {
  return (
    <StyledLogout>
      <Heading as="h4">{children}</Heading>
    </StyledLogout>
  );
};

export default Logout;
