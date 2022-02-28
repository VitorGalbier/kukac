import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';

const url = `http://localhost:3001/palindromo`

export default function AppPalindromo() {
  const [post, setPost] = useState('')
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true)
    setNumber([e.target[0].value, e.target[1].value])
    e.preventDefault()
  };

  useEffect(async () => {
    const { data } = await axios.post(url, {
      inicial: number[0],
      final: number[1]
    })
    console.log(data)
    setPost(data.join(' - '))
  }, [show]);

  return (
    <>
      <Form onSubmit={handleShow}>
        <Form.Control name="inicial" size="lg" type="text" placeholder="Digite o Valor Inicial"
        />
        <br></br>
        <Form.Control name="final" size="lg" type="text" placeholder="Digite o Valor Final"
        />
        <br></br>
        <Button type="submit" >Enviar</Button>
      </Form>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Palíndromo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {post}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
