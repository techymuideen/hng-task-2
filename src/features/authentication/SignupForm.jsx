import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import SpinnerMini from "../../ui/SpinnerMini";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useState } from "react";
import Password from "../../ui/Password";
import Checkbox from "../../ui/Checkbox";
import Heading from "../../ui/Heading";
import { Link } from "react-router-dom";
import Row from "../../ui/Row";

// Email regex: /\S+@\S+\.\S+/

const SignupForm = ({ role }) => {
  const [countryid, setCountryid] = useState(0);
  const [country, setCountry] = useState();
  const [stateid, setStateid] = useState(0);
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [acceptPolicy, setAcceptPolicy] = useState();
  const { signup, isLoading } = useSignup();
  const { register, formState, handleSubmit, getValues, reset } = useForm();
  const { errors } = formState;

  const submitHandler = ({ fullName, email, password }) => {
    const role = "customer";
    if (role && country && state && fullName && email && password) {
      signup(
        { fullName, email, password, role, country, state, city },
        {
          onSettled: () => reset(),
        },
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Country"
        error={!country && isTouched ? "Please select your country" : ""}
      >
        <CountrySelect
          onChange={(e) => {
            setCountryid(e.id);
            setCountry(e.name);
          }}
          placeHolder="Select Country"
          inputClassName="inputClassName"
          containerClassName="containerClassName"
        />
      </FormRow>

      <FormRow
        label="State"
        error={!state && isTouched ? "Please select your state" : ""}
      >
        <StateSelect
          countryid={countryid}
          onChange={(e) => {
            setStateid(e.id);
            setState(e.name);
          }}
          placeHolder="Select State"
          inputClassName="inputClassName"
          containerClassName="containerClassName"
          disabled={!countryid}
        />
      </FormRow>

      <FormRow
        label="City"
        error={!city && isTouched ? "Please select your city" : ""}
      >
        <CitySelect
          countryid={countryid}
          stateid={stateid}
          onChange={(e) => {
            setCity(e.name);
          }}
          placeHolder="Select City"
          inputClassName="inputClassName"
          containerClassName="containerClassName"
          disabled={!stateid}
        />
      </FormRow>

      <FormRow
        label="Password (min 6 characters)"
        error={errors?.password?.message}
      >
        <Password setShowPassword={setShowPassword} showPassword={showPassword}>
          <Input
            type={`${showPassword ? "text" : "password"}`}
            id="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password needs a minimum of 6 character",
              },
            })}
          />
        </Password>
      </FormRow>

      <FormRow
        type="password"
        label="Repeat password"
        error={errors?.passwordConfirm?.message}
      >
        <Password
          setShowPassword={setShowPassword2}
          showPassword={showPassword2}
        >
          <Input
            type={`${showPassword2 ? "text" : "password"}`}
            id="passwordConfirm"
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </Password>
      </FormRow>

      <Row>
        <Checkbox
          onChange={() => setAcceptPolicy(!acceptPolicy)}
          checked={acceptPolicy}
          id="privacy"
        >
          I accept <Link>Terms of use</Link> & <Link>Privacy policy</Link>
        </Checkbox>
        <Button
          disabled={isLoading || !acceptPolicy}
          onClick={() => setIsTouched(true)}
        >
          {isLoading ? <SpinnerMini /> : "Create new user"}
        </Button>
        <Heading as="h4">
          Already have an account? <Link to="/login">Login</Link>
        </Heading>
      </Row>
    </Form>
  );
};

export default SignupForm;
