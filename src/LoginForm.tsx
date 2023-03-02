import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import './falra.css';

interface ILoginResponse {
  action: string;
  username: string;
  time: string;
  success: boolean;
  message: string;
  token: string;
}

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<ILoginResponse>({
    action: '',
    username: '',
    time: '',
    success: false,
    message: '',
    token: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch('your_login_api_url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const responseData = await response.json();
    setIsLoading(false);
    setResponse(responseData);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <h2 className="text-center mb-4">Log in to your account</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formLoginUsername">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                required
                className="falra-input"
              />
            </Form.Group>

            <Form.Group controlId="formLoginPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                required
                className="falra-input"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3 falra-button" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Log in'}
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

export default LoginForm;
