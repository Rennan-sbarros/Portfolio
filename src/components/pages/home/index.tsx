import imagemPrincipal from '../../../assets/images/photo_programming.svg';
import { FaLinkedinIn, FaGithub, FaTelegram, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export function Home() {
    return (
        <section>

            <div className="container container_home">
                <div className="row align-items-center content_home">
                    
                    <div className="col-md-6">
                        <div className="card_text">
                            <h2>Olá, eu sou</h2>
                            <h1>Rennan Cândido</h1>
                            <h3>Desenvolvedor Front-end</h3>
                        </div>
                    
                        <ul className="redes_sociais">
                            <li>
                            <a
                                href="https://www.linkedin.com/in/rennan-candido1/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn/>
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://github.com/rennan-sbarros"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub/>
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://t.me/Rennancandido"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTelegram/>
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://api.whatsapp.com/send?phone=5581993880394&text=Ol%C3%A1%2C%20Rennan!%20Vim%20atrav%C3%A9s%20do%20seu%20Portf%C3%B3lio."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp/>
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://www.instagram.com/rennan_candid0/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram/>
                            </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <img
                        className='image_dev'
                        src={imagemPrincipal}
                        alt="Imagem de desenvolvedor"
                    >
                    </img>
                    </div>

                </div>
               

            </div>

        </section>

    )
}