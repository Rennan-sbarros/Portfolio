import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation} from 'swiper';
import dtmoney from '../../../assets/images/dt-money.webp'
import letmeask from '../../../assets/images/letmeask.webp'
import popcorn from '../../../assets/images/popcorn.webp'
import todo from '../../../assets/images/to-do.webp'
import umLarParaPets from '../../../assets/images/UmLarParaPets.webp'
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
                <Fade bottom duration={3500}>Projetos</Fade>
            </h1>
            <Bounce buttom duration={3500}>
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
                            <img src={dtmoney} alt="Projeto dtmoney" loading="lazy"></img>
                            <div className="card-info">
                                <h1 className="card-titulo">dtMoney</h1>
                                <p>Aplicação Web de controle de finanças pessoais.</p>
                                <a className="access-github" href="https://github.com/Rennan-sbarros/dtmoney" target="_blank" rel="noreferrer" title="Github">
                                    <FaGithub/>                          
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="cards">
                            <img src={letmeask} alt="Projeto letmeask" loading="lazy"></img>
                            <div className="card-info">
                                <h1 className="card-titulo">Letmeask</h1>
                                <p>Website de perguntas e respostas.</p>
                                <a className="access-github" href="https://github.com/Rennan-sbarros/dtmoney" target="_blank" rel="noreferrer" title="Github">
                                    <FaGithub/>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src={popcorn} alt="Projeto popcorn" loading="lazy"></img>
                            <div className="card-info">
                                <h1 className="card-titulo">PopCorn</h1>
                                <p>Sugestão de filmes baseado no gênero escolhido.</p>
                                <a className="access-github" href="https://github.com/Rennan-sbarros/dtmoney" target="_blank" rel="noreferrer" title="Github">
                                    <FaGithub/>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src={todo} alt="Projeto To do" loading="lazy"></img>
                            <div className="card-info">
                                <h1 className="card-titulo">To-Do</h1>
                                <p>Site para gerenciamento de tarefas.</p>
                                <a className="access-github" href="https://github.com/Rennan-sbarros/dtmoney" target="_blank" rel="noreferrer" title="Github">
                                    <FaGithub/>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src={umLarParaPets} alt="Projeto Um lar para pets" loading="lazy"></img>
                            <div className="card-info">
                                <h1 className="card-titulo">Um Lar para Pets</h1>
                                <p>Rede social exclusiva para os amantes de pets em geral.</p>
                                <a className="access-github" href="https://github.com/Rennan-sbarros/dtmoney" target="_blank" rel="noreferrer" title="Github">
                                    <FaGithub/>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </Bounce>
        </div>   
    )
}