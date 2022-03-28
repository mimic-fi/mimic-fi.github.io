import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import background from "../assets/hero-background.png";
import friends from "../assets/friends.svg";
import professional from "../assets/professional.svg";
import dao from "../assets/dao.svg";
import { ValueLocked } from "../components/ValueLocked";

const Hero = () => (
  <HeroSection>
    <Navbar />
    <Container>
      <h1>
        Trustless treasury management made simple <span>and secure!</span>
      </h1>
      <Counter>
        <Tvl>
          <ValueLocked />
        </Tvl>
        <p> of total value locked across 2 networks and over 7 strategies.</p>
      </Counter>
      <h2>
        Mimic is your one-stop platform to allocate DAOs treasury assets on
        several DeFi strategies while saving time & money.
      </h2>
      <Icons>
        <Box>
          <img src={dao} />
          <p>Transparent</p>
        </Box>

        <Box>
          <img src={professional} />
          <p>Non-custodial</p>
        </Box>
        <Box>
          <img src={friends} />
          <p>Trustless</p>
        </Box>
      </Icons>
    </Container>
  </HeroSection>
);

const HeroSection = styled.section`
  background: url(${background}) top no-repeat;
  margin: auto;
  color: white;
  text-align: center;
  padding: 76px 0 400px 0;
  background-size: cover;
  background-position: bottom;
  @media only screen and (min-width: 2000px) {
    min-height: 1600px;
  }

  @media only screen and (max-width: 700px) {
    min-height: auto;
    width: 100%;
    padding: 35px 0 230px 0;
  }
`;

const Container = styled.div`
  padding: 104px 104px 0 104px;
  max-width: 874px;
  @media only screen and (max-width: 370px) {
    padding: 40px 20px 0 20px;
  }
  @media only screen and (min-width: 370px) and (max-width: 7000px) {
    padding: 0px 40px 0 40px;
  }
  @media only screen and (min-width: 2000px) {
    margin: auto;
  }
  text-align: left;
  h1 {
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 80px;
    line-height: 95px;
    margin: 50px 0px;
    @media only screen and (max-width: 700px) {
      font-size: 33px;
      line-height: 44px;
      white-space: break-spaces;
      margin: 20px 0px;
    }
    letter-spacing: 1.33075px;
    color: #fcfcfc;
    span {
      color: #a524ff;
    }
  }
  h2 {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    width: 560px;
    max-width: 90vw;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    @media only screen and (max-width: 700px) {
      font-size: 17px;
      line-height: 28px;
    }
    letter-spacing: 0.75px;
    color: #fcfcfc;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-left: -20px;
  @media only screen and (max-width: 700px) {
    margin-left: -10px;
  }
  margin-top: 20px;
`;

const Box = styled.div`
  text-align: center;
  padding: 0 20px;
  img {
    width: 50px;
  }
  @media only screen and (max-width: 700px) {
    padding: 0 10px;
    img {
      width: 30px;
    }
  }

  p {
    font-family: "Poppins-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.75px;
    color: #fcfcfc;
    max-width: 194px;
    text-align: center;
    margin: 24px auto;

    @media only screen and (max-width: 700px) {
      font-family: "Poppins";
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 0.75px;
      max-width: 146px;
    }
  }
`;

const Counter = styled.div`
  text-align: center;
  background-color: #191930;
  border-radius: 5px;
  padding: 10px 20px;
  max-width: 774px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;

    margin-bottom: 20px;
    padding: 30px 20px;
  }
  p {
    font-family: "Poppins-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.75px;
    color: #fcfcfc;
    text-align: left;

    @media only screen and (max-width: 700px) {
      font-family: "Poppins";
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.75px;
      text-align: center;
    }
  }
`;

const Tvl = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: 62px;
  width: 70%;
  @media only screen and (max-width: 700px) {
    font-family: "Poppins";
    font-size: 35px;
    line-height: 28px;
    letter-spacing: 0.75px;
    display: contents;
  }
`;

export default Hero;
