import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const url = 'http://localhost:3001/cep'

export default function AppEndereco() {
  const [post, setPost] = useState([])
  const [show, setShow] = useState(false);
  const [cep, setCep] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setCep([e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value])
    e.preventDefault()
  }

  useEffect(async () => {
    const { data } = await axios.post(url, {
      str : cep
    })
    setPost(data)
  }, [show]);

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
        <Button type="submit">Consultar</Button>
      </Form>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Endereços Completos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!!post && post?.map(({cep, logradouro, bairro, localidade, uf, ddd}, idx)=> {
          return(
          <>
            <ul key={idx}>
              <li>{cep}</li>
              <li>{logradouro}</li>
              <li>{bairro}</li>
              <li>{localidade}</li>
              <li>{uf}</li>
              <li>{ddd}</li>
            </ul>
            <br></br>
          </>)})}
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
