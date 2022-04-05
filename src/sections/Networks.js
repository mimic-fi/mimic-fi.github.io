import React from 'react'
import styled from 'styled-components'
import ethereum from '../assets/ethereum_logo.svg'
import polygon from '../assets/polygon_logo.svg'
import whitepaper from '../assets/whitepaper.svg'

const Networks = () => {
  const [, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  return (
    <NetworksSection>
      <ButtonsSection>
        <a href="https://www.mimic.fi/whitepaper.pdf" target="_blank" rel="noreferrer">
          <img src={whitepaper} alt='whitepaper' /> Whitepaper
        </a>
        <a href="https://mainnet.mimic.fi" target="_blank" rel="noreferrer">
          <img src={ethereum} alt='ethereum'/> Ethereum
        </a>
        <a href="https://polygon.mimic.fi" target="_blank" rel="noreferrer">
          <img src={polygon} alt='polygon'/> Polygon
        </a>
      </ButtonsSection>
    </NetworksSection>
  )
}

const NetworksSection = styled.div`
  display: flex;
  align-items: center;
  img {
    padding-right: 10px;
    height: 30px;
  }
  a {
    margin: 0 10px;
    display: flex;
    padding: 10px 15px;
    border: 1px solid white;
    border-radius: 5px;
    font-weight: 500;
    font-size: 1.25rem;
    font-family: 'Poppins-Bold';
    background-color: #312357;
    @media only screen and (max-width: 700px) {
      margin: 10px 10px;
    }
    &:hover {
      background-color: #a524ff87;
    }
  }
`

const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 700px) {
    margin: 30px 0 0 0;
  }
`

export default Networks
