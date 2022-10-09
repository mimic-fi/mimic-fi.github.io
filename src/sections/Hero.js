import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { H1, BodyL, Button, Container } from '../styles/texts'

const Hero = () => (
  <HeroSection>
    <Container>
      <Box>
        <H1>
          Interact with DeFi  in a simpler, safer way through Smart Vaults
        </H1>
        <BodyL>
          Our platform helps you grow your business by transforming manual work
          into automated actions.
        </BodyL>
        <Button
          href="https://calendly.com/mimicfi/30min?month=2022-10"
          target="_blank"
        >
          Request a demo
        </Button>
      </Box>
    </Container>
  </HeroSection>
)

const HeroSection = styled.section`
  background: #121418;
  height: auto;
  min-height: 700px;
  padding-top: 80px;
  @media only screen and (max-width: 700px) {
    min-height: 650px;
    padding: 60px 0 0 0;
  }
`

const Box = styled.div`
  max-width: 780px;
  margin: auto;
  padding: 70px 0 70px 0;
  p {
    max-width: 600px;
    margin-top: 0px;
    margin-bottom: 30px;
  }
`

export default Hero
