import React from 'react'
import styled from 'styled-components'
import laptop from '../assets/laptop.svg'
import telegram from '../assets/telegram.svg'
import discord from '../assets/discord.svg'
import { H1, BodyL, Container } from '../styles/texts'

const TrackActivity = () => (
  <TrackActivitySection>
    <TrackActivityContainer>
      <div>
        <H1>Track all activity on chain</H1>
        <Body>With notifications on <img src={telegram} /> <img src={discord} /></Body>
      </div>
      <div>
        <img src={laptop} />
      </div>
    </TrackActivityContainer>
  </TrackActivitySection>
)

const TrackActivitySection = styled.section`
  background: #1B1F24;
  // min-height: 100vh;
  height: auto;
  min-height: 900px;
  @media only screen and (max-width: 700px) {
    min-height: 580px;
  }
`

const Body = styled(BodyL)`
  display: flex;
  align-items: center;
  img {
    margin: 0 16px;
  }
`

const TrackActivityContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    img {
      max-width: 80vw;
    }
  }
  gap: 0px;
  h1 {
    width: 450px;
  }
`

export default TrackActivity
