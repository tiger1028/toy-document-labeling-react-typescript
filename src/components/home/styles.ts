import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("images/background.jpg");
  background-size: cover;
  background-position: center;
  color: white;
`

export const Title = styled.div`
  font-size: 45px;
  padding: 1em;
  font-weight: bold;
  color: white;
`

export const Paragraph = styled.h2`
  font-size: 40px;
  font-weight: 300;
  width: 40%;
  text-align: center;

`