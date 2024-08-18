import { useState } from "react";

import styled from "styled-components";

const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  svg {
    margin-left: -3rem;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Password = ({ children, setShowPassword, showPassword }) => {
  return (
    <PasswordContainer>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="-ml-10 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {!showPassword ? (
          <>
            <path
              d="M12 5.25C4.5 5.25 1.5 12 1.5 12C1.5 12 4.5 18.75 12 18.75C19.5 18.75 22.5 12 22.5 12C22.5 12 19.5 5.25 12 5.25Z"
              stroke="#98A2B3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
              stroke="#98A2B3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        ) : (
          <path
            stroke="#98A2B3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 14c-.5-.6-.9-1.3-1-2 0-1 4-6 9-6m7.6 3.8A5 5 0 0 1 21 12c0 1-3 6-9 6h-1m-6 1L19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        )}
      </svg>
    </PasswordContainer>
  );
};

export default Password;
