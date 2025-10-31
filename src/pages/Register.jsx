import React, { useState } from "react";
import Banner from "../components/Banner";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import lunchBox2 from '../assets/img/boxes/box2.png';
import './css/loginRegister.css';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "",rePassword:"" });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.rePassword) {
      // alert(JSON.stringify(formData, null, 2));
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Register Successfully");
      navigate("/login");
    } else {
      alert("❌ Passwords do not match. Please re-enter correctly.");
    }
    
  }

 
  return (
    <>
      <Banner />
      <Row className="m-4" style={{color:"#086708"}}>
        <Col md='8'>
          <h2 className="text-center mb-3">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" required></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={formData.password} onChange={handleChange}  placeholder="Enter your Password" required></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Re-Enter Password</Form.Label>
              <Form.Control type="password" name="rePassword" value={formData.rePassword} onChange={handleChange} placeholder="Re-Enter your Password" required></Form.Control>
            </Form.Group>

            <Button style={{backgroundColor:"#086706"}} type="submit" className="w-100">Register</Button>
          </Form>
            <p className="text-center">
              Already have an account? <a href="/login" style={{color:'#086708', fontWeight:"bold"}}>Register</a>
            </p>
        </Col>
        <Col style={{borderLeft: '2px solid #086708',height: '500px',}}  md='4'>
          
          <div style={{ perspective: '1000px'}}>
            <Image src={lunchBox2} alt='box Image' style={{ width: '100%', height: '400px', animation: 'rotate3d 20s linear infinite', transformStyle: 'preserve-3d' }}></Image>
            <p className="food-quotes">Fresh, healthy, and made with care.</p>
          </div>
        </Col>
      </Row>
    </>
  );
}