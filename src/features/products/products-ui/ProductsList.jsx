import styled from "styled-components";

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 1rem 0;
`;
export default ProductsList;
