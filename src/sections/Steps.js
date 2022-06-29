import styled from "styled-components";
import done from "../assets/done.svg";

const Steps = () => (
  <StepsSection>
    <Container>
      <h1>Unlimited actions to create</h1>
      <CardsContainer>
        <Card className="violet">
          <div>
            <h2>example #1</h2>
            <h3>Collect & allocate</h3>
            <p>
              Collect assets from different places, swap them at the best rate
              among decentralized exchanges, and join a specific ERC-4626 vault.
            </p>
          </div>
        </Card>
        <Card className="violet">
          <div>
            <h2>example #2</h2>
            <h3>Set withdraw goals</h3>
            <p>
              Provide liquidity to an AMM pool, keep track of the earnings
              obtained from swap fees and liquidity mining, and withdraw those
              gains on a monthly basis.
            </p>
          </div>
        </Card>
        <Card className="violet">
          <div>
            <h2>example #3</h2>
            <h3>Bridge yield protocols</h3>
            <p>
              Bridge assets between lending protocols from different layers
              depending on which one offers the best interest rate.
            </p>
          </div>
        </Card>
        <Card className="violet">
          <div>
            <h2>example #4</h2>
            <h3>Trustless delegation</h3>
            <p>
              Keep full custody of your assets by automating most of your
              treasury management actions and asigning a thid party for specific
              ones.
            </p>
            <button>View use case</button>
          </div>
        </Card>
      </CardsContainer>
    </Container>
  </StepsSection>
);

const StepsSection = styled.section`
  background: #191930;
  margin: auto;
  color: white;
  padding: 0 0 30px 0;
  text-align: right;
`;

const Container = styled.div`
  max-width: 1056px;
  margin: auto;
  text-align: right;
  h1 {
    font-family: "Poppins-Bold";
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 1px;
    color: #fcfcfc;
    text-align: left;
    max-width: 833px;
    @media only screen and (max-width: 700px) {
      font-size: 28px;
      line-height: 44px;
      white-space: break-spaces;
      padding: 0 15px;
      text-align: center;
    }
  }
`;

const CardsContainer = styled.div`
  display: grid;
  gap: 17px 17px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 388px;
  justify-items: end;
  @media only screen and (max-width: 700px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto;
    justify-items: center;
    align-items: center;
    align-content: center;
    padding: 0 20px;
  }
`;
const Card = styled.div`
  border-radius: 16px;
  padding: 0 26px 26px 26px;
  width: 218px;
  @media only screen and (max-width: 700px) {
    margin: 0;
    width: 100%;
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
  }
  background: #4e4b66;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    font-family: "Poppins-Bold";
    font-size: 14px;
    text-align: right;
    margin: 12px 0;
    @media only screen and (max-width: 700px) {
      font-size: 16px;
      text-align: center;
    }
  }
  h3 {
    font-family: "Poppins-Bold";
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.99px;
    text-align: left;
    margin: 30px 0;
    @media only screen and (max-width: 700px) {
      padding-top: 15px;
    }
  }
  p {
    font-family: "Poppins-SemiBold";
    font-size: 17px;
    line-height: 28px;
    letter-spacing: 0.75px;
    text-align: left;
    min-height: 84px;
    @media only screen and (max-width: 700px) {
      margin: 5px;
      font-size: 13px;
      line-height: 17px;
      margin-right: 30px;
    }
  }
  button {
    font-family: "Poppins-SemiBold";
    font-size: 17px;
    background: #191930;
    border: none;
  }
  &.violet {
    background: #a524ff;
    padding: 0 30px;
    margin: 0;
    width: 247px;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
    @media only screen and (max-width: 700px) {
      width: 100%;
      padding: 0;
    }

    @media only screen and (min-width: 701px) {
      h3 {
        font-size: 28px;
      }
    }
  }
`;

export default Steps;
