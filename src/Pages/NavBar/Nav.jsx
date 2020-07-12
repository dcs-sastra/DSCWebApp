import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../Logos/dsc-logo.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
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
                Blog
              </a>
            </Links>
            <Links>
              <Link to="/">
                {location.pathname == "/" ? (
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "0.5px 0.5px 2px #727272",
                    }}
                  >
                    Home
                  </span>
                ) : (
                  "Home"
                )}
              </Link>
            </Links>
            <Links>
              <Link to="/teams">
                {location.pathname == "/teams" ? (
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "0.5px 0.5px 2px #727272",
                    }}
                  >
                    Teams
                  </span>
                ) : (
                  "Teams"
                )}
              </Link>
            </Links>
            <Links>
              <Link to="/events">
                {location.pathname == "/events" ? (
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "0.5px 0.5px 2px #727272",
                    }}
                  >
                    Events
                  </span>
                ) : (
                  "Events"
                )}
              </Link>
            </Links>
            <Links>
              <Link to="/resources">
                {location.pathname == "/resources" ? (
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "0.5px 0.5px 2px #727272",
                    }}
                  >
                    Resources
                  </span>
                ) : (
                  "Resources"
                )}
              </Link>
            </Links>
            <Links>
              <Link to="/about">
                {location.pathname == "/about" ? (
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "0.5px 0.5px 2px #727272",
                    }}
                  >
                    About
                  </span>
                ) : (
                  "About"
                )}
              </Link>
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
