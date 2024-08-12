import styled from "styled-components";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const ConfirmDelete = ({ onConfirm, disabled, onCloseModal }) => {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Log out</Heading>
      <p>Are you sure you want to logout.</p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Logout
        </Button>
      </div>
    </StyledConfirmDelete>
  );
};

export default ConfirmDelete;
