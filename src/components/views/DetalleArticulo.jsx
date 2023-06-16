import { Container, Row, Col } from "react-bootstrap"

const DetalleArticulo = () => {
    return (
        <Container className="main bg-menu text-center my-4 p-3 letraBlanca rounded-5" >
            <Row className="m-4">
                <Col xs={12} md={6} className="text-center " >
                    <img src="https://www.elmueble.com/medio/2022/05/03/recetas-sanas-para-cocinar-en-mayo_763db1fc_674x379.png" alt="imagen de producto" className="img-fluid rounded-5" style={{ width: '600px', height: '300px' }} />
                </Col>
                <Col xs={12} md={6} >
                    <article className="p-2">
                        <h3>Receta</h3>
                        <hr />
                        <p className="text-white">Categoria: <span className="text-white">Dulce</span></p>
                        <p className="text-white">Ingredientes: <span className="text-white">Array de ingredientes con una lista desordenada</span></p>
                        <p className="text-white">Procedimiento: <span className="text-white">Array de pasos con una lista ordenada</span></p>
                        <p className="text-white">Tiempo de preparacion: <span className="text-white">1:30hs</span></p>


                    </article>
                </Col>
            </Row>
        </Container>
    );
};

export default DetalleArticulo;