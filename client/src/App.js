import React from "react";
import {
  Accordion,
  Button,
  Checkbox,
  DropMenu,
  Email,
  Footer,
  Header,
  InputField,
  MForm,
  Modal,
  Navbar,
  Pagination,
  Password,
  RadioButton,
  Textarea,
  Login,
  Dashboard,
  Register,
} from "./components/index.js";
import Admin from "./pages/Admin/index.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/index.js";
import Contact from "./pages/Contact/index.js";
// import ErrorPage from './pages/ErrorPage/in';
import Home from "./pages/Home/index.js";
import NotFound from "./pages/NotFound/index.js";
import VehicleChecklist from "./pages/VehicleChecklist/index.js";

import "./App.css";

function App() {
  const [loginData, setLoginData] = React.useState();
  const [sessionData, setSessionData] = React.useState();
  const [logoutData, setLogoutData] = React.useState();
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Home" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vehiclechecklist" element={<VehicleChecklist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
