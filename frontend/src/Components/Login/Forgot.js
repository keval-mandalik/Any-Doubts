import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col, Container } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
import axios from "axios"
import "./Login.css";
import Nav from "../Nav/Nav"
// Components
// import Button from './Button/Button';
// Styles
// import { Wrapper } from './Login.styles';
// // Context
// import { Context } from './Context';


export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

  function handleLogin(e) {
      e.preventDefault();
      axios.post('http://localhost:3001/api/auth/forgot-password', {
          email: email,
          //   password: password
        })
        .then((data)=>{
          console.log("submit")
        console.log(data,"userRegister");
        alert(data.status)
      }).catch((err)=>{
        console.log(err);
      })
  }

  return (
    <Container>
      <Nav />
      <Row>
        <Col md={5} className="login__bg">
        </Col>
        <Col md={7} className="d-flex flex-direction-column align-items-center justify-content-center">
            {/* <h1>Reset Password</h1> */}
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
            </Form.Group> */}
            <Button variant="primary" type="submit">
              Submit
            </Button>

            <div className='py-4'>
              <p className='text-center'>Don't have an account ? <Link to="/signup" style={{ textDecoration: 'none' }}>Signup</Link></p>
            </div>
          </Form>
        </Col>

      </Row>
    </Container>
  )
}


// export default Login;