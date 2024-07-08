import styled from "styled-components";
import HeroImg from "../../public/HeroImg.png";

const StyledHero = styled.div`
  background: linear-gradient(to right, #05371a, #010101);
  border-radius: 2.4rem;
  padding: 5rem 6rem;
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    padding: 10rem 3rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 89.6px;

  @media (max-width: 1000px) {
    font-size: 5rem;
  }

  @media (max-width: 500px) {
    font-size: 3.8rem;
    line-height: 56px;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <H1>Discover the HOTTEST Sneakers Today </H1>
      <div>
        <img src={HeroImg} />
      </div>
    </StyledHero>
  );
};

export default Hero;
