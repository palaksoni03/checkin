import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

const CreatePost: React.FC = () => {
    return (
      <Container>
      <br/>
      <br/>
      <Form>
        <Form.Group controlId="formBasicText">
        <Form.Label>Hotel Name</Form.Label>
        <Form.Control type="text" placeholder="Hotel Name" />
        </Form.Group>
        <Form.Group controlId="formBasicText">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
        </Form.Group>
        <Form.Group controlId="formBasicText">
        <Form.Label>Type</Form.Label>
        <Form.Control type="text" placeholder="Type" />
        </Form.Group>
        <Form.Group controlId="formBasicNumber">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
        Register
        </Button>
        </Form>
      </Container>
    )
}

export default CreatePost;
