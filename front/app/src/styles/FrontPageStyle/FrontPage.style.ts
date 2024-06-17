import styled from "styled-components";

export const FrontPageStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: pink;

  p {
    color: white;
    font-size: 32px;
    font-weight: medium;
    max-width: 60%;
    margin-top: 0%;
  }
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid white;
  color: white;
  margin: 2%;
  padding: 15px 32px;
  width: 200px;
  height: 60px;
  &:hover {
    background-color: #bf4f74;
  }
`;

export const NameStyle = styled.div`
  color: white;
  font-size: 32px;
  font-weight: medium;
`;

export const WelcomeStyle = styled.div`
  color: white;
  font-size: 48px;
  font-weight: bold;
  padding-top: 5%;
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
`;
