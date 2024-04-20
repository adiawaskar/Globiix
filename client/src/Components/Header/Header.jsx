import "./Header.css";
import { useNavigate } from "react-router-dom";
import React from "react";

const Header = ({ connectedAddress }) => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };

  const handleCreate = () => {
    navigate("/create");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav>
          <ul>
            <li onClick={handleHome}>Home</li>
            <li onClick={handleCreate}>Create</li>
            <li>List</li>
            <li onClick={handleContact}>Contact</li>
            {connectedAddress && (
              <li className="connected-wallet">{connectedAddress}</li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


