import { useState } from "react";
import { Container, Input, Item } from "./styles";

interface InputBoxProps {
  labels: string[];
  createLabels: (labels: string[]) => void;
  deleteLabels: (index: number) => void;
}
export const InputBoxComponent:React.FC<InputBoxProps> = ({labels, createLabels, deleteLabels}) => {
  const [label, setLabel] = useState<string>("");

  const handleEnterKeyPress = (label: string) => {
    labels.push(label);
    createLabels(labels);
    setLabel("")
  }
  
  const deleteAction = (index: number) => {
    deleteLabels(index);
  }

  return (
    <>
      <Container>
        {labels.map((label, index) => (
          <Item key={index}>
            <label>{label}</label>
            <button onClick={() => deleteAction(index)}>x</button>
          </Item> 
        ))}
        <Input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          onKeyDown={(e) => {
          if (e.key === 'Enter' && label !== "" ) {
            handleEnterKeyPress(label);
          }
        }}/>
      </Container>
    </>
  )
}