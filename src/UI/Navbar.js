import styled from "styled-components";
import { Link as Linker } from "react-router-dom";

const NavBar = styled.nav`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: white;
  transition: 1s ease-in;
  box-shadow: 0px 1px 15px var(--shadow-grey);
  @media (max-width: 768px) {
    flex-flow: column;
    justify-content: space-evenly;
  }
`;

const Brand = styled.img`
  width: 20vw;
  min-width: 250px;
  @media (max-width: 768px) {
    margin-top: 4% 0;
  }
`;

const Links = styled.li`
  display: inline;
  list-style: none;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 4%;
    width: 100%;
  }
`;

const LinkWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Link = styled(Linker)`
  text-decoration: none;
  color: black;
  &: hover {
    color: grey;
  }
`;

const BrandWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Hamburger = styled.img`
  display: "inline";
  @media (min-width: 768px) {
    display: none;
  }
`;

export { NavBar, Hamburger, BrandWrapper, Link, LinkWrapper, Links, Brand };
