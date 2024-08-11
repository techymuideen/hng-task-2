import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    border-radius: 1.2rem;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1rem 3.5rem;
    font-weight: 500;
    border-radius: 1.2rem;
  `,
  large: css`
    font-size: 2rem;
    padding: 0.2rem 2rem;
    font-weight: 500;
    box-shadow: none;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-50);
    background-color: var(--color-grey-700);

    &:hover {
      color: var(--color-grey-100);
      opacity: 0.7;
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  box-shadow: var(--shadow-sm);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]};
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
