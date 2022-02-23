import React from 'react'
import { Form, Button } from 'react-bootstrap'


export default function appPalindromo() {
  return (
    <>
      <Form.Control size="lg" type="text" placeholder="Digite o Valor Inicial" />
      <br></br>
      <Form.Control size="lg" type="text" placeholder="Digite o Valor Final" />
      <br></br>
      <Button type="submit">Button</Button>
    </>
  )
}
