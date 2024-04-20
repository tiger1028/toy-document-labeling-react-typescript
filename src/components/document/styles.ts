import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: 100vh;
  margin: auto;
`


export const CardTitile = styled.p` 
  color: white;
  font-size: 40px;
  font-weight: bold;
`

export const Strong = styled.strong`

`

export const Paragraph = styled.p`
  color: white;
  font-size: 30px;
`

export const LinkContent = styled.a`
  margin-top: 100px;
  text-decoration: none;
`

export const StyledButton = styled.button`
  background-color: #1f1f1f;
  color: #fbfbfb;
  width: 200px;
  font-size: 20px;
  padding: 1em;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: #373535;
  }
  @keyframes moving {
    0% {transform: translateY(0px)}
    50% {transform: translateY(10px)}
    100% {transform: translateY(0px)}
  }
  animation: moving 2s ;
  animation-iteration-count: infinite;
`

export const Button = styled.button`
  margin-top: 50px;
  background-color: #1f1f1f;
  margin-left: 30px;
  color: #fbfbfb; 
  width: 100px;
  padding: 1em;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: #373535;
  }
`