import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import './RegistrationForm.css';

interface IRegistrationResponse {
  action: string;
  username: string;
  time: string;
  success: boolean;
  message: string;
}

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<IRegistrationResponse>({
    action: '',
    username: '',
    time: '',
    success: false,
    message: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch(`http://localhost:8000/api/users/v1/register`);
    const user = await response.json();

    setIsLoading(false);
    setResponse(user.response);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <h2 className="text-center mb-4">Sign up for an account</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                required
                className="registration-input"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                required
                className="registration-input"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                required
                className="registration-input"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3 registration-button" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Create account'}
            </Button>
          </Form>

          {response.message && (
            <Alert variant={response.success ? 'success' : 'danger'} className="mt-4">
              {response.message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
