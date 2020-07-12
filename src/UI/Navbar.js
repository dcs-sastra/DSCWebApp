import styled from "styled-components";
import { Link as Linker } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = styled.nav`
  display: flex;
  padding: 10px 2vw;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: white;
  transition: 1s ease-in;
  box-shadow: 0px 1px 15px var(--shadow-grey);
  @media (max-width: 768px) {
    flex-flow: column;
    justify-content: space-evenly;
    padding: 2vh 2vw;
  }
`;

const Brand = styled.img`
  margin-top: 10px;
  max-width: 250px;
  @media (max-width: 768px) {
    width: 80%;
    margin-top: 4% 0;
    max-width: 300px;
  }
`;

const Links = styled.li`
  margin-left: 2vw;
  display: inline;
  list-style: none;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 4%;
    width: 100%;
  }
  & > a {
    text-decoration: none;
    color: black;
    &: hover {
      color: grey;
    }
  }
`;

const LinkWrapper = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Link = styled(Linker)`
  text-decoration: none;
  width: 100%;
  color: black;
  &: hover {
    color: grey;
  }
`;
const HashedLink = styled(HashLink)`
  text-decoration: none;
  width: 100%;
  color: black;
  &: hover {
    color: grey;
  }
`;

const BrandWrapper = styled.div`
  
  position: relative;
  
  @media (max-width: 786px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > a {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Hamburger = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: inline;
    position: absolute;
    right: 0px;  
  }
`;

export {
  NavBar,
  Hamburger,
  BrandWrapper,
  Link,
  LinkWrapper,
  Links,
  Brand,
  HashedLink,
};
