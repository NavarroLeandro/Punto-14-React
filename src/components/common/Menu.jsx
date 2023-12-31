
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom"
import { useState } from 'react';

const Menu = () => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(false);
  };

  const handleNavLinkClick = () => {
    if (expand) {
      setExpand(false);
    }
  };

  return (
    <Navbar  expand="md" className="mb-3 bg-menu">
      <Container fluid>
        <Navbar.Brand as={Link} to={""} className="text-light">DELIKATESE <img src="./src/assets/a41708395258b88b8334b95478bd4b76-ilustracion-de-plato-de-cocina.png" alt="Logo" style={{ width: '50px', height: '50px' }}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleExpand} />
        <Navbar.Collapse id="navbar-nav" className={expand ? "show" : ""}>
          <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink end to={""} className="nav-item nav-link text-light" onClick={handleNavLinkClick}>Inicio</NavLink>
                  <NavLink end to={""} className="nav-item nav-link text-light" onClick={handleNavLinkClick}>Administrador</NavLink>
                  <NavLink end to={""} className="nav-item nav-link text-light" onClick={handleNavLinkClick}>Registro</NavLink>
                  <NavLink end to={""} className="nav-item nav-link text-light" onClick={handleNavLinkClick}>Ingresar</NavLink>
                  <NavLink end to={""} className="nav-item nav-link text-light" onClick={handleNavLinkClick}>Salir</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;