import SignupForm from "../features/authentication/SignupForm";

import styled from "styled-components";

import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const SignupLayout = styled.main`
  min-height: 100vh;
  max-width: 80rem;
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
    <SignupLayout>
      <Logo />
      <Heading as="h2">Create an account</Heading>
      <SignupForm role="customer" />
    </SignupLayout>
  );
}

export default UserLogin;
