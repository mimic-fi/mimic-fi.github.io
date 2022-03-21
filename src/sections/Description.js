import React from 'react'
import styled from 'styled-components'
import check from '../assets/purple-check.svg'
import laptop from '../assets/laptop.png'
import laptopMobile from '../assets/laptop-mobile.png'
import laptopLarge from '../assets/laptop-large.png'
import line from '../assets/line.svg'

const Description = () => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const breakpoint = 700
  const large = 2000

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  return (
    <DescriptionSection>
      <Container>
        <Line src={line} />
        <Box>
          <h1>
            Get everything <br />
            at hand
          </h1>
          <div>
            <img src={check} />
            <p>Unlimited accounts and portfolios</p>
          </div>
          <div>
            <img src={check} />
            <p>One dashboard to view it all</p>
          </div>
          <div>
            <img src={check} />
            <p>
              Real time investment strategy <br />
              suggestions to support you
            </p>
          </div>
        </Box>
        {width < breakpoint && <Laptop src={laptopMobile} />}
        <Box>
          <h1>
            Your clients will <br />
            be able to
          </h1>
          <div>
            <img src={check} />
            <p>
              Retain full asset <br />
              ownership at all times
            </p>
          </div>
          <div>
            <img src={check} />
            <p>Simplified asset funding</p>
          </div>
          <div>
            <img src={check} />
            <p>Exit at anytime</p>
          </div>
        </Box>
      </Container>
      {width >= breakpoint && <Laptop src={width >= large ? laptopLarge : laptop} />}
    </DescriptionSection>
  )
}

const DescriptionSection = styled.section`
  background: #191930;
  margin: auto;
  color: white;
  padding: 100px 0 30px 0;
  @media only screen and (max-width: 700px) {
    padding: 60px 0 30px 0;
  }
`

const Line = styled.img`
  position: absolute;
  left: 100px;
  top: 100px;
  z-index: 1;
  @media only screen and (max-width: 997px) {
    display: none;
  }
`

const Laptop = styled.img`
  margin-left: 0;
  position: relative;
  z-index: 10;
  @media only screen and (max-width: 700px) {
    width: 90%;
    margin-left: auto;
  }
  @media only screen and (min-width: 2000px) {
    margin: auto;
    left: 50%;
    transform: translate(-50%, 0);
  }
`

const Container = styled.div`
  max-width: 1056px;
  margin: auto;
  margin-bottom: 100px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-family: 'Poppins-Bold';
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 1px;
    color: #fcfcfc;
    @media only screen and (max-width: 700px) {
      font-size: 28px;
      line-height: 44px;
      white-space: break-spaces;
      padding: 0 15px;
    }
  }
  p {
    font-family: 'Poppins';
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.75px;
    color: #fcfcfc;
    @media only screen and (max-width: 700px) {
      font-size: 17px;
      line-height: 28px;
      margin-bottom: 0;
    }
  }
`

const Box = styled.div`
  margin: 0 20px;
  text-align: left;
  div {
    display: flex;
    img {
      margin-right: 30px;
      @media only screen and (max-width: 700px) {
        margin-left: 15px;
      }
    }
  }
`

export default Description
