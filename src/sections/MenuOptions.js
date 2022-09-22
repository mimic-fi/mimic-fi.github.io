import React  from 'react'
import styled from 'styled-components'
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
          href="https://docs.mimic.fi/miscellaneous/faqs"
          target="_blank"
          rel="noreferrer"
        >
          FAQs
        </a>
        <a href="https://github.com/mimic-fi" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
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
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100px;
  @media only screen and (max-width: 700px) {
    margin: 30px 0 0 0;
  }
`

export default MenuOptions
