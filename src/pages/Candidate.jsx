import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Banner from "../components/Banner";

const Candidate = () => {
  const [candidate, setCandidate] = useState({
    name: "",
    email: "",
    subscription: "Monthly",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setCandidate({
        name: storedUser.name,
        email: storedUser.email,
        subscription: storedUser.subscription || "Monthly",
      });
    }
  }, []);

  const handleChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(candidate));
    alert("Details updated successfully!");
  };

  return (
    <>
      <Banner />
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="p-4 shadow-lg" >
        <h3 className="text-center mb-3">Candidate Details</h3>
        <Form onSubmit={handleSave}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={candidate.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={candidate.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subscription Plan</Form.Label>
            <Form.Select
              name="subscription"
              value={candidate.subscription}
              onChange={handleChange}
            >
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Quarterly</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Save Changes
          </Button>
        </Form>
      </Card>
      </div>
      </>
      
  );
};

export default Candidate;
