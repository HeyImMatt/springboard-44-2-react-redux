import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col className="text-center">
          <h1>Todo List</h1>
        </Col>
      </Row>
    </Container>
  );
}