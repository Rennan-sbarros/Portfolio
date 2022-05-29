/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-scroll";

export function Header() {
    
    return (
        <header id="home">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">

                    <a className="navbar-brand" >Rennan</a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a  className="nav-link" href="#">Sobre mim</a> */}
                            <Link
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
                            {/* <a className="nav-link" href="#">Habilidades</a> */}
                            <Link
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
                            {/* <a id="sobremim" className="nav-link" href="#">Projetos</a> */}
                            <Link
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

        </header>
    ) 
}