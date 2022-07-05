import { FaDownload } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import imagem_about from "../../../assets/images/photo_programming_about.svg";
import CV_Rennan from "../../../assets/pdf/CV_Rennan.pdf";

export function About() {
    return (
        <section id='about'>
            
            <div className="container container-about">
                <Fade bottom duration={3500}>
                <h1 className="title text-center">
                    Sobre mim
                </h1>
                </Fade>

                <Fade bottom duration={3500}>
                <div className="row align-items-center content-about">
                    
                    <div data-aos="fade-up" className="col-lg-6 col-md-6">
                        <img
                            className='image_dev_about'
                            src={imagem_about}
                            alt="Imagem de desenvolvedor"
                            loading="lazy"
                        >
                        </img>
                    </div>
                    
                    <div className="col-lg-6 col-md-6">
                        <div className="card-body">
                            
                            <p className="card-text text-start"> 
                                Sou graduado em Análise e Desenvolvimento de Sistemas, curso em parceria com o Porto Digital,
                                pela Universidade Tiradentes/PE. E estagiário na Autobem Brasil como desenvolvedor Front-End.
                                Desta forma, me dedico a aprofundar os estudos em JavaScript com o framework Angular. Além de, possuir conhecimentos em Java e SpringBoot,
                                para a construção de aplicações web.
                            </p>
                            
                            <a href={CV_Rennan} download="Currículo Rennan">
                                <button className="btn button-curriculo">
                                    <span>Currículo</span>
                                    <FaDownload />
                                </button>
                            </a>
                            
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </section>
    )
}