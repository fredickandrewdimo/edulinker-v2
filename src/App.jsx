import React from "react";

// Components
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import OptionBar from "./layouts/OptionBar";
import Footer from "./components/Footer";
import Preview from "./pages/Preview";

// Context
import MyProvider from "./context/MyProvider";

// Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-darkWhite">
      <MyProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students/:id" element={<Preview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </MyProvider>
    </div>
  );
};

export default App;
