import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
// import { useLogin } from "./useLogin";
// import SpinnerMini from "../../ui/SpinnerMini";

function AdminLoginForm() {
  const [email, setEmail] = useState("gepap87854@foraro.com");
  const [password, setPassword] = useState("123456789");

  // const { login, isLoading } = useLogin();

  function handleSubmit(event) {
    event?.preventDefault();

    if (!email || !password) return;

    // login(
    //   { email, password },
    //   {
    //     onSettled: () => {
    //       setEmail("");
    //       setPassword("");
    //     },
    //   },
    // );
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
          // disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="medium" variation="primary">
          Login
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default AdminLoginForm;
