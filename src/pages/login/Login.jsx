import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useParams } from 'react-router-dom'; // Import useParams


const SIGN_IN_MUTATION = gql`
  mutation LoginAdministrator($phoneNumber: String!, $password: String!) {
    loginAdministrator(phoneNumber: $phoneNumber, password: $password) {
      data {
        jwt
        phoneNumber
      }
      message
      success
      statusCode
    }
  }
`;

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [loginAdministrator] = useMutation(SIGN_IN_MUTATION, {
    onCompleted: (data) => handleLoginCompleted(data),
    onError: (error) => handleLoginError(error),
  });

  const params = useParams(); // Initialize useParams

  const handleLogin = () => {
    if (!phoneNumber || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    loginAdministrator({
      variables: { phoneNumber, password },
    });
  };

  const handleLoginCompleted = (data) => {
    setLoading(false);
    const { data: signInData, message, success } = data.loginAdministrator;

    if (success) {
      // Handle successful login, e.g., store the JWT token
      console.log('JWT Token:', signInData.jwt);
      setError('');
      // Change the URL to the home page route
      window.location.href = '/home';
    } else {
      setError(message);
    }
  };

  const handleLoginError = (error) => {
    setLoading(false);
    setError('An error occurred while logging in.');
    console.error(error);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </Form>
    </div>
  );
}

export default Login;
