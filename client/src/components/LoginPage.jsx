import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { authService } from "../services/AuthService";
import { Form, FormInput, FormGroup, Button } from "shards-react";

function LoginPage({ title }) {
  const [name, setName] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(authService.isAuthorized());

  useEffect(() => {
    document.title = title;
  }, [title]);

  if (isAuthorized) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    authService.authorize(name);
    setIsAuthorized(!isAuthorized);
  };

  return (
    <div className="login">
      <h1 style={{ fontFamily: "Kumbh Sans", margin: "50px 0" }}>Welcome!</h1>
      <Form className="loginForm">
        <FormGroup>
          <FormInput
            style={{ fontFamily: "Kumbh Sans" }}
            className="username-input"
            id="#username"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Button
            style={{ fontFamily: "Kumbh Sans", width: "150px" }}
            onClick={(e) => handleSubmit(e)}
          >
            Start chatting!
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default LoginPage;
