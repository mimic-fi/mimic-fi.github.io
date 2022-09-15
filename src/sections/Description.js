import React from 'react'
import styled from 'styled-components'
import check from '../assets/purple-check.svg'
import line from '../assets/line.svg'

const Description = () => {
  return (
    <DescriptionSection>
      <Container>
        <Line src={line} />
        <Box>
          <h1>
            Preset and custom <br /> 
            DeFi primitives to  <br />
            compose any action
          </h1>
          <div>
            <img src={check} alt="tick" />
            <p>
              Collect assets from <br />
              external addresses
            </p>
          </div>
          <div>
            <img src={check} alt="tick" />
            <p>
              Swap assets on any <br />
              DEX or DEX aggregator
            </p>
          </div>
          <div>
            <img src={check} alt="tick" />
            <p>
              Bridge assets between <br />
              different layers
            </p>
          </div>
          <div>
            <img src={check} alt="tick" />
            <p>
              Allocate assets into a <br />
              DeFi Protocol
            </p>
          </div>
          <div>
            <img src={check} alt="tick" />
            <p>
              Withdraw assets to a<br />specific account
            </p>
          </div>
        </Box>
        <Box>
          <h1>
            Flexible configuration <br />
            to automate actions <br />
            and follow them up
          </h1>
          <div>
            <img src={check} alt="tick" />
            <p>
              Schedule actions with a <br />
              Mimic bot
            </p>
          </div>
          <div>
            <img src={check} alt="tick" />
            <p>
              Delegate execution to a <br />
              third party
            </p>
          </div>
          <div>
            <img src={check} alt="tick" />
            <p>
              Trigger them under certain <br />
              market conditions
            </p>
          </div>
          <div>
            <img src={check} alt="tick" />
            <p>
              Simulate them before
              <br />
              execution
            </p>
          </div>
          <div>
            <img src={check} alt="tick" />
            <p>
              Track them and receive
              <br />
              alerts
            </p>
          </div>
        </Box>
      </Container>
    </DescriptionSection>
  )
}

const DescriptionSection = styled.section`
  background: #191930;
  margin: auto;
  color: white;
  padding: 100px 0 30px 0;
  @media only screen and (max-width: 700px) {
    padding: 60px 0 30px 0;
  }
`

const Line = styled.img`
  position: absolute;
  left: 100px;
  top: -150px;
  z-index: 1;
  @media only screen and (max-width: 997px) {
    display: none;
  }
`

const Container = styled.div`
  max-width: 1056px;
  margin: auto;
  margin-bottom: 100px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 30px;
    line-height: 48px;
    letter-spacing: 1px;
    color: #fcfcfc;
    @media only screen and (max-width: 700px) {
      font-size: 28px;
      line-height: 44px;
      white-space: break-spaces;
      padding: 0 15px;
    }
  }
  p {
    font-family: "Poppins";
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.75px;
    color: #fcfcfc;
    @media only screen and (max-width: 700px) {
      font-size: 17px;
      line-height: 28px;
      margin-bottom: 0;
    }
  }
`

const Box = styled.div`
  margin: 0 20px;
  text-align: left;
  div {
    display: flex;
    img {
      margin-right: 30px;
      @media only screen and (max-width: 700px) {
        margin-left: 15px;
      }
    }
  }
`

export default Description
