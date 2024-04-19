import { DocumentPage, HomePage } from "./pages";
import { WithLayout } from "./components";
import { Route, Routes } from "react-router-dom";
import { DocumentDetailPage } from "./pages/document";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/documents" element={<DocumentPage />} />
      <Route path="/documents/document" element ={<DocumentDetailPage/>} />
    </Routes>
        
  )
}

export default WithLayout(App);