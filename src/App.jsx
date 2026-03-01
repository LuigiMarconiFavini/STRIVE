import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Routines from "./pages/Routines";
import Supplements from "./pages/Supplements";
import Nutrition from "./pages/Nutrition";
import Results from "./pages/Results";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/supplements" element={<Supplements />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;