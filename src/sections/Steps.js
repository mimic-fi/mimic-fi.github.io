import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParallax } from 'react-scroll-parallax'
import bgCard from '../assets/bg-card.png'
import r1 from '../assets/r1.png'
import r2 from '../assets/r2.png'
import r3 from '../assets/r3.png'
import r4 from '../assets/r4.png'
import r5 from '../assets/r5.png'
import r6 from '../assets/r6.png'
import collect from '../assets/collect.svg'
import withdraw from '../assets/withdraw.png'
import trustless from '../assets/trustless.png'
import bridge from '../assets/bridge.png'

const Steps = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 900
  return (
    <StepsSection>
      <h1>
        <span>Smart Vaults</span> use preset & custom actions to automate any
        DeFi interaction
      </h1>
      <h2>such as</h2>
      <Container>
        <CardHolder>
          <CardsContainer>
            <SmallCard
              className="alt"
              speed={30}
              title="Collect & allocate"
              description="Collect assets from different places, swap them at the best rate
        among decentralized exchanges, and join a specific ERC-4626 vault."
              scrollDisabled={width <= medium}
              icon={collect}
            />

            <BigCard
              speed={-15}
              title="Bridge yield protocols"
              description=" Bridge assets between lending protocols from different layers
        depending on which one offers the best interest rate."
              scrollDisabled={width <= medium}
              icon={bridge}
            />
            <BigCard
              className="alt"
              speed={10}
              title="Trustless delegation"
              description="  Keep full custody of your assets by automating most of your
          treasury management actions and assigning a third party for specific
          ones."
              scrollDisabled={width <= medium}
              icon={trustless}
            />
            <SmallCard
              speed={-30}
              title="Set withdraw goals"
              description="Provide liquidity to an AMM pool, keep track of the earnings
          obtained from swap fees and liquidity mining, and withdraw those
          gains on a monthly basis."
              scrollDisabled={width <= medium}
              icon={withdraw}
            />
          </CardsContainer>
          <CardsContainerBg>
            <Image src={r1} speed={30} width="80px" paddingLeft="50px" />
            <Image
              src={r2}
              speed={60}
              width="50px"
              paddingLeft="100px"
              marginTop="150px"
            />
            <Image
              src={r3}
              speed={0}
              width="110px"
              paddingLeft="40px"
              marginTop="800px"
            />
            <Image
              src={r4}
              speed={90}
              width="200px"
              paddingLeft="0px"
              marginTop="700px"
            />
            <Image
              src={r5}
              speed={20}
              width="100px"
              paddingLeft="90px"
              marginTop="100px"
            />
            <Image
              src={r6}
              speed={30}
              width="50px"
              paddingLeft="30px"
              marginTop
            />
            <Image
              src={r4}
              speed={40}
              width="200px"
              paddingLeft="100px"
              marginTop="20px"
            />
          </CardsContainerBg>
        </CardHolder>
      </Container>
    </StepsSection>
  )
}

const BigCard = ({
  title,
  description,
  className,
  speed,
  scrollDisabled,
  icon,
}) => {
  const parallax = useParallax({
    speed: speed,
    disabled: scrollDisabled,
  })

  return (
    <Card className={className} ref={parallax.ref}>
      <img src={icon} alt="mimic" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  )
}

const SmallCard = ({
  title,
  description,
  className,
  speed,
  scrollDisabled,
  icon,
}) => {
  const parallax = useParallax({
    speed: speed,
    disabled: scrollDisabled,
  })

  return (
    <TinyCard className={className} ref={parallax.ref}>
      <img src={icon} alt="mimic" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </TinyCard>
  )
}

const Image = ({ src, speed, width, paddingLeft, marginTop }) => {
  const parallax = useParallax({
    speed: speed,
  })

  return (
    <img
      src={src}
      ref={parallax.ref}
      style={{
        paddingLeft: paddingLeft,
        width: width,
        height: width,
        marginTop: marginTop,
      }}
      alt="alt-img"
    />
  )
}

