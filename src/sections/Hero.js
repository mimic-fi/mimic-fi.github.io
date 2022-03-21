import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import background from '../assets/hero-background.png'
import friends from '../assets/friends.svg'
import professional from '../assets/professional.svg'
import dao from '../assets/dao.svg'

const Hero = () => (
  <HeroSection>
    <Navbar/>
    <Container>
      <h1>
        Managing 3rd-party investments made simple <span>and secure!</span>
      </h1>
      <h2>
        Mimic is your one-stop platform to manage multiple accounts and
        portfolios at once.
      </h2>
      <Icons>
        <Box>
          <img src={friends} />
          <p>Friends & Family</p>
        </Box>
        <Box>
          <img src={professional} />
          <p>Professional brokers</p>
        </Box>
        <Box>
          <img src={dao} />
          <p>DAO Treasuries</p>
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
    padding: 76px 0 230px 0;
  }
`

const Container = styled.div`
  padding: 104px 104px 0 104px;
  max-width: 874px;
  @media only screen and (max-width: 370px) {
    padding: 40px 20px 0 20px;
  }
  @media only screen and (min-width: 370px) and (max-width: 7000px) {
    padding: 40px 40px 0 40px;
  }
  @media only screen and (min-width: 2000px) {
    margin: auto;
  }
  text-align: left;
  h1 {
    font-family: 'Poppins-Bold';
    font-weight: bold;
    font-size: 80px;
    line-height: 117px;
    @media only screen and (max-width: 700px) {
      font-size: 33px;
      line-height: 44px;
      white-space: break-spaces;
    }
    letter-spacing: 1.33075px;
    color: #fcfcfc;
    span {
      color: #a524ff;
    }
  }
  h2 {
    font-family: 'Poppins-SemiBold';
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
`

const Icons = styled.div`
  display: flex;
  margin-left: -20px;
  @media only screen and (max-width: 700px) {
    margin-left: -10px;
  }
  margin-top: 50px;
`
const Box = styled.div`
  text-align: center;
  padding: 0 20px;
  @media only screen and (max-width: 700px) {
    padding: 0 10px;
    img {
      width: 30px;
    }
  }

  p {
    font-family: 'Poppins-Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-align: centerå;
    letter-spacing: 0.75px;
    color: #fcfcfc;
    max-width: 194px;
    text-align: center;
    margin: 24px auto;

    @media only screen and (max-width: 700px) {
      font-family: 'Poppins';
      font-size: 15px;
      line-height: 28px;
      letter-spacing: 0.75px;
      max-width: 146px;
    }
  }
`

export default Hero
