import React from "react";
import styled from "styled-components";
import logo from "../Logos/dsc-logo.png";
import { useState } from "react";
import {
  NavBar,
  Hamburger,
  BrandWrapper,
  Link,
  LinkWrapper,
  Links,
  Brand,
} from "../UI/Navbar";

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
              <Link to="/blog">Blog</Link>
            </Links>
            <Links>
              <Link to="/teams">Teams</Link>
            </Links>
            <Links>
              <Link to="/events">Events</Link>
            </Links>
            <Links>
              <Link to="/">About Us</Link>
            </Links>
            <Links>
              <Link to="/#contact">Contact</Link>
            </Links>
          </LinkWrapper>
        )}
      </NavBar>
    </div>
  );
};

export default Nav;
