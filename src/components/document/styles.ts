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
  background-color: #6a5acd;
  color: #ff6347;
  width: 200px;
  font-size: 20px;
  padding: 1em;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: #ff6347;
    color: #6a5acd;
  }
  @keyframes moving {
    0% {transform: translateY(0px)}
    50% {transform: translateY(10px)}
    100% {transform: translateY(0px)}
  }
  animation: moving 2s ;
  animation-iteration-count: infinite;
`
export const InputContent = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 150px;
  margin-top: 100px;
  background-color: black;
`
export const Input = styled.input`
  width: 150px;
  height: 30px;
  border: none;
  border-radius: 10px;
`

export const Button = styled.button`
  margin-top: 50px;
  background-color: #6a5acd;
  margin-left: 30px;
  color: #ff6347; 
  width: 100px;
  padding: 1em;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: #ff6347;
    color: #6a5acd;
  }
`