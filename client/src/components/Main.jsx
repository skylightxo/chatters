import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "../index.css";
import Chat from "./Chat";
import { authService } from "../services/authService";

const Main = () => {
  const [isAuthorized, setIsAuthorized] = useState(authService.isAuthorized());

  if (!isAuthorized) {
    return <Redirect to="/login" />;
  }

  const handleLogout = () => {
    authService.logout();
    setIsAuthorized(false);
  };

  return (
    <>
      <div className="header">
        <p className="logo">Chatters!</p>
        <p style={{ cursor: "pointer" }} onClick={() => handleLogout()}>
          Logout
        </p>
      </div>
      <Chat />
    </>
  );
};

export default Main;
