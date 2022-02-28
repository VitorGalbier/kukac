import { Form, Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react'
import axios from 'axios';

const url = `http://localhost:3001/caixa`

export default function AppCaixa() {
  const [post, setPost] = useState('')
  const [show, setShow] = useState(false);
  const [valor, setValor] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setValor([e.target[0].value, e.target[1].value])
    e.preventDefault()
  }

  useEffect(async () => {
    const { data } = await axios.post(url, {
      valorProduto: valor[0],
      dinheiro: valor[1]
    })
    console.log(data)
    setPost(data)
  }, [show]);
  return (
    <>
      <Form onSubmit={handleShow}>
        <Form.Control size="lg" type="text" placeholder="Valor do Produto" />
        <br></br>
        <Form.Control size="lg" type="text" placeholder="Valor recebido" />
        <br></br>
        <Button type="submit">Calcular!</Button>
      </Form>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Caixa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {post}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>


  )
}

