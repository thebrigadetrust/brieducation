import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PdfViewer from "./components/PdfViewer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pdf-view" element={<PdfViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
