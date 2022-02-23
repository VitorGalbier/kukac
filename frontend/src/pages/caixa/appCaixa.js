import { Form, Button } from 'react-bootstrap'
import React from 'react'

export default function appCaixa() {
  return (
    <>
      <Form.Control size="lg" type="text" placeholder="Valor do Produto" />
      <br></br>
      <Form.Control size="lg" type="text" placeholder="Valor recebido" />
      <br></br>
      <Button type="submit">Button</Button>
    </>


  )
}

