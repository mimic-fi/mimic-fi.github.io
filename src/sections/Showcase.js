import React from 'react'
import styled from 'styled-components'
import background from '../assets/union-bg.png'
import demoScreen from '../assets/demoscreen.png'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <>
      <ContactSection>
        <Container>
          <h1>
            <div>Interested in</div> deploying your first{' '}
            <span>Smart Vault</span>?
          </h1>
          <h2>
            Get in touch to learn how Mimic platform can support your specific
            needs. We'd love to hear from you!
          </h2>
          <Buttons>
            <Button>
              <Link to="//calendly.com/mimicfi/30min">Schedule a call</Link>
            </Button>
          </Buttons>
          <h2>
            or find us on{' '}
            <Link to="//discord.mimic.fi/ ">
              <u>Discord</u>
            </Link>
          </h2>
        </Container>
        <ContactBox>
          <Screen src={demoScreen} alt="github" />
        </ContactBox>
      </ContactSection>
    </>
  )
}
const ContactSection = styled.section`
  background: url(${background});
  margin: auto;
  color: white;
  text-align: center;
  padding: 76px 0 100px 0;
  display: flex;
  @media only screen and (max-width: 700px) {
    flex-wrap: wrap;
    padding: 40px 0 100px 0;
    margin-top: -244px;
  }
  background-size: cover;
  background-position: top;
  margin-top: ${(p) => (p.compact ? '0px' : '-400px')};
  padding-top: ${(p) => (p.compact ? '210px' : '250px')};
  position: relative;
  z-index: 3;
  @media only screen and (min-width: 2000px) {
    padding-top: 400px;
  }
  .github {
    width: 45px;
  }
`

const Screen = styled.img`
  /* max-width: 100%; */
  overflow: hidden;
  @media only screen and (max-width: 700px) {
    width: 700px;
  }
`

const Container = styled.div`
  padding: 104px 104px 0 104px;
  @media only screen and (min-width: 900px) {
    width: 874px;
  }
  @media only screen and (max-width: 700px) {
    padding: 240px 40px 0 40px;
  }
  @media only screen and (min-width: 2000px) {
    padding: 0px 40px 0 40px;

    margin: auto;
    max-width: 1500px;
  }
  text-align: left;
  h3 {
    font-family: "Poppins-Bold";
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 0.99;
    text-align: left;
    margin-bottom: 0;
    @media only screen and (max-width: 700px) {
      font-size: 20px;
      line-height: 32px;
    }
  }
  h1 {
    margin-top: 20px;
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 80px;
    line-height: 90px;
    letter-spacing: 1.33075px;
    color: #fcfcfc;
    span {
      color: #c072ff;
    }
    @media only screen and (max-width: 700px) {
      font-size: 32px;
      line-height: 44px;
      letter-spacing: 0.99px;
    }
    @media only screen and (min-width: 900px) {
      max-width: 873px;
      min-width: 540px;
    }
  }
  h2 {
    font-family: "Poppins";
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 1px;
    color: #fcfcfc;
    @media only screen and (max-width: 700px) {
      font-size: 15px;
      line-height: 28px;
      letter-spacing: 0.75px;
    }
  }
`

const Buttons = styled.div`
  display: flex;
  margin-left: -5px;
  margin-top: 50px;
  flex-wrap: wrap;
`
const Button = styled.button`
  text-align: center;
  padding: 0 20px;
  background: #c072ff;
  border-radius: 100px;
  border: 3px solid #4a006a;
  box-sizing: border-box;
  font-family: "Poppins";
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 1px;
  color: #fcfcfc;
  white-space: nowrap;
  text-align: center;
  padding: 26px 40px;
  margin: 5px;
  @media only screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 28px;
    letter-spacing: 0.75px;
    padding: 8px 9px;
  }
  &.transparent {
    background: transparent;
    color: #4a006a;
  }
`

const ContactBox = styled.div`
  padding: 104px 0 0 104px;
  @media only screen and (min-width: 2000px) {
    margin: auto;
    max-width: 1500px;
  }

  @media only screen and (max-width: 700px) {
    padding: 40px 40px 0 40px;
    width: 666px;
  }

  text-align: left;
  margin: auto;
  margin-right: 0;
  div {
    display: flex;
    img {
      margin-right: 30px;
    }
  }
  h1 {
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 64px;
    line-height: 88px;
    letter-spacing: 1px;
    color: #ffffff;
    margin: 40px 0;
    @media only screen and (max-width: 700px) {
      font-size: 32px;
      line-height: 44px;
      letter-spacing: 0.9999998807907104px;
    }
  }
  a {
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: 1px;
    color: #fcfcfc;
    margin: 20px 0;
    @media only screen and (max-width: 700px) {
      font-size: 17px;
      line-height: 28px;
      letter-spacing: 0.75px;
    }
  }
`

export default Showcase
