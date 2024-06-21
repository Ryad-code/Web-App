import styled from "styled-components";

export const SubContainerStyle = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: pink;
  color: white;
`;

export const MainTitleStyle = styled.div`
  font-size: 48px;
  font-weight: bold;
  padding-top: 5%;
`;

export const SubTitleStyle = styled.div`
  font-size: 32px;
  font-weight: medium;
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid white;
  color: white;
  margin: 3%;
  padding: 15px 32px;
  width: 200px;
  height: 60px;
  &:hover {
    background-color: #bf4f74;
  }
`;

export const TextStyle = styled.div`
  font-size: 22px;
  width: 60%;
`;
