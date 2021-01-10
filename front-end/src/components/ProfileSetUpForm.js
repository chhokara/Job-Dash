import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';

const ProfileSetUpForm = () => {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/allsetup');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>Male</option>
          <option>Female</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formGridDOB">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" placeholder="DD/MM/YYYY" />
      </Form.Group>

      <Form.Group controlId="formGridStreet Address">
        <Form.Label>Street</Form.Label>
        <Form.Control placeholder="Enter your address" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridProvince">
        <Form.Label>Province</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group controlId="formGridDOB">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="123-456-7890" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Set Up Profile
      </Button>
    </Form>
  );
};

export default ProfileSetUpForm;
