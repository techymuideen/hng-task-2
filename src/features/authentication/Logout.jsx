import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useLogout } from "./useLogout";
import ConfirmLogout from "./ConfirmLogout";
import Modal from "../../ui/Modal";

const StyledLogout = styled.button`
  text-transform: uppercase;
  color: var(--color-yellow);
  background: transparent;
  border: none;
`;

const Logout = ({ children }) => {
  const { logout, isLoading } = useLogout();

  return (
    <Modal>
      <Modal.Open opens="logout">
        <StyledLogout onClick={8}>
          <Heading as="h4">{children}</Heading>
        </StyledLogout>
      </Modal.Open>
      <Modal.Window name="logout">
        <ConfirmLogout disabled={isLoading} onConfirm={() => logout()} />
      </Modal.Window>
    </Modal>
  );
};

export default Logout;
