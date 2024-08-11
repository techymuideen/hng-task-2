import UserLoginForm from "../features/authentication/UserLoginForm";

import styled from "styled-components";

import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center !important;
  gap: 2rem;
  background-color: var(--color-grey-50);
  padding: 2rem;
`;

function UserLogin() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h2">Log in to your account</Heading>
      <UserLoginForm />
    </LoginLayout>
  );
}

export default UserLogin;
