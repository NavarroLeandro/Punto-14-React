import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Articulo = () => {
    return (
        <Card className='m-1 opacidadCard rounded-5' bg='dark' text='light'>
            <Card.Img variant="top" src="https://www.gastronosfera.com/sites/default/files/styles/cabecera_contenido/public/field/image/comida-marroqui.png" className='rounded-5'/>
            <Card.Body className=''>
                <Card.Title>Paella picante</Card.Title>
                <Card.Text>
                    Alta receta amigo posta no te vas a arrepentir te lo juro por messi
                </Card.Text>
                <Button variant="outline-secondary">Ver más</Button>
            </Card.Body>
        </Card>
    );
};

export default Articulo;