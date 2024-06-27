import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomPage";
import AddEvent from "./pages/AddEvent";
import EditEventPage from "./pages/EditEventPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddEvent />} />
        <Route path="/edit/:id" element={<EditEventPage />} />
      </Routes>
    </Router>
  );
};

export default App;
