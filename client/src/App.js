import React, {useEffect} from "react";
import { Header, Login, Register } from "./components/index.js";
import Admin from "./pages/Admin/index.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/index.js";
import Contact from "./pages/Contact/index.js";
import NotFound from "./pages/NotFound/index.js";
import VehicleChecklist from "./pages/VehicleChecklist/index.js";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.js";
import { useDispatch } from "react-redux";
import { verifyToken } from "./reducers/authSlice.js";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Home" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vehiclechecklist" element={<ProtectedRoute><VehicleChecklist /></ProtectedRoute>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>  
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
