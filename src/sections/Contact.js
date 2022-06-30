import React from "react";
import styled from "styled-components";
import getInTouch from "../assets/get-in-touch-mobile.png";
import background from "../assets/contact-background.png";
import backgroundMobile from "../assets/contact-background-mobile.png";
import world from "../assets/world.svg";
import mail from "../assets/mail.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import logo from "../assets/contact-logo.svg";
import logoMobile from "../assets/mimic-logo-mobile.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <>
      <ContactSection compact={width <= breakpoint}>
        <Container>
          <h1>
            We have a <span>lite version</span> up and running
          </h1>
          <h2>
            This version automates asset allocation by providing actions to
            collect, swap and withdraw before joining or exiting those DeFi
            protocols. You can trigger those actions by youself or delegate
            their execution to a third party.
          </h2>
          <h3>Give it a try!</h3>
          <Buttons>
            <Button>Mainnet</Button>
            <Button>Polygon</Button>
          </Buttons>
        </Container>
        {!(width < breakpoint) && (
          <ContactBox>
            <Logo src={logo} />
            <h1>Get in touch!</h1>
            <div>
              <img src={world} alt="website" />
              <a target="_blank" href="https://mimic.fi" rel="noreferrer">
                mimic.fi
              </a>
            </div>
            <div>
              <img src={mail} alt="mail" />
              <a target="_blank" href="mailto:hello@mimic.fi" rel="noreferrer">
                hello@mimic.fi
              </a>
            </div>
            <div>
              <img src={twitter} alt="twitter" />
              <a
                target="_blank"
                href="https://twitter.com/mimicfi"
                rel="noreferrer"
              >
                @mimicfi
              </a>
            </div>
            <div>
              <img className="github" src={github} alt="github" />
              <a
                target="_blank"
                href="https://github.com/mimic-fi"
                rel="noreferrer"
              >
                mimic-fi
              </a>
            </div>
          </ContactBox>
        )}
      </ContactSection>
      {width < breakpoint && (
        <MobileContact>
          <img className="logo" src={logoMobile} alt="logo" />
          <br />
          <h1>
            Visit us{" "}
            <a target="_blank" href="https://mimic.fi" rel="noreferrer">
              mimic.fi
            </a>
          </h1>
          <p>Get in touch</p>
          <a
            className="mail"
            target="_blank"
            href="mailto:mimicfi@protonmail.com"
            rel="noreferrer"
          >
            mimicfi@protonmail.com
          </a>
          <div>
            <img src={twitter} alt="twitter" />
            <a
              className="twitter"
              target="_blank"
              href="https://twitter.com/mimicfi"
              rel="noreferrer"
            >
              @mimicfi
            </a>
          </div>
          <div className="github">
            <img src={github} alt="github" />
            <a
              className="twitter"
              target="_blank"
              href="https://github.com/mimic-fi"
              rel="noreferrer"
            >
              mimic-fi
            </a>
          </div>
        </MobileContact>
      )}
      <Footer>
        <Link to="/terms">Terms</Link>
        2022 MIMIC. ALL RIGHTS RESERVED.
      </Footer>
    </>
  );
};
const ContactSection = styled.section`
  background: url(${(p) => (p.compact ? backgroundMobile : background)});
  margin: auto;
  color: white;
  text-align: center;
  padding: 76px 0 100px 0;
  @media only screen and (max-width: 700px) {
    padding: 76px 0 400px 0;
  }
  background-size: cover;
  background-position: top;
  margin-top: ${(p) => (p.compact ? "-230px" : "-400px")};
  padding-top: ${(p) => (p.compact ? "110px" : "600px")};
  position: relative;
  z-index: 3;
  @media only screen and (min-width: 2000px) {
    padding-top: 1500px;
  }
  .github {
    width: 45px;
  }
`;
const Footer = styled.div`
  background-color: #a445e9;
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: flex-end;
  a {
    text-transform: uppercase;
    font-weight: 500;
    padding: 0px 20px;
  }
`;

