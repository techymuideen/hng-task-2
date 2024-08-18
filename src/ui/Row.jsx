import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
