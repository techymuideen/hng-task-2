import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  &:active {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }

  ${({ active }) =>
    active === "true" &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:disabled {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

const Filter = ({ options, filteredField }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filteredField) || options.at(0).value;
  const currentPage = searchParams.get("page");

  const handleClick = (value) => {
    searchParams.set(filteredField, value);

    if (currentPage) searchParams.set("page", 1);

    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          $active={currentFilter === option.value ? "true" : undefined}
          disabled={currentFilter === option.value}
        >
          {option.name}
        </FilterButton>
      ))}
    </StyledFilter>
  );
};

export default Filter;
