import React from 'react'
import styled from 'styled-components'
import ethereum from '../assets/ethereum.svg'
import polygon from '../assets/polygon.svg'

const Networks = () => (
  <NetworksSection>
    <h1>Now available on</h1>
    <a href="https://mainnet.mimic.fi" target="_blank">
      <img src={ethereum} />
    </a>
    <a href="https://polygon.mimic.fi" target="_blank">
      <img src={polygon} />
    </a>
  </NetworksSection>
)

const NetworksSection = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-family: 'Poppins-Bold';
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.75px;
    text-align: left;
    padding-right: 30px;
  }
  img {
    padding: 0 10px;
  }
`

export default Networks
