import React from 'react'
import styled from 'styled-components'
import { LinkL } from '../styles/texts'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import discord from '../assets/discord.svg'

const Tabs = ({ mode }) => {
  return (
    <TabsBox mode={mode}>
      <LinkL
        href="https://mimic.fi/whitepaper.pdf"
        target="_blank"
        aria-label="mimic whitepaper"
      >
        Whitepaper
      </LinkL>
      <LinkL
        href="https://docs.mimic.fi/general/whats-mimic"
        target="_blank"
        aria-label="what is mimic"
      >
        Docs
      </LinkL>
      <Social>
        <LinkL
          href="https://github.com/mimic-fi"
          target="_blank"
          aria-label="mimic github"
        >
          <img src={github} alt="github" />
        </LinkL>
        <LinkL
          href="https://twitter.com/mimicfi"
          target="_blank"
          aria-label="mimic twitter"
        >
          <img src={twitter} alt="twitter" />
        </LinkL>
        <LinkL
          href="https://discord.com/invite/pZsRmtTgNa"
          target="_blank"
          aria-label="mimic discord"
        >
          <img src={discord} alt="discord" />
        </LinkL>
      </Social>
    </TabsBox>
  )
}
const Social = styled.div`
  display: flex;
`
const TabsBox = styled.div`
  display: ${props => (props.mode === 'large' ? 'flex' : 'block')};
  align-items: center;
  text-align: center;
  a {
    padding: ${props => (props.mode === 'large' ? '0 20px' : '20px 0')};
    display: flex;
    align-items: center;
    img {
      width: 35px;
      padding: 0 5px;
    }
  }
`

export default Tabs
