import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  margin-top: 100px;
  box-shadow: 5px 5px 5px;
  background-color: #0d1115;
  color: black;
`

export const Input = styled.input`
  width: 100px;
  background-color: #e8eae9;
  height: 20px;
  border: none;
  border-radius: 10px;
  margin: 10px;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e8eae9;
  border: none;
  border-radius: 10px;
  margin: 10px;
  padding: 2px;

  button {
    text-align: center;
    border-radius: 20px;
    font-size: 10px;
    font-weight: bold;
    background-color: #7b7b83;
    &:hover {
      background-color: #4e4e5b;
    }
  }
`