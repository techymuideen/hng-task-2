import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import styled from "styled-components";
import { useRetryOtp, useVerifyOtp } from "./useVerifyOtp";
import { useUser } from "./useUser";
import SpinnerMini from "../../ui/SpinnerMini";

const Form = styled.form`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 100%;
  margin: 0 auto;

  padding: 2.4rem 4rem;

  @media (max-width: 500px) {
    padding: 2.4rem 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const OtpForm = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds countdown
  const [canResend, setCanResend] = useState(false); // Disable button initially
  const [isError, setISError] = useState(false);

  const { verifyOtp, isLoading } = useVerifyOtp();
  const { retryOtp, isLoading: isRetrying } = useRetryOtp();

  useEffect(() => {
    // If there's no time left, stop the timer
    if (timeLeft === 0) {
      setCanResend(true); // Enable button after 60 seconds
      return;
    }

    // Set up the interval to count down
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1); // Decrement time left
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSubmit = () => {
    const email = localStorage.getItem("email");
    const token = otp;
    console.log(token);
    verifyOtp({ email, token });
  };

  const refetchOTP = () => {
    const email = localStorage.getItem("email");

    retryOtp({ email });
    // Reset the countdown
    setTimeLeft(60);
    setCanResend(false);
  };

  return (
    <Form>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="otp-box"
        inputStyle={`otp-item ${isError ? "error" : ""}`}
        hasErrored={true}
        isDisabled={true}
        inputType="number"
      />
      {!canResend && (
        <Heading
          as="h4"
          position="left"
        >{`Try again in in ${timeLeft}s`}</Heading>
      )}
      <ButtonContainer>
        <Button type="button" disabled={otp.length < 6} onClick={handleSubmit}>
          {isLoading ? <SpinnerMini /> : "Submit"}
        </Button>
        <Button type="button" onClick={refetchOTP} disabled={!canResend}>
          {isRetrying ? <SpinnerMini /> : "Resend OTP"}
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default OtpForm;
