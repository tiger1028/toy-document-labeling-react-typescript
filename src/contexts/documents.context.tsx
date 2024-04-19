import { DocumentType, INITIAL_DOCUMENTS, DocumentsContextType } from "../consts";
import React, { useEffect, useState } from 'react';

interface DocumentContextProps {
  children: React.ReactNode;
}

export const DocumentContext = React.createContext<DocumentsContextType>({
  documents: [],
  documentId: 0,
  setLabels: () => {}
})

export const DocumentContextProvider: React.FC<DocumentContextProps> = ({ children }) => {
  
  const [documents, setDocuments] = useState<DocumentType[]>([]);

  const setLables = (labels: string[], id: number) => {
    const newDocument = documents.map((document) => {
      if (document.id == id) {
        document.labels = labels;
      }
      return document
    })
    setDocuments(newDocument);
    console.log(documents)
  }

  const loading = () => {
    const temp = localStorage.getItem('documents');
    try {
      const documents = JSON.parse(temp ?? "");
      if (documents.length > 0)
        setDocuments(documents);
      else
        setDocuments(INITIAL_DOCUMENTS);
    }
    catch (err) {
      setDocuments(INITIAL_DOCUMENTS);
    }
  }

  const saving = (documents : DocumentType[]) => {
    localStorage.removeItem('documents');
    localStorage.setItem('documents', JSON.stringify(documents));
  }

  const documentsState: DocumentsContextType = {
    documents: documents,
    documentId: 0,
    setLabels: setLables
  } 

  useEffect(() => {
    loading()
  }, [] )

  useEffect(() => {
    saving(documents);
  }, [documents])
  
  return (
    <DocumentContext.Provider value = {documentsState}>
      {children}
    </DocumentContext.Provider>
  )
}