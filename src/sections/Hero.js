import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import background from '../assets/hero-background.png'
import trust from '../assets/trust.svg'
import transparency from '../assets/transparency.svg'
import custodial from '../assets/private.svg'

const Hero = () => (
  <HeroSection>
    <Navbar />
    <Container>
      <h1>
        <span>Automating</span> how to interact with <span>DeFi</span>
      </h1>
      <h2>
        Mimic simplifies the interactions with different DeFi protocols by
        automating them into simple actions.
      </h2>
      <Icons>
        <Box>
          <img src={trust} alt="trustless" />
          <p>Trustless</p>
        </Box>
        <Box>
          <img src={custodial} alt="non-custodial" />
          <p>Non-custodial</p>
        </Box>
        <Box>
          <img src={transparency} alt="transparency" />
          <p>Transparent</p>
        </Box>
      </Icons>
    </Container>
  </HeroSection>
)

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
`

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
    max-width: 85vw;
    font-weight: 600;
    font-size: 25px;
    line-height: 32px;
    @media only screen and (max-width: 700px) {
      font-size: 17px;
      line-height: 28px;
    }
    letter-spacing: 0.75px;
    color: #fcfcfc;
  }
`

const Icons = styled.div`
  display: flex;
  margin-left: -20px;
  @media only screen and (max-width: 700px) {
    margin-left: -10px;
  }
  margin-top: 100px;
`

const Box = styled.div`
  text-align: center;
  padding: 0 20px;
  img {
    width: 50px;
  }
  @media only screen and (max-width: 700px) {
    padding: 0 10px;
    img {
      width: 50px;
    }
  }

  p {
    font-family: "Poppins-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
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
`

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
`

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
`

export default Hero
