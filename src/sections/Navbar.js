import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/navbar-logo.svg";
import MenuOptions from "./MenuOptions";
import Menu from "../components/Menu";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const [isOpen, setOpen] = useState(false);
  const medium = 700;
  return (
    <NavbarSection>
      <Container>
        <img src={logo} alt="logo" />
        {width >= medium ? (
          <MenuOptions />
        ) : (
          <>
            <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
            <Menu open={isOpen} />
          </>
        )}
      </Container>
    </NavbarSection>
  );
};

const NavbarSection = styled.section`
  background: transparent;
  margin: auto;
  .hamburger-react {
    position: relative;
    z-index: 3;
  }
`;

const Container = styled.div`
  padding: 0 40px 0 40px;
  display: flex;
  max-width: 94%;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 370px) {
    padding: 0 20px 0 20px;
  }
  @media only screen and (min-width: 700px) {
    width: 100%;
  }
  @media only screen and (min-width: 2000px) {
    max-width: 1100px;
    margin: auto;
  }
  img {
    @media only screen and (max-width: 1000px) {
      width: 50%;
    }
  }
`;

export default Navbar;
