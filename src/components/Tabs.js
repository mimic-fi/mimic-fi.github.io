import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { LinkL } from '../styles/texts'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import discord from '../assets/discord.svg'

const Tabs = ({ mode }) => {
  return (
    <TabsBox mode={mode}>
      <LinkL href="https://www.mimic.fi/whitepaper.pdf" target="_blank">
        Whitepaper
      </LinkL>
      <LinkL href="https://docs.mimic.fi/general/whats-mimic" target="_blank">
        Docs
      </LinkL>
      <Social>
        <LinkL href="https://github.com/mimic-fi" target="_blank">
          <img src={github} />
        </LinkL>
        <LinkL href="https://twitter.com/mimicfi" target="_blank">
          <img src={twitter} />
        </LinkL>
        <LinkL href="https://discord.com/invite/pZsRmtTgNa" target="_blank">
          <img src={discord} />
        </LinkL>
      </Social>
    </TabsBox>
  )
}
const Social = styled.div`
  display: flex;
`
const TabsBox = styled.div`
  display: ${props => (props.mode == 'large' ? 'flex' : 'block')};
  align-items: center;
  text-align: center;
  a {
    padding: ${props => (props.mode == 'large' ? '0 20px' : '20px 0')};
    display: flex;
    align-items: center;
    img {
      width: 35px;
      padding: 0 5px;
    }
  }
`

export default Tabs
