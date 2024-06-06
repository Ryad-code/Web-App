import styled from "styled-components";

export const FrontPageStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: pink;

  h1 {
    color: white;
    font-size: 68px;
    font-weight: bold;
    padding-top: 5%;
    padding-bottom: 3%;
  }

  h2 {
    color: white;
    font-size: 42px;
    font-weight: medium;
  }

  p {
    color: white;
    font-size: 32px;
    font-weight: medium;
    max-width: 60%;
    margin-top: 0%;
  }

  button {
    background-color: blueviolet;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
  }
`;

export const PresentationStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const SubFrontStyle = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;
