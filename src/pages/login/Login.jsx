import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useParams } from 'react-router-dom'; // Import useParams
import {Container, Row, Col,  Card, Img} from 'react-bootstrap';
import img1 from '../../img/CHRISBnew.jpg'
import img2 from '../../img/pizzaman-logo.png'


const SIGN_IN_MUTATION =  gql`
mutation LoginAdministrator($phoneNumber: phoneNumber_String_NotNull_minLength_9_maxLength_13!, $password: password_String_NotNull_minLength_6_maxLength_256!) {
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
  `

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
    

    <section className="vh-100" style={{ backgroundColor: '#F07470'}}>
    <Container className="py-5 h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col xl={10}>
          <Card style={{ borderRadius: '1rem' }}>
            <Row className="g-0">
              <Col md={6} lg={5} className="d-none d-md-block">
                <Card.Img
                  src={img1}
                  alt="login form"
                  className="img-fluid"
                  style={{ borderRadius: '1rem 0 0 1rem' }}
                />
              </Col>
              <Col md={6} lg={7} className="d-flex align-items-center">
                <Card.Body className="p-4 p-lg-5 text-black">

                  <Form>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                      <span className="h1 fw-bold mb-0"> 
                        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                          <img src={img2} style={{width:'80px', height:'80px'}}></img>
                          <h4 style={{paddingTop:'5px'}}>Dispatch Hub</h4>
                        </div>
                      </span>
                    </div>

                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                      Sign into your account
                    </h5>

                    <Form.Group className="mb-4" controlId="phoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>

                    
                    <div className="pt-1 mb-4">
                      <Button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleLogin} disabled={loading}>{loading ? 'Logging in...' : 'Login'}</Button>
                    </div>
                   
                     {error && <Alert variant="danger">{error}</Alert>}

                    <a className="small text-muted" href="#!">Forgot password?</a>
                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                      Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a>
                    </p>
                    <a href="#!" className="small text-muted">Terms of use.</a>
                    <a href="#!" className="small text-muted">Privacy policy</a>
                  </Form>

                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
  );
}

export default Login;
