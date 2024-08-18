import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import Password from "../../ui/Password";
import Heading from "../../ui/Heading";
import { Link } from "react-router-dom";

function AdminLoginForm() {
  const [email, setEmail] = useState("techymuideen@gmail.com");
  const [password, setPassword] = useState("Testing");
  const [showPassword, setShowPassword] = useState(false);

  const { login, isLoading } = useLogin();

  function handleSubmit(event) {
    event?.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password (min 6 characters)">
        <Password setShowPassword={setShowPassword} showPassword={showPassword}>
          <Input
            type={`${showPassword ? "text" : "password"}`}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </Password>
      </FormRowVertical>

      <FormRowVertical>
        <Button size="medium" $variation="primary" disabled={isLoading}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>

        <Heading as="h4">
          You are new here? <Link to="/signup">Sign up for free</Link>
        </Heading>
      </FormRowVertical>
    </Form>
  );
}

export default AdminLoginForm;
