import React from 'react'
import styled from 'styled-components'
import { H1, BodyL, Button } from '../styles/texts'

const LearnMore = () => (
  <LearnMoreSection>
    <Box>
      <H1>Want to learn more?</H1>
      <BodyL>
        Let us help you find the best Smart Vault configuration for your
        business
      </BodyL>
      <Button
        href="https://airtable.com/shrSvH8fTJcbHq0xl"
        target="_blank"
      >
        Get in touch
      </Button>
    </Box>
  </LearnMoreSection>
)

const LearnMoreSection = styled.section`
  background: #1B1F24;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 900px;
  text-align: center;
  @media only screen and (max-width: 700px) {
    min-height: 580px;
  }
`

const Box = styled.div`
  max-width: 780px;
  p {
    margin-top: 0px;
    margin-bottom: 30px;
  }
`

export default LearnMore
