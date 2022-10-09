import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import styled from 'styled-components'
import laptop from '../assets/laptop.svg'
import arrow from '../assets/arrow-rounded.svg'
import CarouselSection from '../components/Carousel'
import { H1, BodyL, Container } from '../styles/texts'

const WorkSmarter = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700
  const large = 1163

  return (
    <WorkSmarterSection>
      <WorkSmarterContainer>
        <div>
          <Parallax speed={10}>
            <BodyL>You know the saying..</BodyL>
            <H1>Work smarter, not harder</H1>
            <Body>These are some Smart Vault use cases</Body>
            {width >= large && <Arrow src={arrow} />}
          </Parallax>
        </div>
        <CarouselBox>
          <CarouselSection />
        </CarouselBox>
      </WorkSmarterContainer>
    </WorkSmarterSection>
  )
}
const Body = styled(BodyL)`
  @media only screen and (max-width: 700px) {
    margin-bottom: 50px;
  }
`

const WorkSmarterSection = styled.section`
  background: #1b1f24;
  height: auto;
  min-height: 900px;
  @media only screen and (max-width: 700px) {
    padding-top: 150px;
  }
  @media only screen and (min-width: 1160px) and (max-width: 1365px) {
    h1 {
      font-size: 40px;
      line-height: 52px;
    }
    p {
      font-size: 17px;
      line-height: 28px;
    }
  }
`

const Arrow = styled.img`
  margin-right: 0;
  margin-left: auto;
  text-align: right;
  display: block;
`

const CarouselBox = styled.div`
  width: 1000px;
  height: 760px;
  @media only screen and (max-width: 1000px) {
    width: 100vw;
  }
`

const WorkSmarterContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0px;
  @media only screen and (max-width: 1164px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      max-width: 470px;
    }
  }
  h1 {
    @media only screen and (min-width: 1350px) {
      width: 404px;
    }
  }
`

export default WorkSmarter
