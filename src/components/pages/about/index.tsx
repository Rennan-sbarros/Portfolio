/* eslint-disable jsx-a11y/anchor-is-valid */
import imagem_about from "../../../assets/images/photo_programming_about.svg";
import { FaDownload } from 'react-icons/fa';
const Zoom = require('react-reveal/Zoom');

export function About() {
    return (
        <section id='about'>
            <Zoom bottom cascade duration="4000" delay="1500">
            <div className="container container-about">
                <h1 className="title text-center">
                    Sobre mim
                </h1>
                <div className="row align-items-center content-about">
                    
                    <div data-aos="fade-up" className="col-lg-6 col-md-6">
                        <img
                            className='image_dev_about'
                            src={imagem_about}
                            alt="Imagem de desenvolvedor"
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
                            
                            <a href="#">
                                <button className="button-curriculo">
                                    <span>Currículo</span>
                                    <FaDownload />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </Zoom>
        </section>
    )
}