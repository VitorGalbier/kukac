import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';

const urlCarro = `http://localhost:3001/carro`
const urlMoto = `http://localhost:3001/moto`

export default function appVeiculo() {
  
  
  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Modelo</Form.Label>
            <Form.Control type="text" placeholder="Modelo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Ano de Fabricação</Form.Label>
            <Form.Control type="text" placeholder="Ano de Fabricação" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Marca</Form.Label>
            <Form.Control type="text" placeholder="Marca" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Portas</Form.Label>
            <Form.Control type="number" placeholder="Portas" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Cadastrar Carro
        </Button>
      </Form>
      <br></br>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Modelo</Form.Label>
            <Form.Control type="text" placeholder="Modelo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Ano de Fabricação</Form.Label>
            <Form.Control type="text" placeholder="Ano de Fabricação" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Marca</Form.Label>
            <Form.Control type="text" placeholder="Marca" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Passageiros</Form.Label>
            <Form.Control type="number" placeholder="Passageiros" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Cadastrar Moto
        </Button>
      </Form>

    </>
  )
}
