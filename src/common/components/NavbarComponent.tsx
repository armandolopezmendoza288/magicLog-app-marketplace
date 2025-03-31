import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import magiclogLogo from "../../images/logo.png";
import { Offcanvas } from 'react-bootstrap';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export const NavbarComponent = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary mb-3 d-flex flex-column py-3">
                <Container>
                    <div className="d-flex w-100 justify-content-between">
                        <Navbar.Brand href="/"><img width={200} src={magiclogLogo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    </div>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1">
                                <Nav.Link style={{ width: "5em" }} onClick={() => navigate('/login')}>Ingresar</Nav.Link>
                                <Nav.Link style={{ width: "10em" }} onClick={() => navigate('/signup')} >Crear Cuenta</Nav.Link>
                                <Nav.Link style={{ width: "10em" }} className='d-flex' href="/">
                                    <svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                <Container className='mt-3'>
                    <Form className="d-flex w-100 ">
                        <Form.Control
                            type="search"
                            placeholder="Buscar productos, nombre, sku y mas.."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}
