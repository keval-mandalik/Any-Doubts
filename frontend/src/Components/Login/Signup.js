import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Signup.css";
import Nav from "../Nav/Nav"
import Cookies from "js-cookie"
import botImg from "../../images/profile-pic.jpg"
import {useNavigate} from 'react-router-dom'
function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [uploadingImg, setUploadingImg] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    function validateImg(e) {
        const file = e.target.files[0];
        if (file.size >= 1048576) {
            return alert("File size should be less than 1 MB");
        } else {
            setPicture(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

    async function uploadImage() {
        // const files = e.target.files;
        const data = new FormData();
        data.append('file', picture);
        data.append('upload_preset', 'anyDoubts');
        try {
            setUploadingImg(true);
            let res = await fetch("https://api.cloudinary.com/v1_1/kevumandalik/image/upload", {
                method: 'POST',
                body: data
            });

            const urlData = await res.json();
            // setImage(urlData.secure_url);
            // console.log(urlData.secure_url);
            setUploadingImg(false);
            // setUploadUrl(urlData.secure_url);
            return urlData.secure_url;

        } catch (error) {
            setUploadingImg(false);
            console.log(error);
        }
    }

    async function handleSignup(e) {
        e.preventDefault();

        console.log("clicck");
        console.log(email);
        console.log(password);
        console.log(name);
        if (!picture) return alert("Please upload your profile picture");
        const url = await uploadImage(picture);
        console.log(url);
        axios.post('http://localhost:3001/api/auth/register', {
            email: email,
            name: name,
            password: password,
            picture: url
        })
            .then((res) => {
                console.log(res.data.authtoken);
                Cookies.set('user', res.data.authtoken);
                navigate("/login");
            }, (error) => {
                console.log(error);
            });
        // axios({
        //     method: "POST",
        //     url: "http://localhost:3001/api/auth/createuser",
        //     headers: {
        //       "content-type": "application-json"
        //     },
        //     data: {
        //       email:`${email}`,
        //       password:`${password}`,
        //       name:`${name}`
        //     },
        //   })
        //   .then(res => {
        //     console.log("res", res);
        //   })
        //   .catch(err => {
        //     console.log("error in request", err);
        //   });
    }

    return (
        <Container>
            <Nav />
            <Row>
                <Col md={7} className="d-flex flex-direction-column align-items-center justify-content-center">
                    <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
                    <h1 className='text-center'>Create Account</h1>
                    <div className='signup-profile-pic__container'>
                    <img src={imagePreview || botImg} className='signup-profile-pic' alt="profile" />
                    <label htmlFor="image-upload" className='image-upload-label'>
                        <i className='fas fa-plus-circle add-picture-icon'></i>
                    </label>
                    <input type="file" id="image-upload" hidden accept="image/png, image/jpeg, image/jpg" onChange={validateImg} />
                    </div>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" name='name' onChange={(e) => setName(e.target.value)} value={name} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        {uploadingImg ? "Signing you up.." : "Signup"}
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
