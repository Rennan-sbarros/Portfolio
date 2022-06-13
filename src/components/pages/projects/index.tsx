import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation} from 'swiper';
import dtmoney from '../../../assets/images/dt-money.png'
import letmeask from '../../../assets/images/letmeask.png'
import popcorn from '../../../assets/images/popcorn.png'
import todo from '../../../assets/images/to-do.png'
import umLarParaPets from '../../../assets/images/UmLarParaPets.png'
import { FaGithub } from 'react-icons/fa';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Projects(){

    return (
        <div className="container_projects" id='projects'>
            <h1 className="title">
                <Fade bottom duration={3500} delay={1000}>Projetos</Fade>
            </h1>
            <Bounce left duration={3500} delay={1000}>
                <Swiper
                    breakpoints={{
                        887.98:{
                            slidesPerView: 3,  
                            slidesPerGroup: 3,
                            loop: true
                        }
                    }}
                    slidesPerView= {1}
                    slidesPerGroup= {1}
                    spaceBetween={30}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    
                    <SwiperSlide>
                        <div className="cards">
                            <img src={dtmoney} alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">dtMoney</h4>
                                <p>Aplicação Web de controle de finanças pessoais.</p>
                                <a href="https://github.com/Rennan-sbarros/dtmoney"  target="_blank" rel="noreferrer">
                                    <button className="btn btn-primary botao">
                                        <FaGithub/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="cards">
                            <img src={letmeask} alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">Letmeask</h4>
                                <p>Website de perguntas e respostas.</p>
                                <a href="https://github.com/Rennan-sbarros/dtmoney"  target="_blank" rel="noreferrer">
                                    <button className="btn btn-primary botao">
                                        <FaGithub/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src={popcorn} alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">PopCorn</h4>
                                <p>Sugestão de filmes baseado no gênero escolhido.</p>
                                <a href="https://github.com/Rennan-sbarros/dtmoney"  target="_blank" rel="noreferrer">
                                    <button className="btn btn-primary botao">
                                        <FaGithub/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src={todo} alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">To-Do</h4>
                                <p>Site para gerenciamento de tarefas.</p>
                                <a href="https://github.com/Rennan-sbarros/dtmoney" target="_blank" rel="noreferrer">
                                    <button className="btn btn-primary botao">
                                        <FaGithub/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src={umLarParaPets} alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">Um Lar para Pets</h4>
                                <p>Rede social exclusiva para os amantes de pets em geral.</p>
                                <a href="https://github.com/Rennan-sbarros/dtmoney"  target="_blank" rel="noreferrer">
                                    <button className="btn btn-primary botao">
                                        <FaGithub/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </Bounce>
        </div>   
    )
}