const StepsSection = styled.section`
  background: #191930;
  margin: auto;
  color: white;
  padding: 100px 0 30px 0;
  text-align: center;
  min-height: 1600px;
  h1 {
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: 1px;
    color: #fcfcfc;
    margin-left: 20%;
    max-width: 60%;
    span {
      color: #c072ff;
    }
    @media only screen and (max-width: 900px) {
<<<<<<< HEAD
      width: 90%;
      font-size: 40px;
      line-height: 48px;
      margin: 0 5%;
=======
      width: 100%;
      font-size: 25px;
      line-height: 40px;
      white-space: break-spaces;
      padding: 25px 0;
>>>>>>> 9677522bbb0b4e979e42a7deae1cd9dbd20100da
      text-align: center;
      margin-left: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
    padding: 0;
  }
`

const Container = styled.div`
  text-align: right;
`

const CardHolder = styled.section`
  position: relative;
`

const CardsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 100;
  width: 100%;
  padding: 200px 0;
  @media only screen and (max-width: 900px) {
    position: unset;
    flex-wrap: wrap;
    padding: 0;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.75px;
    text-align: left;
    min-height: 84px;
    @media only screen and (max-width: 900px) {
      margin: 5px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      margin-right: 30px;
    }
  }
`

const CardsContainerBg = styled.div`
  position: absolute;
  display: flex;
  z-index: 1;
  width: 100%;
  padding: 200px 0;
  @media only screen and (max-width: 900px) {
    position: unset;
    display: none;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto;
    justify-items: center;
    align-items: center;
    align-content: center;
    padding: 0 20px;
  }
`

const Card = styled.div`
  background: url(${bgCard});
  background-size: cover;
  border-radius: 16px;
  padding: 0 26px 26px 26px;
  width: 430px;
  margin: 0 10px;
  height: 700px;
  @media only screen and (max-width: 900px) {
    margin: 0;
    width: 100%;
    height: 300px;
    margin: 10px 20px;
    margin-top: 20px;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  h2 {
    padding-left: auto;
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 60px;
    line-height: 76px;
    letter-spacing: 1px;
    color: #fcfcfc;
    text-align: left;
    max-width: 33px;
    @media only screen and (max-width: 1500px) {
      font-size: 35px;
      line-height: 44px;
    }
    @media only screen and (max-width: 900px) {
      font-size: 28px;
      line-height: 44px;
      white-space: break-spaces;
      padding: 0 15px;
      text-align: center;
    }
  }
  img {
    position: fixed;
    top: 20px;
    left: 20px;
    opacity: 0.6;
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
  &.alt {
    border-radius: 16px;
    padding: 0 26px 26px 26px;
    width: 430px;
    margin: 0 10px;
    height: 700px;
    @media only screen and (max-width: 900px) {
      width: 100%;
      margin-top: 20px;
      height: 300px;
      margin: 10px 20px;
    }
  }
`

const TinyCard = styled.div`
  background: #3b2e80;
  border-radius: 16px;
  padding: 0 26px 26px 26px;
  width: 430px;
  margin: 0 10px;
  height: 700px;
  max-width: 240px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  @media only screen and (max-width: 900px) {
    margin: 0;
    padding: 15px;
    height: 300px;
    max-width: 100%;
    margin: 10px 20px;
  }
  p {
    font-weight: 300;
    font-size: 21px;
  }
  h2 {
    font-family: "Poppins-Bold";
    font-size: 45px;
    text-align: left;
    margin: 12px 0;
    @media only screen and (max-width: 1500px) {
      font-size: 35px;
      line-height: 44px;
    }
    @media only screen and (max-width: 900px) {
      font-size: 28px;
      line-height: 44px;
      white-space: break-spaces;
      padding: 0 15px;
      text-align: center;
    }
  }
  img {
    position: fixed;
    top: 20px;
    left: 20px;
    opacity: 0.6;
    //@media only screen and (max-width: 900px) {
    //  display: none;
    //}
  }
  &.alt {
    width: 100%;
    /* margin-top: 200px; */
    @media only screen and (max-width: 900px) {
      width: 100%;
      margin: 10px 20px;
      margin-top: 20px;
    }
  }
`

export default Steps
