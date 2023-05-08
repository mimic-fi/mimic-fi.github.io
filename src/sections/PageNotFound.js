import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, H3, BodyM, BodyL } from '../styles/texts'
import background from '../assets/404.svg'

const PageNotFound = () => {
  return (
      <PageNotFoundSection>
        <Container>
          <Text>
            <BodyL>404 Error</BodyL>
            <H3>Oh no!</H3>
            <BodyM>
              Have you seen our octopus? <br />
              It seems like it went missing.. <br />
              just like this link!
            </BodyM>
            <br />
            <StyledLink to="/">
              For sure it’s on the Home Page
            </StyledLink>
          </Text>
        </Container>
      </PageNotFoundSection>
  )
}

const StyledLink = styled(Link)`
  font-family: 'GTWalsheimPro';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: #a996ff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    padding-left: 8px;
  }
`

const PageNotFoundSection = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 47%;
  background-position: bottom right;
  box-sizing: border-box;
  min-height: calc(100vh - 60px);
  height: auto;
  padding-top: 180px;
  color: white;
  text-align: left;
  @media only screen and (max-width: 700px) {
    min-height: 650px;
    padding: 60px 0 0 0;
  }
`

const Text = styled.div`
  max-width: 580px;
`

export default PageNotFound
