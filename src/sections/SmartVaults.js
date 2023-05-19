import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import smartVaults from '../assets/smartvaults.svg'
import smartVaultsMobile from '../assets/smartVaultsMobile.svg'
import { H2, BodyL, Container } from '../styles/texts'

const SmartVaults = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth), {passive: true})
  }, [])
  const medium = 700

  return (
    <SmartVaultsSection>
      <SmartVaultsContainer>
        {width >= medium && (
          <Parallax speed={-13}>
            <img src={smartVaults} alt="smart vaults" />
          </Parallax>
        )}
        <Box>
          <Parallax speed={10}>
            <H2>
              Smart Vaults allow you to automate <br /> everything you need
              through customizable actions
            </H2>
          </Parallax>
          <Parallax speed={width >= medium ? 5 : 10}>
            <BodyL>
              Each action is composed of predefined primitives that cover all
              DeFi operations.
            </BodyL>
          </Parallax>
        </Box>
        {width < medium && <img src={smartVaultsMobile} alt="smart vaults" />}
      </SmartVaultsContainer>
    </SmartVaultsSection>
  )
}

const SmartVaultsSection = styled.section`
  padding-top: 100px;
  height: auto;
  min-height: 900px;

  @media only screen and (max-width: 700px) {
    padding-top: 0;
    background: conic-gradient(
      at 50% 71%,
      #121418 0deg,
      #121418 70deg,
      #1b1f24 70deg,
      #1b1f24 284deg,
      #121418 270deg
    );
  }

  background: conic-gradient(
    at 27% 66%,
    #121418 0deg,
    #121418 70deg,
    #1b1f24 70deg,
    #1b1f24 284deg,
    #121418 270deg
  );
  @media only screen and (min-width: 1750px) {
    background: conic-gradient(
      at 38% 66%,
      #121418 0deg,
      #121418 70deg,
      #1b1f24 70deg,
      #1b1f24 284deg,
      #121418 270deg
    );
  }
`

const SmartVaultsContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0px;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
  img {
    margin-top: 200px;
    @media only screen and (max-width: 700px) {
      margin: 50px auto;
    }
  }
`

const Box = styled.div`
  width: 588px;
  @media only screen and (max-width: 700px) {
    width: 100%;
    text-align: center;
    h2 {
      margin: 30px auto;
    }
    p {
      max-width: 328px;
      margin: auto;
  }
`

export default SmartVaults
