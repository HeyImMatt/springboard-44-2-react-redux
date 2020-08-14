import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import MemeForm from './MemeForm';
import Meme from './Memes';
import { useDispatch } from 'react-redux';

function App() {
  const INITIAL_FORM_STATE = {
    memeUrl: '',
    memeTopText: '',
    memeBottomText: '',
  };
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const dispatch = useDispatch();
  
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((fdata) => ({
      ...fdata,
      [name]: value,
    }));
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_MEME', payload: {...formData}});
    setFormData(INITIAL_FORM_STATE);
  }

  return (
    <Container>
      <Row className="align-items-center">
        <Col md={{ size: 8, offset: 3 }}>
          <h1>Meme Generator</h1>
        </Col>
        <MemeForm formData={formData} changeHandler={changeHandler} submitHandler={submitHandler} />
        <Meme />
      </Row>
    </Container>
  );
}

export default App;
