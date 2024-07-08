import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const StyledFooter = styled.footer`
  font-weight: 500;

  p {
    margin-top: 4rem;
    font-size: 1.4rem;
    line-height: 26px;
    text-align: center;
    color: #00000099;
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
    color: #000;

    @media (max-width: 500px) {
      margin-bottom: 0;
    }
  }

  li {
    font-size: 1.4rem;
    color: #00000099;
    line-height: 30px;

    &:hover {
      opacity: 0.8;
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
          <img src="../../public/Logo.png" />
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
              <Link>Mobile No: +234123-456-890</Link>
            </li>
            <li>
              <Link>Office No: +234123-456-890</Link>
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
