import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import MemeForm from './MemeForm';


function App() {
  const INITIAL_FORM_STATE = {
    memeUrl: '',
    memeTopText: '',
    memeBottomText: ''
  }
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setFormData((fdata) => ({
      ...fdata,
      [name]: value
    }))
  }

  return (
    <Container>
      <Row className="align-items-center">
        <Col md={{size: 8, offset: 3}}>
          <h1>Meme Generator</h1>
        </Col>
        <MemeForm formData={formData} changeHandler={changeHandler} />
      </Row>
    </Container>
  );
}

export default App;
