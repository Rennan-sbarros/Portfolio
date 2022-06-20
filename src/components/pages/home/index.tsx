import imagemPrincipal from '../../../assets/images/photo_programming.svg';
import { FaLinkedinIn, FaGithub, FaTelegram, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

export function Home() {
    return (
        <section>
            <div className="container container_home">
                <div className="row align-items-center content_home">
                    
                    <Fade bottom duration={3500}>
                    <div className="col-md-6">
                        <div className="card_text">
                            <h1>Olá, eu sou</h1>
                            <h2>
                                Rennan Cândido
                            </h2>
                            <h3>Desenvolvedor Front-end</h3>
                        </div>
                    
                        <ul className="redes_sociais">
                            <li>
                            <a
                                href="https://www.linkedin.com/in/rennan-candido1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="linkedin"
                            >
                                <FaLinkedinIn/>
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://github.com/rennan-sbarros"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Github"
                            >
                                <FaGithub/>
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://t.me/Rennancandido"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Telegram"
                            >
                                <FaTelegram/>
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://api.whatsapp.com/send?phone=5581993880394&text=Ol%C3%A1%2C%20Rennan!%20Vim%20atrav%C3%A9s%20do%20seu%20Portf%C3%B3lio."
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Whatsapp"
                            >
                                <FaWhatsapp/>
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://www.instagram.com/rennan_candid0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="instagram"
                            >
                                <FaInstagram/>
                            </a>
                            </li>
                        </ul>
                    </div>
                    </Fade>
                    <Fade top duration={3500}>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img
                            className='image_dev'
                            src={imagemPrincipal}
                            alt="Imagem de desenvolvedor"
                        >
                        </img>
                    </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}