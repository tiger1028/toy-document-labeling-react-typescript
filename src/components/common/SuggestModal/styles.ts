import styled from "styled-components";

export const Screen = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`
export const Container = styled.div`
  position: relative;
  top: 150px;
  left: 25vw;
  background-color: white;
  display: grid;
  padding: 30px;
  width: 50vw;
  height: fit-content;
  gap: 30px;
`

export const Title = styled.a`
  font-size: 48px;  
`

export const ModalContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const SuggestContainer = styled.div`
  display: grid;
  width: 40%;
`

export const FuncContainer = styled.div`
  display: grid;
  width: 40%;
  align-items: center;
`

export const SuggestItem = styled.button`
  border: none;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

export const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 2rem;
  `

export const CheckMark = styled.img`
  width: 15px;
  height: 15px;
`