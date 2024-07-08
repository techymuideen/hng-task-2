import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(NavLink)`
  border: none;
  border: 0.5px solid #00000033;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0.5rem 2.4rem;
  border-radius: 1.2rem;
  gap: 0.5rem;
  min-height: 5.4rem;

  &:hover {
    opacity: 0.8;
  }
`;

const Button = (props) => {
  return (
    <StyledButton>
      {props.text}
      {props.icon}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
};

export default Button;
