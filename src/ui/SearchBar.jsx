import { IoIosSearch } from "react-icons/io";

import Button from "./Button";

import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;

  @media (max-width: 850px) {
    display: none;
  }
`;

const InputContainer = styled.form`
  border: 2px solid var(--color-grey-400);
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0.3rem 1.5rem;
  border-radius: var(--border-radius-sm);

  margin-left: auto;

  & label {
    display: flex;
    align-items: center;
  }

  @media (max-width: 700px) {
    flex: 1;
    padding: 1rem 1.5rem;
  }
`;

const Input = styled.input`
  padding: 0 1rem;
  border: none;
  background-color: transparent;
  flex: 1;
  outline: none;

  &::placeholder {
    color: var(--color-grey-700) !important;
  }

  &:focus {
    outline: none;
  }
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <InputContainer>
        <label htmlFor="search">
          <IoIosSearch size="20px" />
        </label>
        <Input id="search" placeholder="Search by Product, Manufacturer..." />
      </InputContainer>
      <Button size="large">Search</Button>
    </StyledSearchBar>
  );
};

export default SearchBar;
