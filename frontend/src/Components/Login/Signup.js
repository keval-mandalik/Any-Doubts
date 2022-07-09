import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import Nav from "../Nav/Nav"


function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        //Login Logic
    }

    return (
        <Container>
            <Nav />
            <Row>
                <Col md={7} className="d-flex flex-direction-column align-items-center justify-content-center">
                    <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} value={name} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Signup
                        </Button>

                        <div className='py-4'>
                            <p className='text-center'>Already have an account ? <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></p>
                        </div>

                    </Form>
                </Col>
                <Col md={5} className="signup__bg">
                </Col>
            </Row>
        </Container>
    )
}

export default Signup
