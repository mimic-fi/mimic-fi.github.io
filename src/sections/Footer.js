import React from 'react'
import styled from 'styled-components'
import logo from '../assets/footer-logo.svg'
import whitepaper from '../assets/whitepaper.svg'
import github from '../assets/github.svg'
import { H3, H6, LinkS, BoldL, Container } from '../styles/texts'

const Footer = () => (
  <FooterSection>
    <FContainer>
      <img src={logo} />
      <FooterContainer>
        <div>
          <H3>Mimic.fi</H3>
          <H6>DeFi automation platform</H6>
        </div>
        <Box>
          <div>
            <BoldL>Developers</BoldL>
            <LinkS href="https://mimic.fi/whitepaper.pdf" target="_blank">
              <img src={whitepaper} />
              Whitepaper
            </LinkS>
            <LinkS
              href="https://docs.mimic.fi/general/whats-mimic"
              target="_blank"
            >
              <img src={whitepaper} />
              Documentation
            </LinkS>
            <LinkS href="https://github.com/mimic-fi" target="_blank">
              <img src={github} />
              Github
            </LinkS>
          </div>
          <div>
            <BoldL>About us</BoldL>
            <LinkS href="https://medium.com/mimicfi" target="_blank">
              Blog
            </LinkS>
            <LinkS href="https://www.mimic.fi/terms" target="_blank">
              Terms of use
            </LinkS>
          </div>
          <div>
            <BoldL>Connect</BoldL>
            <LinkS href="https://twitter.com/mimicfi" target="_blank">
              Twitter
            </LinkS>
            <LinkS href="https://discord.com/invite/pZsRmtTgNa" target="_blank">
              Discord
            </LinkS>
          </div>
        </Box>
      </FooterContainer>
    </FContainer>
  </FooterSection>
)

const FooterSection = styled.section`
  background: #1b1f24;
  height: auto;
  padding-bottom: 150px;
  @media only screen and (max-width: 700px) {
    height: 1000px;
  }
`

const FContainer = styled(Container)`
  border-top: solid 1px #c7c7c7;
  padding-top: 100px;
  height: auto;
`
const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    text-align: left;
    gap: 0;
    div {
      text-align: left;
    }
  }
  gap: 68px;
  a {
    display: flex;
    align-items: center;
    margin: 12px 0;
    cursor: pointer;
    img {
      padding-right: 7px;
    }
  }
`

const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  h3,
  h5,
  h6 {
    margin: 12px 0;
  }
  h3 {
    margin-top: 24px;
  }
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`

export default Footer