const Logo = styled.img`
  max-width: 120px;
`;
const MobileContact = styled.section`
  background: url(${getInTouch}) top no-repeat;
  color: white;
  height: 500px;
  z-index: 40;
  padding: 207px 30px 100px 30px;
  position: relative;
  margin-top: -400px;
  background-size: cover;
  text-align: center;

  img.logo {
    margin: 25px auto;
    display: block;
  }

  h1 {
    font-family: "Poppins";
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0.9999998807907104px;
    text-align: center;
    display: inline;

    a {
      font-family: "Poppins-Bold";
      font-size: 32px;
      line-height: 44px;
      letter-spacing: 0.99px;
      text-align: center;
    }
  }
  p {
    font-family: "Poppins-Bold";
    margin-bottom: 0;
  }
  p,
  a.mail,
  a.twitter {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.99px;
    text-align: center;
  }
  a.mail,
  a.twitter {
    font-family: "Poppins";
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    &.github {
      margin-top: 18px;
    }
    img {
      margin-right: 10px;
      width: 35px;
    }
  }
`;

const Container = styled.div`
  padding: 104px 104px 0 104px;
  @media only screen and (min-width: 900px) {
    width: 874px;
  }
  @media only screen and (max-width: 700px) {
    padding: 40px 40px 0 40px;
  }
  @media only screen and (min-width: 2000px) {
    margin: auto;
    max-width: 1500px;
  }
  text-align: left;
  h3 {
    font-family: "Poppins-Bold";
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 0.99;
    text-align: left;
    margin-bottom: 0;
    @media only screen and (max-width: 700px) {
      font-size: 20px;
      line-height: 32px;
    }
  }
  h1 {
    margin-top: 20px;
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 80px;
    line-height: 90px;
    letter-spacing: 1.33075px;
    color: #fcfcfc;
    span {
      color: #4a006a;
    }
    @media only screen and (max-width: 700px) {
      font-size: 32px;
      line-height: 44px;
      letter-spacing: 0.99px;
    }
    @media only screen and (min-width: 900px) {
      max-width: 873px;
    }
  }
  h2 {
    font-family: "Poppins";
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 1px;
    color: #fcfcfc;
    @media only screen and (max-width: 700px) {
      font-size: 15px;
      line-height: 28px;
      letter-spacing: 0.75px;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-left: -5px;
  margin-top: 50px;
  flex-wrap: wrap;
`;
const Button = styled.button`
  text-align: center;
  padding: 0 20px;
  background: #4a006a;
  border-radius: 100px;
  border: 3px solid #4a006a;
  box-sizing: border-box;
  font-family: "Poppins";
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 1px;
  color: #fcfcfc;
  white-space: nowrap;
  text-align: center;
  padding: 26px 40px;
  margin: 5px;
  @media only screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 28px;
    letter-spacing: 0.75px;
    padding: 8px 9px;
  }

  &.transparent {
    background: transparent;
    color: #4a006a;
  }
`;

const ContactBox = styled.div`
  padding: 104px 104px 0 104px;
  @media only screen and (min-width: 2000px) {
    margin: auto;
    max-width: 1500px;
  }

  @media only screen and (min-width: 700px) {
    width: 666px;
  }
  @media only screen and (max-width: 700px) {
    padding: 40px 40px 0 40px;
  }
  text-align: left;
  margin: auto;
  margin-right: 0;
  div {
    display: flex;
    img {
      margin-right: 30px;
    }
  }
  h1 {
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 64px;
    line-height: 88px;
    letter-spacing: 1px;
    color: #ffffff;
    margin: 40px 0;
    @media only screen and (max-width: 700px) {
      font-size: 32px;
      line-height: 44px;
      letter-spacing: 0.9999998807907104px;
    }
  }
  a {
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: 1px;
    color: #fcfcfc;
    margin: 20px 0;
    @media only screen and (max-width: 700px) {
      font-size: 17px;
      line-height: 28px;
      letter-spacing: 0.75px;
    }
  }
`;

export default Contact;
