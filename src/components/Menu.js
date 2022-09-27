import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="//docs.mimic.fi">Documentation</Link>
      <Link to="//twitter.com/mimicfi">Twitter</Link>
      <Link to="//discord.mimic.fi">Discord</Link>
      <Link to="//github.com/mimic-fi">Github</Link>
    </StyledMenu>
  )
}

export const StyledMenu = styled.nav`
  display: flex;
  position: fixed !important;
  top: 0;
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
    font-family: "Poppins-Bold";
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
