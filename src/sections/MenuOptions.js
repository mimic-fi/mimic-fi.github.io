import React from 'react'
import styled from 'styled-components'
import twitter from '../assets/twitter.svg'
import github from '../assets/github.svg'

const MenuOptions = () => {
  const [, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  return (
    <MenuOptionsSection>
      <ButtonsSection>
        <a
          href="https://www.mimic.fi/whitepaper.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Whitepaper
        </a>
        <a href="https://mainnet.mimic.fi" target="_blank" rel="noreferrer">
          Docs
        </a>
        <a href="https://polygon.mimic.fi" target="_blank" rel="noreferrer">
          Faqs
        </a>
        <a href="https://polygon.mimic.fi" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
        <a href="https://polygon.mimic.fi" target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
      </ButtonsSection>
    </MenuOptionsSection>
  )
}

const MenuOptionsSection = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
  }
  a {
    margin: 0 10px;
    display: flex;
    padding: 10px 15px;
    font-weight: 500;
    font-size: 1.25rem;
    font-family: "Poppins-Bold";
    @media only screen and (max-width: 700px) {
      margin: 10px 10px;
    }
  }
`

const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 700px) {
    margin: 30px 0 0 0;
  }
`

export default MenuOptions
