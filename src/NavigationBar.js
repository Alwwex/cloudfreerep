import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" className="font">
            <Container>
                <Navbar.Brand as={Link} to="/"><b style={{ fontSize: "1.3rem" }}>Free Cloud Storage</b></Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavItem href="/home">
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                        </NavItem>
                        <NavItem href="/setup">
                            <Nav.Link as={Link} to="/setup" >Setup</Nav.Link>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto">
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavigationBar;
