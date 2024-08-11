import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Logo from "./Logo";

const StyledFooter = styled.footer`
  font-weight: 500;
  margin: 0 auto;
  max-width: 144rem;

  padding: 2rem 8rem;
  background-color: var(--color-grey-50);

  @media (max-width: 1000px) {
    padding: 1rem 4rem;
    max-width: 100vw;
  }

  @media (max-width: 500px) {
    padding: 1rem 2rem;
    width: 100vw;
  }

  p {
    margin-top: 4rem;
    font-size: 1.4rem;
    line-height: 26px;
    text-align: center;
    color: var(--color-grey-500);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4rem;

  h2 {
    font-size: 1.8rem;
    line-height: 22.68px;
    margin-bottom: 3rem;
    color: var(--color-grey-900);

    @media (max-width: 500px) {
      margin-bottom: 0;
    }
  }

  li {
    font-size: 1.4rem;
    color: var(--color-grey-500);
    line-height: 30px;

    &:hover {
      color: var(--color-grey-900);
    }

    p {
      font-size: 1.4rem;
      color: var(--color-grey-500);
      line-height: 30px;
      margin-top: 0rem;
    }
  }

  .social {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  & .imgContainer {
    @media (max-width: 500px) {
      flex: 100%;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="imgContainer">
          <Logo />
        </div>

        <div>
          <h2>Services</h2>
          <ul>
            <li>
              <Link>Order</Link>
            </li>
            <li>
              <Link>Carts</Link>
            </li>
            <li>
              <Link>Sales</Link>
            </li>
            <li>
              <Link>E-commerce</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Partners</h2>
          <ul>
            <li>
              <Link>Companies</Link>
            </li>
            <li>
              <Link>Agencies</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Contact Us</h2>
          <ul>
            <li>
              <p>Mobile No: +234123-456-890</p>
            </li>
            <li>
              <p>Office No: +234123-456-890</p>
            </li>
          </ul>
        </div>

        <div>
          <h2>Social</h2>
          <ul className="social">
            <li>
              <Link>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link>
                <BiLogoInstagramAlt />
              </Link>
            </li>
            <li>
              <Link>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link>
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <p>© 2024 Timbo. All rights reserved. </p>
    </StyledFooter>
  );
};

export default Footer;
