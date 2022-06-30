import React from 'react'
import styled from 'styled-components'
import ethereum from '../assets/ethereum_logo.svg'
import polygon from '../assets/polygon_logo.svg'
import whitepaper from '../assets/whitepaper.svg'

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="https://www.mimic.fi/whitepaper.pdf" target="_blank" rel="noreferrer">
      <img src={whitepaper} alt='whitepaper' /> Whitepaper
      </a>
      <a href="https://mainnet.mimic.fi" target="_blank" rel="noreferrer">
        <img src={ethereum} alt='ethereum'/> Ethereum
      </a>
      <a href="https://polygon.mimic.fi" target="_blank" rel="noreferrer">
        <img src={polygon} alt='polygon'/> Polygon
      </a>
    </StyledMenu>
  )
}

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #191930;
  height: 100vh;
  text-align: left;
  padding: 150px 100px 30px 30px;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  img {
    padding-right: 10px;
    height: 30px;
  }

  a {
    display: flex;
    font-family: 'Poppins-Bold';
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.75px;
    text-align: left;
    padding: 15px;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

    @media only screen and (max-width: 700px) {
    }
  }
`

export default Menu
