/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
export function Header() {
    
    return (  
       <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <div className="logo">
                    <Logo />
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><FaBars/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link
                            href="nav-link"
                            className="nav-link"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        > Sobre mim </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href="nav-link"
                            className="nav-link"
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        > Habilidades </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href="nav-link"
                            className="nav-link"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        > Projetos </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    ) 
}