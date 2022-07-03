import React from 'react'
import styled from 'styled-components'

import logo from '../assets/contact-logo.svg'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Mimic>
          <Logo src={logo} />
          <h1>mimic.fi</h1>
          <h2>DeFi automation platform</h2>
          <p>2022 MIMIC. ALL RIGHTS RESERVED.</p>
        </Mimic>
        <Links>
          <LinkSection title="Devs">
            <Link to="#">Documentation</Link>
            <Link to="#">Lite app - Mainnet</Link>
            <Link to="#">Lite app - Polygon</Link>
            <Link to="#">Github</Link>
          </LinkSection>

          <LinkSection title="Mimic">
            <Link to="#">Blog</Link>
            <Link to="#">Terms</Link>
          </LinkSection>

          <LinkSection title="Contact">
            <Link to="#">Twitter</Link>
            <Link to="#">Discord</Link>
          </LinkSection>
        </Links>
      </Container>
    </FooterSection>
  )
}

const LinkSection = ({ children, title }) => {
  return (
    <LinkColumn>
      <div className="title">{title}</div>
      {children}
    </LinkColumn>
  )
}

const FooterSection = styled.section`
  background: #0e0b1e;
  color: white;
  padding: 100px 0 30px 0;
  display: flex;
  width: 100%;
  @media only screen and (max-width: 700px) {
    padding: 60px 0 30px 0;
  }
`

const Container = styled.div`
  margin-bottom: 100px;
  text-align: right;
  display: flex;
  width: 100%;
  padding: 0px 100px;

  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    padding: 0px 25px;
  }

  h1 {
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 32px;
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

const Mimic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 997px) {
    align-items: center;
  }
`

const Links = styled.div`
  margin-top: 150px;
  display: flex;
  align-items: flex-start;
  @media only screen and (max-width: 997px) {
    justify-content: center;
  }
  &.column {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 100px;
  @media only screen and (max-width: 997px) {
    margin-right: 20px;
  }
  .title {
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 20px;
  }
  a {
    padding-bottom: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Logo = styled.img`
  max-width: 150px;
`

export default Footer
