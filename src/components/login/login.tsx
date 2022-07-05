import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { UserCredentials } from "../../apis/api.types";
import { loginUser } from "../../apis/validation.api";
import "./login.css";

export const Login: React.FC = () => {
  let history = useHistory();
  const [isLoginError, setIsLoginError] = useState<boolean>(false);
  const handleFormSubmission = (event: any) => {
    event.preventDefault();
    const loginCredentials: UserCredentials = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    loginUser(loginCredentials)
      .then((responseData) => {
        if (responseData.body.token) {
          localStorage.setItem("token", responseData.body.token);
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        setIsLoginError(true);
      });
  };

  return (
    <>
      <h1 className="mb-5">Welcome to Maintenance Operation Portal</h1>
      <div className="login-form-container">
        <div className="login-form">
          <Form onSubmit={handleFormSubmission}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {isLoginError && (
              <p className="text-danger">Invalid Credentails </p>
            )}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
