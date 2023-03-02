import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import './falra.css';

interface RegistrationFormProps {
  onSuccess: () => void;
}

interface RegistrationFormData {
  username: string;
  email: string;
  password: string;
}

interface RegistrationResponseData {
  action: string;
  username: string;
  time: string;
  success: boolean;
  message: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/users/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData: RegistrationResponseData = await response.json();
      if (responseData.success) {
        onSuccess();
      } else {
        setErrorMessage(responseData.message);
      }
    } catch (error) {
      setErrorMessage('Registration failed. Please try again later.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <h2 className="text-center mb-4">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="falra-input"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="falra-input"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="falra-input"
              />
            </Form.Group>

            {errorMessage && (
              <Alert variant="danger" className="mt-4">
                {errorMessage}
              </Alert>
            )}

            <Button variant="primary" type="submit" className="w-100 mt-3 falra-button">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
