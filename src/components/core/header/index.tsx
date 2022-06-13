/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

export function Header() {
    
    return (
            <Navbar className="navbar fixed-top" expand="lg">
                <Container className="container-fluid">
                    <Navbar.Brand className="d-none d-lg-block">Rennan</Navbar.Brand>
                    
                    <Navbar.Toggle>
                        <FaBars/>
                    </Navbar.Toggle>

                    <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
                        <Nav className="navbar-nav ms-auto mb-2 mb-lg-0" >
                            <div className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                > Sobre mim </Link>
                            </div>
                            <div className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                > Habilidades </Link>
                            </div>
                            <div className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                > Projetos </Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       
        
    ) 
}