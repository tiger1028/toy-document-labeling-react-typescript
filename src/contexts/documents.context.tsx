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
  
  const [documents, setDocuments] = useState<DocumentType[]>(() => {
    const temp = localStorage.getItem("documents") ?? ""
    if(temp) {
    try {
      const documents = JSON.parse(temp);
      if (documents && documents.length > 0) {
        return documents;
      } else {
        console.log("No documents found in localStorage, setting to INITIAL_DOCUMENTS")
        return INITIAL_DOCUMENTS;
      }
    }
    catch (error) {
      console.error('Error parsing documents from localStorage:', error);
      return INITIAL_DOCUMENTS;
      }
    } else {
      console.log('No documents found in localStorage, setting to INITIAL_DOCUMENTS');
      return INITIAL_DOCUMENTS;
    }
  } 
   
  );

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

  const saving = () => {
    localStorage.removeItem('documents');
    localStorage.setItem('documents', JSON.stringify(documents));
  }

  const documentsState: DocumentsContextType = {
    documents: documents,
    documentId: 0,
    setLabels: setLables
  } 

  useEffect(() => {
    saving();
  }, [documents])
  
  return (
    <DocumentContext.Provider value = {documentsState}>
      {children}
    </DocumentContext.Provider>
  )
}