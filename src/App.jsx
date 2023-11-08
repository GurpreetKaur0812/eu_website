import './App.css'
import React from "react";
import Acet  from "./pages/Acet";
import "./index.css";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Student from "./pages/Student";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import NCC from './pages/NCC';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/acet" element={<Acet />} />
        <Route path="/students" element={<Student />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/NCC" element={<NCC />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App
