import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const urlCarro = `http://localhost:3001/carro`

export default function Carro() {
    const [postCarro, setPostCarro] = useState('')
    const [carro, setCarro] = useState([]);
    const enviarCarro = (e) => {
        setCarro([e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value])
        e.preventDefault()
    }
    useEffect(async () => {
        const { data } = await axios.post(urlCarro, {
            modelo: carro[0],
            ano_de_fabricacao: carro[1],
            marca: carro[2],
            qtd_portas: carro[3]
        })
        setPostCarro([data])
    });
    return (
        <>
            <Form onSubmit={enviarCarro}>
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

            <div>
                {!!postCarro && postCarro?.map(({ modelo, ano_de_fabricacao, marca, qtd_portas }, idxCarro) => {
                    return (
                        <>
                            <ul key={idxCarro}>
                                <li>{modelo}</li>
                                <li>{ano_de_fabricacao}</li>
                                <li>{marca}</li>
                                <li>{qtd_portas}</li>
                            </ul>
                            <br></br>
                        </>)
                })}
            </div>

            <br></br>
        </>
    )
}
