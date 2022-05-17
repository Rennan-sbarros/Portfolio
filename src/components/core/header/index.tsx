/* eslint-disable jsx-a11y/anchor-is-valid */

export function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <a className="navbar-brand" >Rennan</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre mim</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projetos</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </header>
    ) 
}