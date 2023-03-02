import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CourseState from "./context/course/CourseState";
import Login from "./components/Login";
import ShowCourse from "./components/showCourse";
import AddCourse from "./components/AddCourse";
import Alert from "./components/Alert";
import ContactUs from "./components/ContactUs";
import "./App.css";
import ShowMessage from "./components/ShowMessage";

const App = () => {
  return (
    <CourseState>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/courses" element={<ShowCourse />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/courses" element={<ShowCourse />} />
          <Route path="/admin/contact" element={<ShowMessage />} />
          <Route path="/admin/addcourse" element={<AddCourse />} />
        </Routes>
      </Router>
    </CourseState>
  );
};

export default App;
