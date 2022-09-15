import React from 'react'
import styled from 'styled-components'
import check from '../assets/white-check.svg'
import aave from '../assets/protocols/AAVE.svg'
import balancer from '../assets/protocols/BALANCER.svg'
import curve from '../assets/protocols/CURVE.svg'
import lido from '../assets/protocols/LIDO.svg'
import compound from '../assets/protocols/COMPOUND.svg'

import oneinch from '../assets/protocols/ONEINCH.svg'
import torn from '../assets/protocols/TORN.png'
import uniswap from '../assets/protocols/UNISWAP.png'
import fei from '../assets/protocols/FEI.svg'
import frax from '../assets/protocols/FRAX.svg'
import maker from '../assets/protocols/MAKER.png'
import sushi from '../assets/protocols/SUSHI.svg'
import yearn from '../assets/protocols/YEARN.svg'
import mstable from '../assets/protocols/MSTABLE.svg'
import alchemix from '../assets/protocols/ALCHEMIX.svg'
import convex from '../assets/protocols/CONVEX.png'
import logo from '../assets/contact-logo.svg'

const Features = () => {
  return (
    <FeaturesSection>
      <Logo src={logo} />
      <div className="container">
        <h1><span>Smart Vaults</span> can interact with any DeFi protocol</h1>
        <h2>
          They hold the integration logic with most popular protocols 
          and can scale to access new ones.
        </h2>
        <Container>
          <Box>
            <div>
              <img src={check} alt="tick" />
              <p>Aave, Compound (Lending) </p>
            </div>
            <div>
              <img src={check} alt="tick" />
              <p>Uniswap, Balancer, Curve (AMM)</p>
            </div>
            <div>
              <img src={check} alt="tick" />
              <p>1inch, Paraswap (DEX aggregator)</p>
            </div>
            <div>
              <img src={check} alt="tick" />
              <p>Yearn, Convex Finance (Yield aggregator)</p>
            </div>
            <div>
              <img src={check} alt="tick" />
              <p>And more</p>
            </div>
          </Box>
        </Container>
      </div>
      <DefiProtocols />
    </FeaturesSection>
  )
}

const DefiProtocols = () => {
  return(
    <LogosContainer>
      <Img src={aave} />
      <Img className="set1" src={balancer} />
      <Img className="set3" src={curve} />
      <Img className="set2" src={compound} />

      <Img src={lido} />
      <Img className="set5" src={oneinch} />
      <Img className="set4" src={torn} />
      <Img className="set2" src={uniswap} />

      <Img className="set5" src={fei} />
      <Img className="set3" src={frax} />
      <Img className="set1" src={maker} />

      <Img src={sushi}  className="set5" />
      <Img className="set1" src={yearn} />
      <Img className="set6" src={mstable} />
      <Img className="set4" src={alchemix} />
      <Img className="set5" src={convex} />
    </LogosContainer>
  )

}

const FeaturesSection = styled.section`
  background: linear-gradient(180deg, #191930 2.49%, #202d3a 97.19%);
  margin: auto;
  color: white;
  padding: 150px 0 350px 104px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  position: relative;
  align-items: center;

  @media only screen and (min-width: 1900px) {
    div.container {
      min-width: 773px;
      margin-left: auto;
    }
  }

  @media only screen and (min-width: 370px) and (max-width: 1000px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    padding: 0px 40px 80px 40px;
  }

  @media only screen and (max-width: 370px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    padding: 0px 20px 250px 20px;

  }

  h1 {
    span {
      color: #c072ff;
    }
    @media only screen and (min-width: 600px) {
      max-width: 598px;
    }
    font-family: "Poppins-Bold";
    font-size: 60px;
    line-height: 90px;
    letter-spacing: 1.33075px;
    color: #fcfcfc;
    margin-bottom: 0;
    @media only screen and (max-width: 1000px) {
      font-size: 32px;
      line-height: 44px;
      letter-spacing: 0.9999998807907104px;
      text-align: center;
      margin: auto;
    }
  }
  h2 {
    @media only screen and (min-width: 500px) {
      max-width: 470px;
    }
    font-family: "Poppins";
    font-size: 17px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #fcfcfc;
    @media only screen and (max-width: 1000px) {
      text-align: center;
      margin: auto;
    }
  }
`

const LogosContainer = styled.div`
  max-width: 100%;
  padding-right: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 150px 150px 150px 150px;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    max-width: 100%;
    margin-top: 30px;
  padding-right: 0px;

  grid-template-rows: auto auto auto auto;
  }
`

const Img = styled.img`
  width: 100px;
  filter: grayscale(60%);
  align-self: center;
  @keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}
  animation: floating 4s ease infinite;
  will-change: transform;
  @media only screen and (max-width: 1000px) {
    width: 50px;
  }
  &.set1 {
    animation: floating 11s ease infinite;
  }
  &.set2 {
    animation: floating 12s ease infinite;
  }
  &.set3 {
    animation: floating 9s ease infinite;
  }
  &.set4 {
    animation: floating 10s ease infinite;
    border-radius: 100%;
  }
  &.set5 {
    animation: floating 9s ease infinite;
    border-radius: 100%;
  }
  &.set6 {
    animation: floating 11s ease infinite;
  }
`

const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 70px;
  transform: translate(0%, -50%);
  z-index: 15;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
 
`

const Container = styled.div`
  width: auto;
  margin: auto auto 100px -50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media only screen and (max-width: 1000px) {
    justify-content: space-between;
    margin: auto;
    max-width: 333px;
  }
  h3 {
    font-family: "Poppins-Bold";
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 1px;
    color: #ffffff;
    @media only screen and (max-width: 1000px) {
      font-size: 25px;
      text-align: left;
      margin: 100px 40px 20px 0;
    }
  }
  p {
    font-family: "Poppins";
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.75px;
    color: #fcfcfc;
    @media only screen and (max-width: 1000px) {
      font-size: 17px;
    }
  }
`

const Box = styled.div`
  margin: 0 50px;
  @media only screen and (max-width: 1000px) {
    margin: 0;
  }
  text-align: left;
  div {
    display: flex;
    img {
      margin-right: 30px;
      @media only screen and (max-width: 1000px) {
        margin-right: 10px;
        width: 25px;
      }
    }
  }
`

export default Features
