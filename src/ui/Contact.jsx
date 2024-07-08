import styled from "styled-components";

const StyledContact = styled.div`
  height: 60rem;
  width: 100%;
  position: relative;
  padding: 5rem;

  @media (max-width: 1000px) {
    padding: 5rem 0rem;
  }

  @media (max-width: 700px) {
    padding: 0rem;
    height: 100%;
  }

  img {
    height: 80%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -10;

    @media (max-width: 700px) {
      flex-direction: column-reverse;
      height: 50%;
    }
  }

  & .second-img {
    z-index: -10;
    width: 50rem;
    opacity: 0.1;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
`;

const Container = styled.div`
  display: flex;
  gap: 8rem;
  padding-top: 5rem;
  height: 50rem;
  align-items: flex-end;
  color: #fff;

  @media (max-width: 1000px) {
    padding: 5rem 2rem;
    gap: 3rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    height: 100%;
  }

  & .text-container {
    flex: 50%;
    margin-bottom: 8rem;

    @media (max-width: 700px) {
      margin-bottom: 0rem;
      width: 80%;
      align-self: flex-start;
    }

    h2 {
      font-size: 4rem;
      font-weight: 700;

      @media (max-width: 500px) {
        font-size: 2.4rem;
      }
    }

    p {
      font-size: 1.8rem;
      font-weight: 400;

      @media (max-width: 500px) {
        font-size: 1.2rem;
      }
    }
  }

  & form {
    background-color: #fff;
    flex: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem;
    border-radius: 2rem;
    z-index: 5;
    color: #000;
    font-size: 1.6rem;

    box-shadow: 0px 80.6px 105.7px 0px #3333331a;

    @media (max-width: 1000px) {
      padding: 4rem 2rem;
    }

    @media (max-width: 700px) {
      flex: 100%;
      align-self: center;
      width: 80%;
    }

    @media (max-width: 500px) {
      flex: 100%;
      align-self: center;
      width: 100%;
      margin-bottom: -2rem;
    }
  }

  & input,
  textarea {
    border-radius: 5px;
    padding: 1rem;
    border: 1.5px solid #0a142f;
  }

  & textarea {
    height: 16.5rem;
    resize: none;
  }

  button {
    font-size: 1.4rem;
    font-weight: 400;
    padding: 0.7rem 1rem;
    border: none;
    color: #fff;
    border-radius: 10px;
    background: linear-gradient(180deg, #269255 0%, #2d4c74 100%);
    align-self: flex-start;

    &:hover {
    opacity: 0.8;
  }
  }
`;

const Contact = () => {
  return (
    <StyledContact>
      <div className="content">
        <img src="../../public/Rectangle 339.png" />
        <Container>
          <img className="second-img" src="../../public/Vector.png" />
          <div className="text-container">
            <h2>Contact US</h2>
            <p>
              If you would like additional details or further information,
              please don&apos;t hesitate to reach out to us. Our team is always
              here to assist you with any questions or concerns you may have.
            </p>
          </div>

          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
            <input type="number" placeholder="Phone No" />
            <textarea placeholder="Message" />

            <button>Send Message</button>
          </form>
        </Container>
      </div>
    </StyledContact>
  );
};

export default Contact;
