import React from "react";
import styled from "styled-components";
import logo from "../Logos/dsc-logo.jpg";
import { useState } from "react";
import {
  NavBar,
  Hamburger,
  BrandWrapper,
  Link,
  LinkWrapper,
  Links,
  Brand,
  HashedLink,
} from "../../UI/Navbar";

const Nav = () => {
  const width = window.innerWidth;
  console.log(width);
  const [open, setState] = useState(width >= 768 ? true : false);

  return (
    <div>
      <NavBar>
        <BrandWrapper>
          <Link to="/">
            <Brand src={logo} />
          </Link>
          <Hamburger
            src="https://img.icons8.com/metro/26/000000/menu.png"
            onClick={() => setState(!open)}
          />
        </BrandWrapper>
        {open && (
          <LinkWrapper>
            <Links>
              <a
                href="https://medium.com/dsc-sastra-deemed-to-be-university"
                target="_blank"
              >
                Blog
              </a>
            </Links>
            <Links>
              <Link to="/teams">Teams</Link>
            </Links>
            <Links>
              <Link to="/events">Events</Link>
            </Links>
            <Links>
              <Link to="/resources">Resources</Link>
            </Links>
            <Links>
              <Link to="/about">About</Link>
            </Links>
            <Links>
              {/* <Link to="/#contact">Contact</Link> */}
              <HashedLink to="/#contact">Contact</HashedLink>
            </Links>
          </LinkWrapper>
        )}
      </NavBar>
    </div>
  );
};

export default Nav;
