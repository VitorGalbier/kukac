import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const urlMoto = `http://localhost:3001/moto`

export default function Moto() {
    const [postMoto, setPostMoto] = useState('')
    const [moto, setMoto] = useState([]);
    const enviarMoto = (e) => {
        console.log(e)
        setMoto([e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value])
        e.preventDefault()
    }
    useEffect(async () => {
        const { data } = await axios.post(urlMoto, {
            modelo: moto[0],
            ano_de_fabricacao: moto[1],
            marca: moto[2],
            qtd_passageiros: moto[3]
        })
        setPostMoto([data])
    });
    return (
        <>
            <Form onSubmit={enviarMoto}>
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
                <div>
                    {!!postMoto && postMoto?.map(({ modelo, ano_de_fabricacao, marca, qtd_passageiros }, idxMoto) => {
                        return (
                            <>
                                <ul key={idxMoto}>
                                    <li>{modelo}</li>
                                    <li>{ano_de_fabricacao}</li>
                                    <li>{marca}</li>
                                    <li>{qtd_passageiros}</li>
                                </ul>
                                <br></br>
                            </>)
                    })}
                </div>
                <br></br>
            </Form>
        </>
    )
}
