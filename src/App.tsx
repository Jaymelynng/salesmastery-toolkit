import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Scripts from "./pages/Scripts";
import EmailTemplates from "./pages/EmailTemplates";
import FAQs from "./pages/FAQs";
import Tips from "./pages/Tips";
import Notepad from "./pages/Notepad";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/scripts" element={<Scripts />} />
        <Route path="/email-templates" element={<EmailTemplates />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/notepad" element={<Notepad />} />
      </Routes>
    </Router>
  );
}

export default App;