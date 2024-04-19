import * as Document from "./styles"
import { DocumentType, DocumentsContextType } from "../../consts"
import { useContext } from "react"
import { DocumentContext } from "../../contexts"
import { useNavigate } from "react-router-dom"

export const DocumentComponent: React.FC = () => {
  const props: DocumentsContextType = useContext(DocumentContext);
  const navigate = useNavigate();

  const handleSubmit = (index: number) => {
    props.documentId = index;
    navigate("/documents/document");
  }
  
  return (
    <>
      <Document.MenuList>
        {props.documents.map((document:DocumentType, index:number) => (
            <Document.MenuItem key={index}  onClick={() => handleSubmit(index)}>{ document.title }</Document.MenuItem>
        ))}
      </Document.MenuList>

    </>
  )
}