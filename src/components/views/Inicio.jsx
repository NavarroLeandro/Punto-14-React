import React from "react";
import { Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import ArticulosInicio from "./Articulos/ArticulosInicio";

const Inicio = () => {
  return (
    <Container className="main bg-menu text-center my-4 p-3 rounded-5">
      <h1 className="letraBlanca">
      <img src="../src/assets/a41708395258b88b8334b95478bd4b76-ilustracion-de-plato-de-cocina.png" alt="Logo" style={{ width: '50px', height: '50px' }}></img>
       DELIKATESE 
      <img src="../src/assets/a41708395258b88b8334b95478bd4b76-ilustracion-de-plato-de-cocina.png" alt="Logo" style={{ width: '50px', height: '50px' }}></img></h1>
      <h5 className="letraBlanca my-2">Recetas para vos, para mi, para todos!</h5>
      <Form className="d-flex justify-content-center my-4">
        <InputGroup className="w-50">
          <Form.Select aria-label="Default select example">
            <option value="">Buscar por categoria</option>
            <option value="1">Saladas</option>
            <option value="2">Dulces</option>
            <option value="3">Mexicanas</option>
            <option value="3">Europeas</option>
          </Form.Select>
        </InputGroup>
      </Form>
      <ArticulosInicio></ArticulosInicio>
    </Container>
  );
};

export default Inicio;
