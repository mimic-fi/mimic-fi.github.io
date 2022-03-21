import React from 'react'
import Faq from 'react-faq-component'
import styled from 'styled-components'
import data from '../faqs-data'

export default function App() {
  return (
    <FaqsSection>
      <Container>
        <Faq
          data={data}
          styles={{
            bgColor: '#191930',
            titleTextColor: 'white',
            rowTitleColor: 'white',
            rowTitleTextSize: 'large',
            rowContentColor: 'white',
            rowContentTextSize: '16px',
            rowContentPaddingTop: '10px',
            rowContentPaddingBottom: '10px',
            rowContentPaddingLeft: '50px',
            rowContentPaddingRight: '150px',
            arrowColor: 'white',
          }}
          config={{
            animate: true,
          }}
        />
      </Container>
    </FaqsSection>
  )
}

const FaqsSection = styled.section`
  background: #191930;
  margin: auto;
  color: white;
  padding: 100px 200px 600px 200px;
  @media only screen and (max-width: 700px) {
    padding: 30px 30px 300px 30px;
  }
`

const Container = styled.section`
  max-width: 1100px;
  margin: auto;
  .faq-row-wrapper {
    font-family: 'Poppins';
    .faq-title  {
      font-family: 'Poppins-Bold';
      padding-bottom: 40px;
      font-size: 28px;
      line-height: 40px;
      letter-spacing: 1px;
      @media only screen and (max-width: 1000px) {
        font-size: 25px;
        text-align: left;
        margin: 100px 40px 20px 0;
      }
    }

    .faq-body {
        .faq-row {
            .row-title {
              font-size: 20px;
              line-height: 32px;
              letter-spacing: 0.75px;
              color: #fcfcfc;
              @media only screen and (max-width: 1000px) {
                font-size: 17px;
              }
            }

            .row-content {
                .row-content-text {
                }
            }
        }
    }
}
`
