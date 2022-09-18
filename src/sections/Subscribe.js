import React, { useState } from 'react'
import styled from 'styled-components'

export const Subscribe = () => {
  const [status, setStatus] = useState(null)
  const [email, setEmail] = useState('')

  const FORM_URL = 'https://app.convertkit.com/forms/3441012/subscriptions'

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = new FormData(event.target)

    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json',
        },
      })

      setEmail('')
      const json = await response.json()

      if (json.status === 'success') {
        setStatus('SUCCESS')
        return
      }
    } catch (err) {
      setStatus('ERROR')
      console.log(err)
    }
  }

  const handleEmailChange = (event) => {
    const { value } = event.target
    setEmail(value)
  }

  return (
    <ContactSection>
      <Container>
        <h2>Stay in the loop ser</h2>
        {status === 'SUCCESS' && (
          <>
            <h3>
              Welcome aboard
              <span role="img" aria-label="Ship">
                🚢
              </span>
            </h3>
          </>
        )}
        {status === 'ERROR' && (
          <>
            <p>Oops, something went wrong...</p>
            <p>
              Please,{' '}
              <button onClick={() => setStatus(null)}>try again.</button>
            </p>
          </>
        )}
        {status === null && (
          <form onSubmit={handleSubmit} className="formy">
            <InputMi
              aria-label="Your email address"
              name="email_address"
              placeholder="Your email address"
              required
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
            <Button>SUBSCRIBE</Button>
          </form>
        )}
      </Container>
    </ContactSection>
  )
}
const ContactSection = styled.section`
  color: white;
  text-align: center;
  padding: 0 0 100px 0;
  display: flex;

  .github {
    width: 45px;
  }
`

const Container = styled.div`
  padding: 04px 104px 0 104px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: left;
  @media only screen and (max-width: 700px) {
    padding: 0;
  }
  .formy {
    @media only screen and (max-width: 700px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
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
    font-size: 50px;
    line-height: 50px;
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

const InputMi = styled.input`
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 5px;
`
const Button = styled.button`
  text-align: center;
  margin: 0 20px;
  background: #c072ff;
  border-radius: 100px;
  border: 3px solid #4a006a;
  box-sizing: border-box;
  font-family: "Poppins";
  font-size: 24px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 1px;
  color: #fcfcfc;
  white-space: nowrap;
  text-align: center;
  padding: 15px 20px;
  /* @media only screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 28px;
    letter-spacing: 0.75px;
    padding: 8px 9px;
  } */
  &.transparent {
    background: transparent;
    color: #4a006a;
  }
`
