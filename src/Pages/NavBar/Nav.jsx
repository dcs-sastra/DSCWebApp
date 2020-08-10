import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../Logos/dsc-logo.jpg";
import link from "../Logos/link.svg";
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
  const width = useWindowSize().width;
  const [open, setState] = useState(false);

  useEffect(() => {
    setState(width > 768);
  }, [width, location]);

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
            <Links>
              <a
                href="https://medium.com/dsc-sastra-deemed-to-be-university"
                target="_blank"
              >
                <span className="no-underline external-link">Blog</span>
              </a>
            </Links>
          </LinkWrapper>
        )}
      </NavBar>
    </div>
  );
};

function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) return false;

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default Nav;
