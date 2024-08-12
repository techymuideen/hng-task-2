import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  width: 20rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const FormRow = ({ label, error, children }) => {
  return (
    <StyledFormRow>
      {label && <Label htmlFor="name">{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
};

export default FormRow;
