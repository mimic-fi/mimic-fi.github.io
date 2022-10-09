import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'
import Card from './Card'
import { H5, BodyM } from '../styles/texts'
import treasury from '../assets/treasury.svg'
import fee from '../assets/fee.svg'
import plus from '../assets/fee.svg'
import strategies from '../assets/strategies.svg'
import indexes from '../assets/indexes.svg'
import liquidity from '../assets/liquidity.svg'

const CarouselSection = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 850

  return (
    <Container>
      <Carousel
        itemsToShow={width >= medium ? 2 : 1}
        itemsToScroll={width >= medium ? 2 : 1}
        pagination={width >= medium ? false : true}
      >
        <Card>
          <Icon src={treasury} />
          <BodyM>up to 5 actions</BodyM>
          <H5>Manage your treasury</H5>
          <BodyM>
            Control risks by limiting in which DeFi protocol a manager can
            allocate your assets and where they can be swapped.
          </BodyM>
          <Tags>
            <div>
              <BodyM>Swap</BodyM>
            </div>
            <div>
              <BodyM>Join</BodyM>
            </div>
            <div>
              <BodyM>Exit</BodyM>
            </div>
            <div>
              <BodyM>Withdraw</BodyM>
            </div>
          </Tags>
        </Card>
        <Card mode="black">
          <Icon src={fee} />
          <BodyM>up to 8 actions</BodyM>
          <H5>Fee distribution</H5>
          <BodyM>
            Collect all fees obtained by your protocol from different chains,
            swap and bridge them together to, later on, distribute those gains
            to token holders.
          </BodyM>
          <Tags>
            <div>
              <BodyM>Collect</BodyM>
            </div>
            <div>
              <BodyM>Swap</BodyM>
            </div>
            <div>
              <BodyM>Withdraw</BodyM>
            </div>
          </Tags>
        </Card>
        <Card>
          <Icon src={strategies} />
          <BodyM>up to 5 actions</BodyM>
          <H5>Composed strategies</H5>
          <BodyM>
            Create complex strategies by composing many DeFi protocols and track
            all activity and yield onchain.
          </BodyM>
          <Tags>
            <div>
              <BodyM>Join</BodyM>
            </div>
            <div>
              <BodyM>Exit</BodyM>
            </div>
            <div>
              <BodyM>Withdraw</BodyM>
            </div>
          </Tags>
        </Card>
        <Card mode="black">
          <Icon src={indexes} />
          <BodyM>up to 5 actions</BodyM>
          <H5>Auto-rebalancing indexes</H5>
          <BodyM>
            Create a basket of DeFi tokens that auto-rebalances back to its
            target weightings.
          </BodyM>
          <Tags>
            <div>
              <BodyM>Swap</BodyM>
            </div>
            <div>
              <BodyM>Withdraw</BodyM>
            </div>
          </Tags>
        </Card>
        <Card>
          <Icon src={liquidity} />
          <BodyM>up to 5 actions</BodyM>
          <H5>Liquidity provision</H5>
          <BodyM>
            Provide liquidity to DeFi protocols with certain configuration and
            automatically change it depending on market conditions.
          </BodyM>
          <Tags>
            <div>
              <BodyM>Swap</BodyM>
            </div>
            <div>
              <BodyM>Join</BodyM>
            </div>
            <div>
              <BodyM>Exit</BodyM>
            </div>
            <div>
              <BodyM>Withdraw</BodyM>
            </div>
          </Tags>
        </Card>
        <Card custom={true} mode="black">
          <Icon src={plus} />
          <div>
            <H5>And more use cases!</H5>
            <BodyM>
              Use Mimic to suit your  operational need
            </BodyM>
          </div>
        </Card>
      </Carousel>
    </Container>
  )
}

const Tags = styled.div`
  margin-top: 51px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  div {
    padding: 3px 8px;
    background: #8505b1;
    border-radius: 8px;
    p {
      margin: 0;
    }
  }
`

const Icon = styled.img`
  margin-bottom: 130px;
  @media only screen and (max-width: 700px) {
    margin-bottom: 44px;
  }
`
const Container = styled.div`
  .rec-carousel {
    width: 850px;
    min-height: 700px;
    @media only screen and (max-width: 850px) {
      width: 90vw;
    }
  }
  .rec-slider-container {
    margin: 0;
  }
  .rec-arrow {
    background-color: transparent;
    color: #ffffff57;
    box-shadow: none;
  }
  .rec-arrow:hover,
  .rec-arrow:active,
  .rect-arrow:focus {
    background-color: transparent;
    color: #ffffff;
    box-shadow: none;
  }
  .custom {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
  }
`

export default CarouselSection
