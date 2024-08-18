import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${(props) =>
    props.type === "row" &&
    css`
      background-color: red;
    `}
`;

const Row = (props) => {
  return <StyledRow>{props.children}</StyledRow>;
};

export default Row;
