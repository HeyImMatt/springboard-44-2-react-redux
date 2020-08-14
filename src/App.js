import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import MemeForm from './MemeForm';

function App() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={{size: 8, offset: 3}}>
          <h1>Meme Generator</h1>
        </Col>
        <MemeForm />
      </Row>
    </Container>
  );
}

export default App;
