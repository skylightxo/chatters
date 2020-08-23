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
      <h1>Welcome!</h1>
      <Form>
        <FormGroup>
          <label htmlFor="#username">Username</label>
          <FormInput
            className="username-input"
            id="#username"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Button onClick={(e) => handleSubmit(e)}>Start chatting!</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default LoginPage;
