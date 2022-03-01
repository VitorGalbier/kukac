import { Accordion } from 'react-bootstrap';
import './App.scss';
import Caixa from './pages/caixa/appCaixa'
import Endereco from './pages/endereco/appEndereco'
import Palindromo from './pages/palindromo/appPalindromo'
import Veiculo from './pages/veiculo/appVeiculo'


function App() {


    return (
      <>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Consulta CEP</Accordion.Header>
            <Accordion.Body>
              <Endereco />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Caixa</Accordion.Header>
            <Accordion.Body>
              <Caixa />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Palindromo</Accordion.Header>
            <Accordion.Body>
              <Palindromo />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Veiculo</Accordion.Header>
            <Accordion.Body>
              <Veiculo />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
  export default App;
