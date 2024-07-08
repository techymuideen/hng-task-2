import styled from "styled-components";
import Button from "../products-ui/Button";

import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdFilterList } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const StyledProductsControl = styled.form`
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  color: #000;

  gap: 1.5rem;
  row-gap: 2.5rem;

  @media (max-width: 700px) {
    flex-wrap: nowrap;
  }
`;

const InputContainer = styled.div`
  border: 0.5px solid #00000033;
  display: flex;
  align-items: center;
  padding: 1rem 2.4rem;
  border-radius: 1.2rem;

  @media (max-width: 700px) {
    flex: 1;
    padding: 1rem 1.5rem;

    input {
      width: 100%;
    }
  }
`;

const Input = styled.input`
  padding: 0 1rem;
  border: none;
  background-color: transparent;
`;

const StyledButton = styled(NavLink)`
  border: none;
  background-color: transparent;
`;

const Selects = styled.div`
  display: flex;
  margin-left: auto;
  gap: 1.6rem;

  @media (max-width: 700px) {
    display: none;
  }
`;

const RangeContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Range = styled.input`
  height: 1.8rem;
  width: 8rem;
  border: none;

  accent-color: #008659;
`;

const ProductsControl = () => {
  const [rangeValue, setRangeValue] = useState(100);

  const updateValueHandler = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <StyledProductsControl>
      <InputContainer>
        <label htmlFor="search">
          <IoIosSearch color="#00000060" size="14px" />
        </label>
        <Input id="search" placeholder="Search by Product, Manufacturer..." />
        <StyledButton>
          <MdOutlineKeyboardCommandKey color="#00000060" size="14px" />
        </StyledButton>
      </InputContainer>
      <Button
        text="Filter"
        icon={<MdFilterList color="#00000060" size="18px" />}
      />
      <Selects>
        <Button
          text="Categories"
          icon={<MdOutlineKeyboardArrowDown color="#00000060" size={18} />}
        />
        <Button
          text="Manufacturers"
          icon={<MdOutlineKeyboardArrowDown color="#00000060" size={18} />}
        />
        <Button
          text="Color"
          icon={<MdOutlineKeyboardArrowDown color="#00000060" size={18} />}
        />
      </Selects>
      <RangeContainer>
        <Button text="Max. Price" />
        <Range
          type="range"
          id="rangeInput"
          name="rangeInput"
          min="0"
          max="100"
          step="1"
          value={rangeValue}
          onChange={updateValueHandler}
        />

        <Button text="Min. Price" />
      </RangeContainer>
    </StyledProductsControl>
  );
};

export default ProductsControl;
