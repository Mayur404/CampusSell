import LandingPage from "./pages/landingPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginpage.tsx";

export default function App() {
  return (
    <Router>
      {/* Background wrapper - applies to entire site */}
      <div className="relative w-full min-h-screen bg-[#FFFDF2] overflow-hidden">
        
        {/* Background layers */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDF2] via-[#F7F5EA] to-[#FFFDF2]" /> */}

        {/* All your content with proper z-index */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}