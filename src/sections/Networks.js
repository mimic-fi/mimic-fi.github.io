import React from "react";
import styled from "styled-components";
import ethereum from "../assets/ethereum_logo.svg";
import polygon from "../assets/polygon_logo.svg";

const Networks = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpointMedium = 1000;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <NetworksSection>
      {width >= breakpointMedium && <h1>Now available on</h1>}
      <ButtonsSection>
        <a href="https://mainnet.mimic.fi" target="_blank">
          <img src={ethereum} /> Ethereum
        </a>
        <a href="https://polygon.mimic.fi" target="_blank">
          <img src={polygon} /> Polygon
        </a>
      </ButtonsSection>
    </NetworksSection>
  );
};

const NetworksSection = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-family: "Poppins-Bold";
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.75px;
    text-align: left;
    padding-right: 30px;
  }
  img {
    padding-right: 10px;
    height: 30px;
  }
  a {
    margin: 0 10px;
    display: flex;
    padding: 10px 15px;
    border: 1px solid white;
    border-radius: 5px;
    font-weight: 500;
    font-size: 1.25rem;
    font-family: "Poppins-Bold";
    @media only screen and (max-width: 700px) {
      margin: 10px 10px;
    }
    &:hover {
      background-color: #a524ff87;
    }
  }
`;

const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 700px) {
    margin: 30px 0 0 0;
  }
`;

export default Networks;
