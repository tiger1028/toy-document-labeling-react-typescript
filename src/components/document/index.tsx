import { useContext, useState } from "react"
import { Button, CardTitile, Container, LinkContent, Paragraph, Strong, StyledButton } from "./styles"
import { DocumentContext } from "../../contexts"
import { DocumentsContextType, DocumentType} from "../../consts";
import { InputBoxComponent, SuggestModalComponent } from "../common";

export const DocumentDetailComponent: React.FC = () => {
  const props: DocumentsContextType = useContext(DocumentContext);
  const documentId = props.documentId;
  const document: DocumentType = props.documents[documentId];
  const [labels, setLabels] = useState<string[]>([]);
  const [isOpendModal, setIsOpenModal] = useState<boolean>(false);

  const createLabels = (labels: string[]) => {
    setLabels(labels);
  }

  const deleteLabels = (index: number) => {
    setLabels((previousLabels) => {
      const currentLabels = [...previousLabels];
      currentLabels.splice(index, 1);
      return currentLabels;
    });
  }

  const modalOpen = (flag: boolean) => {
    setIsOpenModal(flag);
  }

  const onSaveButton = () => {
    props.setLabels(labels, documentId);
  }

  const onResetButton = () => {
    setLabels([]);
  }

  const onSuggestButton = () => {
    modalOpen(true);
  }

  return (
    <> {
      document && (
      <Container>
          <CardTitile><Strong>Title:</Strong> { document.title }</CardTitile>
          <Paragraph><Strong>Description: </Strong> {document.body}</Paragraph>
          <LinkContent href={`${document.url}`} target="_blank">
          <StyledButton  >Go to Article...</StyledButton>
          </LinkContent>
          <InputBoxComponent createLabels={createLabels} deleteLabels={deleteLabels} labels={labels} />
            <Button onClick={onSaveButton}>Save</Button>
            <Button onClick={onResetButton}>Reset</Button>
            <Button onClick={onSuggestButton}>Suggest Label</Button>
          {isOpendModal == true && (
            <SuggestModalComponent createLabels={createLabels} modalOpen={modalOpen} />
            )}
      </Container>
      )
    }
    </>
  )
}