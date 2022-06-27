import React from "react";
import styled from "styled-components";
import check from "../assets/white-check.svg";
import app from "../assets/app.svg";
import appLarge from "../assets/app-large.svg";
import appMobile from "../assets/app-mobile.svg";
import logo from "../assets/violet-logo.svg";

const Features = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1000;
  const large = 1900;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <FeaturesSection>
      <Logo src={logo} />
      <div className="container">
        <h1>Connect actions to strategies</h1>
        <h2>
          Mimic strategies hold the integration logic to interact with different
          DeFi protocols
        </h2>
        <Container>
          {width < breakpoint && <App src={appMobile} />}
          {width < breakpoint && <h3>All the basics & simplified for DeFi</h3>}
          <Box>
            {width >= breakpoint && <h3>All the basics</h3>}
            <div>
              <img src={check} alt="tick" />
              <p>Yield-bearing</p>
            </div>
            <div>
              <img src={check} alt="tick" />
              <p>Auto-compounding</p>
            </div>
            <div>
              <img src={check} alt="tick" />
              <p>Extendable</p>
            </div>
            <div>
              <img src={check} alt="tick" />
              <p>And more</p>
            </div>
          </Box>
          <Box>
            {width >= breakpoint && <h3>ERC-4626 compatible</h3>}
            <div>
              <img src={check} alt="tick" />
              <p>Yearn Vaults</p>
            </div>
            <div>
              <img src={check} alt="tick" />
              <p>mStable Vaults</p>
            </div>
            <div>
              <img src={check} alt="tick" />
              <p>Balancer Vaults</p>
            </div>
            <div>
              <img src={check} alt="tick" />
              <p>And more</p>
            </div>
          </Box>
        </Container>
      </div>
      {width >= breakpoint && <App src={width >= large ? appLarge : app} />}
    </FeaturesSection>
  );
};

const FeaturesSection = styled.section`
  background: linear-gradient(95.08deg, #535664 2.49%, #202d3a 97.19%);
  margin: auto;
  color: white;
  padding: 150px 0 80px 104px;
  display: grid;
  align-items: stretch;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  position: relative;

  @media only screen and (min-width: 1900px) {
    div.container {
      min-width: 773px;
      margin-left: auto;
    }
  }

  @media only screen and (min-width: 370px) and (max-width: 1000px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    padding: 80px 40px 80px 40px;
  }

  @media only screen and (max-width: 370px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    padding: 80px 20px 250px 20px;
  }

  h1 {
    @media only screen and (min-width: 600px) {
      max-width: 598px;
    }
    font-family: "Poppins-Bold";
    font-size: 60px;
    line-height: 90px;
    letter-spacing: 1.33075px;
    color: #fcfcfc;
    margin-bottom: 0;
    @media only screen and (max-width: 1000px) {
      font-size: 32px;
      line-height: 44px;
      letter-spacing: 0.9999998807907104px;
      text-align: center;
      margin: auto;
    }
  }
  h2 {
    @media only screen and (min-width: 500px) {
      max-width: 470px;
    }
    font-family: "Poppins";
    font-size: 17px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #fcfcfc;
    @media only screen and (max-width: 1000px) {
      text-align: center;
      margin: auto;
    }
  }
`;

const App = styled.img`
  max-width: 100%;
  @media only screen and (max-width: 1000px) {
    max-width: 100%;
    margin-top: 80px;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 70px;
  transform: translate(0%, -50%);
  z-index: 15;
  @media only screen and (max-width: 1000px) {
    width: 118px;
    left: 35px;
  }
  @media only screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 180px;
    left: 50px;
  }
  @media only screen and (min-width: 1900px) {
    left: calc(50% - 598px);
    transform: translate(-100%, -50%);
  }
`;

const Container = styled.div`
  width: auto;
  margin: auto auto 100px -50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media only screen and (max-width: 1000px) {
    justify-content: space-between;
    margin: auto;
    max-width: 333px;
  }
  h3 {
    font-family: "Poppins-Bold";
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 1px;
    color: #ffffff;
    @media only screen and (max-width: 1000px) {
      font-size: 25px;
      text-align: left;
      margin: 100px 40px 20px 0;
    }
  }
  p {
    font-family: "Poppins";
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.75px;
    color: #fcfcfc;
    @media only screen and (max-width: 1000px) {
      font-size: 17px;
    }
  }
`;

const Box = styled.div`
  margin: 0 50px;
  @media only screen and (max-width: 1000px) {
    margin: 0;
  }
  text-align: left;
  div {
    display: flex;
    img {
      margin-right: 30px;
      @media only screen and (max-width: 1000px) {
        margin-right: 10px;
        width: 25px;
      }
    }
  }
`;

export default Features;
