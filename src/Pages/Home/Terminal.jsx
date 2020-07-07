import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import { useState } from "react";
import "react-typist/dist/Typist.css";
import { HashLink as Link } from "react-router-hash-link";

const Container = styled.div`
  width: 85%;
  height: 65vh;
  margin: 6vh auto;
  border-radius: 40px;
  box-shadow: 1px 1px 15px var(--shadow-grey);
  display: grid;
  background-color: white;
  grid-template-areas:
    "f f f f f f f f"
    "b m m m m m s s";
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const MenuBar = styled.div`
  grid-area: f;
  background-color: #e3e3e3;
  width: 100%;
  height: 100%;
  border-radius: 40px 40px 0 0;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: 50%;
  }
`;

const Text = styled.div`
  text-align: center;
  width: 100%;
  font-size: 22px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Buttons = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100px;
  margin: 0 10px;
  background-color: ${(props) => `var(--${props.color})`};
  @media (max-width: 768px) {
    margin: 0 4px;
    width: 15px;
    height: 15px;
  }
`;

const Sidebar = styled.div`
  grid-area: b;
  box-shadow: 10px 0 30px -2px #f0f0f0;
  padding: 25px 40px;
  max-width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h4``;
const Content = styled.li`
  list-decoration: none;
  display: block;
  padding-left: 15px;
  margin: 4%;
  width: 100%;
  color: grey;
  &:hover {
    background-color: #d6e5ff;
    border-radius: 5px;
    cursor: pointer;
  }
  & > a {
    color: grey;
    text-decoration: none;
  }
  & > a:active,
  a:hover {
    color: grey;
    text-decoration: none;
  }
`;

const Main = styled.div`
  grid-area: m;
  width: 100%;
  height: 100%;
  padding: 5%;
  box-shadow: 10px 0 12px #f0f0f0;
  @media (max-width: 768px) {
    box-shadow: none;
    padding: 3%;
  }
`;

const TypedHead = styled.h3`
  color: var(--blue);
  padding: 0;
  margin: 0;
  font-size: 24px;
  margin-left: 5%;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const BlackSpan = styled.span`
  color: black;
  margin-left: ${(props) => (props.noMargin ? "0" : "5%")};
`;
const GreenSpan = styled.span`
  color: var(--green);
`;
const RightSideBar = styled.div`
  grid-area: s;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const OrganisationText = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
  line-height: 1;
  color: grey;
`;

const Terminal = () => {
  let width = window.innerWidth;
  let [activeTab, setActiveTab] = useState(0);
  let functionJsx = (
    <>
      <Typist
        cursor={{ hideWhenDone: true }}
        avgTypingDelay={50}
        key={"rtuyijgug"}
      >
        <TypedHead>
          void <BlackSpan noMargin>functions () {"{"}</BlackSpan>
        </TypedHead>
        <TypedHead>
          <BlackSpan>we_code();</BlackSpan>
        </TypedHead>
        <TypedHead>
          <BlackSpan>we_organise();</BlackSpan>
        </TypedHead>
        <TypedHead>
          <BlackSpan>we_learn();</BlackSpan>
        </TypedHead>
        <TypedHead>
          <BlackSpan>we_teach();</BlackSpan>
        </TypedHead>
        <TypedHead>
          <BlackSpan>
            printf(<GreenSpan>" We are Team DSC SASTRA "</GreenSpan>);
          </BlackSpan>
        </TypedHead>
        <TypedHead>
          <BlackSpan noMargin>{"  }"}</BlackSpan>
        </TypedHead>
      </Typist>
    </>
  );

  let poweredJsx = (
    <>
      <Typist
        cursor={{ hideWhenDone: true }}
        avgTypingDelay={50}
        onTypingDone={() => console.log("I am from powered by")}
        key={"jakhgjahdsg"}
      >
        <TypedHead>
          void <BlackSpan noMargin>powered_by () {"{"}</BlackSpan>
        </TypedHead>
        <TypedHead>
          <BlackSpan>
            printf(<GreenSpan>" Google Developers "</GreenSpan>);
          </BlackSpan>
        </TypedHead>
        <TypedHead>
          <BlackSpan noMargin>{"  }"}</BlackSpan>
        </TypedHead>
      </Typist>
    </>
  );
  console.log(activeTab);
  return (
    <Container>
      <MenuBar>
        <Buttons>
          <Button color="red" />
          <Button color="yellow" />
          <Button color="green" />
        </Buttons>
        <Text>dscsastra.project</Text>
      </MenuBar>
      <Sidebar>
        <Title>dscsastra.project</Title>
        <ul>
          <Content onClick={() => setActiveTab(0)}>functions</Content>
          <Content onClick={() => setActiveTab(1)}>powered_by</Content>
        </ul>
        <Title>Teams</Title>
        <ul>
          <Content>
            <Link to="/teams/#Android">android</Link>
          </Content>
          <Content>
            <Link to="/teams/#Web">web</Link>
          </Content>
          <Content>
            <Link to="/teams/#Flutter">flutter</Link>
          </Content>
          <Content>
            <Link to="/teams/#Cloud">cloud</Link>
          </Content>
          <Content>
            <Link to="/teams/#Machine_learning">machine learning</Link>
          </Content>
          <Content>
            <Link to="/teams/#AR_/_VR">ar / vr</Link>
          </Content>
          <Content>
            <Link to="/teams/#Graphic_Designing">graphic designing</Link>
          </Content>
          <Content>
            <Link to="/teams/#Content_Writing">content writing</Link>
          </Content>
          <Content>
            <Link to="/teams/#Marketing">marketing</Link>
          </Content>
          <Content>
            <Link to="/teams/#Event_Coverage">event coverage</Link>
          </Content>
        </ul>
      </Sidebar>
      <Main>
        <TypedHead>
          <BlackSpan noMargin> class </BlackSpan>
          DscSastraUniversity
          <BlackSpan>{"  {"} </BlackSpan>
        </TypedHead>
        <TypedHead>
          <BlackSpan noMargin>public: </BlackSpan>
        </TypedHead>
        {activeTab === 0 ? functionJsx : poweredJsx}
        <TypedHead>
          <BlackSpan noMargin>{"  }"}</BlackSpan>
        </TypedHead>
      </Main>
      <RightSideBar>
        <OrganisationText block>Build Complete.</OrganisationText>
        <OrganisationText>Organisation Running Successfully.</OrganisationText>
      </RightSideBar>
    </Container>
  );
};

export default Terminal;
