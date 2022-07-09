import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import Nav from "../Nav/Nav"

import { useNavigate } from 'react-router-dom';
// Components
// import Button from './Button/Button';
// Styles
import { Wrapper } from './Login.styles';
// Context
import { Context } from './Context';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();

    //Login Logic
  }


  //     const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [error, setError] = useState(false);

  //   const [_user, setUser] = useContext(Context);
  //   const navigate = useNavigate();

  //   const handleSubmit = async () => {
  //     setError(false);
  //     try {
  //       // Authenticate User here if true then setUser()
  //       navigate('/');
  //     } catch (error) {
  //       setError(true);
  //     }
  //   };

  //   const handleInput = e => {
  //     const name = e.currentTarget.name;
  //     const value = e.currentTarget.value;

  //     if (name === 'username') setUsername(value);
  //     if (name === 'password') setPassword(value);
  //   };

  let username = "om";
  // let password = "abc";
  let handleInput = () => { }
  let error = false;

  return (
    //     <Wrapper>
    //   <label>Enter your information:</label>
    //   <div>
    //  <label>username</label>
    //   <input 
    //     autocomplete="off"
    //     type='text'
    //     value={username}
    //     name='username'
    //     onChange={handleInput}
    //     required
    //   />

    //   </div>
    //   <div>
    //       <label>password</label>
    //   <input
    //     type='password'
    //     value={password}
    //     name='password'
    //     onChange={handleInput}
    //     required
    //   />

    //   </div>
    //   {error && <div className='error'>Check your username or password!</div>}
    //   {/* <Button text='Login' callback={handleSubmit} /> */}
    //   {/* Button bnavanu baki hji */}

    // </Wrapper>
    <Container>
      <Nav />
      <Row>
        <Col md={5} className="login__bg">
        </Col>
        <Col md={7} className="d-flex flex-direction-column align-items-center justify-content-center">
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>

            <div className='py-4'>
              <p className='text-center'>Don't have an account ? <Link to="/signup" style={{ textDecoration: 'none' }}>SignUp</Link></p>
            </div>
          </Form>
        </Col>

      </Row>
    </Container>
  )
}


// export default Login;