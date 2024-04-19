import styled from "styled-components";

export const MenuList = styled.div`
    width: 60%;
    margin: auto;
`

export const MenuItem = styled.button`
  margin: 30px 40px;
  cursor: pointer;
  width: 800px;
  background-color: rgb(36, 129, 101);
  color: white;
  font-size: 20px;
  padding: 1em;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: white;
    color:rgb(36, 129, 101);
  }
`
