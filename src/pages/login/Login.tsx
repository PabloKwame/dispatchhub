import { Form, Button, Alert } from "react-bootstrap";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../../assets/img/CHRISBnew.jpg";
import img2 from "../../assets/img/pizzaman-logo.png";
import { AuthActionType } from "../../lib/reducers/authReducer";
import { useLogin } from "../../lib/hooks/authHooks/useLogin";





function Login() {

  const { submitData, authDispatch, authState } = useLogin()


  return (
    <section className="vh-100" style={{ backgroundColor: "#960018" }}>
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col xl={10}>
            <Card style={{ borderRadius: "1rem" }}>
              <Row className="g-0">
                <Col md={6} lg={5} className="d-none d-md-block">
                  <Card.Img
                    src={img1}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </Col>
                <Col md={6} lg={7} className="d-flex align-items-center">
                  <Card.Body className="p-4 p-lg-5 text-black">
                    <Form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                        <span className="h1 fw-bold mb-0">
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={img2} style={{ width: "80px", height: "80px" }}></img>
                            <h4 style={{ paddingTop: "5px" }}>Dispatch Hub</h4>
                          </div>
                        </span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                        Sign into your account
                      </h5>

                      <Form.Group className="mb-4" controlId="phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter phone number"
                          value={authState.phoneNumber}
                          onChange={(e) => {
                            authDispatch({ type: AuthActionType.phoneNumber, payload: e.target.value })
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={authState.password}
                          onChange={(e) => {
                            authDispatch({ type: AuthActionType.password, payload: e.target.value })
                          }}
                        />
                      </Form.Group>

                      <div className="pt-1 mb-4">
                        <Button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={submitData}
                          disabled={authState.isLoading}>
                          {authState.isLoading ? "Logging in..." : "Login"}
                        </Button>
                      </div>

                      {authState.isLoginError && <Alert variant="danger">Invalid credentials</Alert>}

                      {/* <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p> */}
                      {/* <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a> */}
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
