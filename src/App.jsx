import React from "react";

// Components
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import OptionBar from "./layouts/OptionBar";
import Footer from "./components/Footer";
import MyProvider from "./context/MyProvider";

// Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-darkWhite">
      <MyProvider>
        <Router>
          <Navbar />
          <OptionBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </MyProvider>
    </div>
  );
};

export default App;
