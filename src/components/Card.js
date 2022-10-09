import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Card = ({ mode, custom, children, ...rest }) => {
  return (
    <div>
      <CardContainer mode={mode} custom={custom}>
        {children}
      </CardContainer>
    </div>
  )
}

const CardContainer = styled.div`
  border: ${props =>
    props.mode == 'black' ? 'solid 1px #151515' : 'solid 1px white'};
  background: ${props => (props.mode == 'black' ? '#151515' : '#1B1F24')};
  border-radius: 8px;
  height: 630px;
  width: 298px;
  margin: 0 10px;
  padding: 25px;

  ${props =>
    props.custom == true &&
    'display: flex; align-items: flex-start; flex-direction: column; justify-content: space-between; p { margin-bottom: 70px; text-align: center;} h5 {text-align: center}'} @media only screen and (max-width: 700px) {
    margin: 0;
    padding: 15px;
    height: auto;
  }
  @media only screen and (max-width: 500px) {
    width: 87%;
  }
  color: white;
  z-index: 1;
`

export default Card
