import { useState } from "react";
import Banner from "../components/Banner";
import { Form, Button, Row, Col, Image, Carousel } from "react-bootstrap";
import lunchBox1 from '../assets/img/boxes/box1.png';
import './css/loginRegister.css';
import { useNavigate } from "react-router-dom";



export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      localStorage.setItem("isLoggedIn", true);
      alert("Login Successfully!");
      navigate('/');
    } else {
      alert("Invalid email or password! please try again");
      setEmail("")
    setPassword("")
    }
    
  }
  return (
    <>
      <Banner />
      <Row className="m-4" style={{color:"#086708"}}>
        <Col md='8'>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit} className="p-4 m-5">
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </Form.Group >

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </Form.Group>

          <Button style={{backgroundColor:"#086706"}} type="submit" className="w-100">
                Login
              </Button> 
          </Form>
            <p className="text-center">
              Don’t have an account? <a href="/register" style={{color:'#086708', fontWeight:"bold"}}>Register</a>
            </p>
        </Col>
        <Col style={{borderLeft: '2px solid #086708',height: '500px',}}  md='4'>
         
          <div style={{ perspective: '1000px'}}>
            <Image src={lunchBox1} alt='box Image' style={{ width: '100%', height: '400px', animation: 'rotate3d 20s linear infinite', transformStyle: 'preserve-3d' }}></Image>
            <p className="food-quotes">Wholesome meals, straight from our kitchen to your heart.</p>
          </div>
        </Col>
      </Row>

    </>
  );
}