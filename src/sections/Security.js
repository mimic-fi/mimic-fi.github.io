import React, { useRef } from 'react'
import styled from 'styled-components'
import { Hxl, H6, BodyL, Container } from '../styles/texts'
import Trail from '../components/Trail'
import allowlisted from '../assets/allowlisted.svg'
import noncustodial from '../assets/noncustodial.svg'
import transparency from '../assets/transparency.svg'

const Securyty = () => {
  return (
    <SecurytySection>
      <Container>
        <Box>
          <BodyL>while providing you with</BodyL>
          <Title>
            top notch <br />{' '}
            <Sec>
              <span>*******</span>
            </Sec>
            <Trail data={['security', 'security']} />
          </Title>
        </Box>
        <Items>
          <div>
            <img src={allowlisted} />
            <H6>Allowlisted actions</H6>
            <BodyL>
              Give or revoke permissions to execute actions restricting how to
              manage assets.
            </BodyL>
          </div>
          <div>
            <img src={noncustodial} />
            <H6>100% non custodial</H6>
            <BodyL>
              Designated action executors never have ownership of the assets in
              a Smart Vault.
            </BodyL>
          </div>
          <div>
            <img src={transparency} />
            <H6>Extra-clear transparency</H6>
            <BodyL>
              All Smart Vault’s activity is on-chain becoming auditable and
              verifiable.
            </BodyL>
          </div>
        </Items>
      </Container>
    </SecurytySection>
  )
}

const Title = styled(Hxl)`
  position: relative;
`

const Sec = styled.span`
  position: relative;
  span {
    position: relative;
    top: 36px;

    left: 3px;
    letter-spacing: 13px;
    @media only screen and (max-width: 700px) {
      top: 19px;
      letter-spacing: 9px;
    }
  }
`

const Items = styled.div`
  padding-top: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-right: 0;
  margin-left: auto;
  gap: 30px;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 700px) {
    align-items: flex-start;
  }
  div {
    width: 300px;
    img {
      margin-bottom: 50px;
    }
    p {
      max-width: 280px;
    }
  }
`

const SecurytySection = styled.section`
  padding: 150px 0 244px 0;
  background: #1b1f24;
  @media only screen and (max-width: 700px) {
    padding: 0;
  }

  @keyframes changeLetter {
    0% {
      content: '********';
    }
    12.5% {
      content: 'S*******';
    }
    25% {
      content: 'Se******';
    }
    37.5% {
      content: 'Sec*****';
    }
    50% {
      content: 'Secu****';
    }
    62.5% {
      content: 'Secur***';
    }
    75% {
      content: 'Securi**';
    }
    87.5% {
      content: 'Securit*';
    }
    100% {
      content: 'Security';
    }
  }

  .letter-changer {
    animation: changeLetter 8s linear;
  }
`

const Box = styled.div`
  max-width: 619x;
  margin: auto;
  p {
    max-width: 600px;
    margin-top: 0px;
    margin-bottom: 30px;
  }
`

export default Securyty
