import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import Promo from "../../public/promo6.avif";
import Promo2 from "../../public/promo4.avif";
import { FaPhone } from "react-icons/fa6";
import { BsShop } from "react-icons/bs";
import { SlLayers } from "react-icons/sl";

import { Link } from "react-router-dom";

const Hero = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;
  overflow: hidden; /* Ensures no overflow */
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 850px) {
    height: auto;
    align-items: stretch;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    height: 50vh;
  }
`;

const Aside = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-tiny);

  @media (max-width: 850px) {
    flex: 100%;
    height: 20rem;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

const Main = styled.div`
  flex: 2; /* The middle column is twice as large */
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: var(--border-radius-sm);

  @media (max-width: 850px) {
    height: auto;
  }

  @media (max-width: 650px) {
    max-width: 100%;
  }
`;

const Detail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 650px) {
    height: 10rem;
  }
`;

const Top = styled.ul`
  height: 50%;
  background-color: var(--color-grey-0);
  width: 100%;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
  justify-content: center;
  color: var(--color-grey-700);
  font-weight: 600;

  & > * {
    display: flex;
    gap: 2rem;
    align-items: center;

    p {
      display: block;
    }
  }
`;
const Bottom = styled.div`
  height: 50%;
  width: 100%;
`;

const Number = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  border: 1px solid var(--color-green-700);
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: var(--color-grey-500);

  &:hover {
    color: var(--color-green-700);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-tiny);

  @media (max-width: 850px) {
    object-fit: auto;
  }
`;

const HeroComponent = () => {
  return (
    <Hero>
      <Aside>
        <Img src={Promo} />
      </Aside>
      <Main>
        <Slider />
      </Main>
      <Detail>
        <Top>
          <div>
            <Container>
              <FaPhone size={20} />
            </Container>
            <Number>
              <p>CALL TO ORDER</p>
              <p>0810-994-5441</p>
            </Number>
          </div>

          <StyledLink>
            <Container>
              <BsShop size={20} />
            </Container>
            <p>Sell on Kasua</p>
          </StyledLink>

          <StyledLink>
            <Container>
              <SlLayers size={20} />
            </Container>
            <p>Best Deals</p>
          </StyledLink>
        </Top>
        <Bottom>
          <Img src={Promo2} />
        </Bottom>
      </Detail>
    </Hero>
  );
};

export default HeroComponent;
