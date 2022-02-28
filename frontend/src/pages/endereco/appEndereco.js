import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const url = 'http://localhost:3001/cep'

export default function AppEndereco() {
  const [post, setPost] = useState({})
  const [show, setShow] = useState(false);
  const [cep, setCep] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setCep([e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value])
    e.preventDefault()
    console.log(cep)
  }

  useEffect(async () => {
    const { data } = await axios.post(url, {
      str : cep
    })
    console.log(cep)
    setPost(data)
    console.log(post)
  }, show);

  return (
    <>
      <Form onSubmit={handleShow}>
        <Form.Control size="lg" type="text" placeholder="Digite o CEP" />
        <br></br>
        <Form.Control size="lg" type="text" placeholder="Digite o CEP" />
        <br></br>
        <Form.Control size="lg" type="text" placeholder="Digite o CEP" />
        <br></br>
        <Form.Control size="lg" type="text" placeholder="Digite o CEP" />
        <br></br>
        <Form.Control size="lg" type="text" placeholder="Digite o CEP" />
        <br></br>
        <Button type="submit">Button</Button>
      </Form>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {post.logradouro}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
