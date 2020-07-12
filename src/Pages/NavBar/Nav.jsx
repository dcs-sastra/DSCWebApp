import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../Logos/dsc-logo.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./nav.css";
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
  const location = useLocation();
  const [open, setState] = useState(false);
  const width = window.innerWidth;
  useEffect(() => {
    setState(width >= 768 ? true : false);
  }, [location]);
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
                <span className="no-underline">Blog</span>
              </a>
            </Links>
            <Links>
              <Link to="/">
                {location.pathname == "/" ? (
                  <span className="underline">Home</span>
                ) : (
                  <span className="no-underline">Home</span>
                )}
              </Link>
            </Links>
            <Links>
              <Link to="/teams">
                {location.pathname == "/teams" ? (
                  <span className="underline">Teams</span>
                ) : (
                  <span className="no-underline">Teams</span>
                )}
              </Link>
            </Links>
            <Links>
              <Link to="/events">
                {location.pathname == "/events" ? (
                  <span className="underline">Events</span>
                ) : (
                  <span className="no-underline">Events</span>
                )}
              </Link>
            </Links>
            <Links>
              <Link to="/resources">
                {location.pathname == "/resources" ? (
                  <span className="underline">Resources</span>
                ) : (
                  <span className="no-underline">Resources</span>
                )}
              </Link>
            </Links>
            <Links>
              <Link to="/about">
                {location.pathname == "/about" ? (
                  <span className="underline">About</span>
                ) : (
                  <span className="no-underline">About</span>
                )}
              </Link>
            </Links>
            <Links>
              {/* <Link to="/#contact">Contact</Link> */}
              <HashedLink to="/#contact">
                <span className="no-underline">Contact</span>
              </HashedLink>
            </Links>
          </LinkWrapper>
        )}
      </NavBar>
    </div>
  );
};

export default Nav;
