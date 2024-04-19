import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Paragraph = styled.p`
  font-size: 20px;
`

export const Container = styled.header<{isTransparent: boolean}>`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  width: 100%;
  height: 100px;
  color: white;
  background-color: ${({ isTransparent }) => !isTransparent && `${`rgb(42 51 45)`}` };
  box-shadow: ${({isTransparent}) => !isTransparent && `5px 5px 5px`}
`

export const LinkContent = styled(Link)`
  text-decoration: none;
  margin-top:30px;

`

export const NavItem = styled.button`
  border: none;
  border-radius: 20px;
  color: black;
  padding: 1em;
  cursor: pointer;
  &:hover {
   color: white;
   background-color: rgb(60, 60, 60);
  }
`

export const MultipleNavContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`