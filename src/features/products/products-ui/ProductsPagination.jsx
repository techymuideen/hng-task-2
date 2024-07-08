import styled from "styled-components";
import Button from "./Button";

import { TbSquareChevronsLeft } from "react-icons/tb";
import { TbSquareChevronsRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    display: none;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #00000099;

  span {
    color: #000;
  }
`;

const SeeMore = styled(Link)`
  margin-left: auto;
  color: #00000099;

  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

const ProductsPagination = () => {
  return (
    <>
      <StyledPagination>
        <Text>
          Showing <span>1</span> to <span>6</span> of <span>120</span> Products
        </Text>
        <BtnContainer>
          <Button icon={<TbSquareChevronsLeft />} />
          <Button text="1" />
          <Button text="2" />
          <Button text="..." />
          <Button text="24" />
          <Button icon={<TbSquareChevronsRight />} />
        </BtnContainer>
      </StyledPagination>
      <SeeMore>See more</SeeMore>
    </>
  );
};

export default ProductsPagination;
