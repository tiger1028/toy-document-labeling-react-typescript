import { Button, Title, ModalContent, SuggestItem, Screen, Container, SuggestContainer, FuncContainer, CheckMark } from "./styles";
import { useState } from "react";
import { INITIAL_SUGGESTLABELS } from "../../../consts";
import CheckMarkSVG from "./check-mark.svg"

interface SuggestModalProps {
  createLabels: (labels: string[]) => void;
  modalOpen: (flag: boolean) => void;
}


export const SuggestModalComponent: React.FC<SuggestModalProps> = ({ createLabels, modalOpen }) => {
  const [isChecked, setIsChecked] = useState<boolean[]>([]);
  const labels: string[] = INITIAL_SUGGESTLABELS;
  const checkedLabels : string[] = [];
  const checkLabels = (index: number) => {
    if (isChecked[index] == true)  {
      setIsChecked((previousState) => {
        const isCheckedState = [...previousState];
        isCheckedState[index] = false;
        return isCheckedState;
      });
    }
    else {
      setIsChecked((previousState) => {
        const isCheckedState = [...previousState];
        isCheckedState[index] = true;
        return isCheckedState;
      });
    }
  }

  const onSave = () => {
    labels.map((label:string, index:number) => {
      if (isChecked[index] == true) {
        checkedLabels.push(label);
      }
    })
    createLabels(checkedLabels);
    modalOpen(false);
  }

  return (
    <Screen>
      <Container>
        <Title>Suggest Options</Title>
        <ModalContent>
          <SuggestContainer>
            {labels.map((label, index) => (
              <SuggestItem key={index} onClick={() => checkLabels(index)}>
                {label}
                {isChecked[index] && <CheckMark src={CheckMarkSVG} />}
              </SuggestItem>
            ))}
          
          </SuggestContainer>
          <FuncContainer>
            <Button onClick={onSave}>Save</Button>
            <Button onClick={() => modalOpen(false)}>Close</Button>
            </FuncContainer>
          </ModalContent>
      </Container>
    </Screen>
  )
}