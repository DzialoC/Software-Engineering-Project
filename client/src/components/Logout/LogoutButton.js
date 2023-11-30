import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/authActions.js"; // Adjust the path as needed

const LogoutButton = ({ className }) => {
  const history = useNavigate();
  const dispatch = useDispatch(); // If using Redux

  const handleLogout = async () => {
    try {
      // Make a logout request to the server
      await axios.delete("http://localhost:5000/logout");

      // Dispatch logout action to update Redux state
      dispatch(logout());

      // Navigate to the "/login" route
      history("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button onClick={handleLogout} className={className}>
    <br></br>
    Log Out
    </button>
  );
};

export default LogoutButton;
