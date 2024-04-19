import { DocumentType } from "./documents";

export interface DocumentsContextType  {
  documents: DocumentType[];
  documentId: number;
  setLabels: (labels: string[], id : number) => void;
}
