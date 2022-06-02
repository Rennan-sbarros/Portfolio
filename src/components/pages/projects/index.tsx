import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation} from 'swiper';
import dtmoney from '../../../assets/images/dt-money.png'
import letmeask from '../../../assets/images/letmeask.png'
import popcorn from '../../../assets/images/popcorn.png'
import todo from '../../../assets/images/to-do.png'
import umLarParaPets from '../../../assets/images/UmLarParaPets.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Projects(){

    return (
        <div className="container_projects" id='projects'>
            <h1 className="title">Projetos</h1>
            
                <Swiper
                    breakpoints={{
                        767.98:{
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
                                <div className="botoes">
                                    {/* <a className="btn btn-primary botao" href="#" target="_blank" rel="noreferrer">Visitar site</a> */}
                                    <a className="btn btn-primary botao" href="https://github.com/Rennan-sbarros/dtmoney"  target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src={letmeask} alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">Letmeask</h4>
                                <p>Website de perguntas e respostas.</p>
                                <div className="botoes">
                                    {/* <a className="btn btn-primary botao" href="#" target="_blank" rel="noreferrer">Visitar site</a> */}
                                    <a className="btn btn-primary botao mt-4" href="https://github.com/Rennan-sbarros/Letmeask"  target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src={popcorn} alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">PopCorn</h4>
                                <p>Sugestão de filmes baseado no gênero escolhido.</p>
                                <div className="botoes">
                                    {/* <a className="btn btn-primary botao" href="#" target="_blank" rel="noreferrer">Visitar site</a> */}
                                    <a className="btn btn-primary botao" href="https://github.com/Rennan-sbarros/porcorn-movies"  target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src={todo} alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">To-Do</h4>
                                <p>Site para gerenciamento de tarefas.</p>
                                <div className="botoes">
                                    {/* <a className="btn btn-primary botao" href="#" target="_blank" rel="noreferrer">Visitar site</a> */}
                                    <a className="btn btn-primary botao mt-4" href="https://github.com/Rennan-sbarros/To-Do"  target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src={umLarParaPets} alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">Um Lar para Pets</h4>
                                <p>Rede social exclusiva para os amantes de pets em geral.</p>
                                <div className="botoes">
                                    {/* <a className="btn btn-primary botao" href="#" target="_blank" rel="noreferrer">Visitar site</a> */}
                                    <a className="btn btn-primary botao" href="https://github.com/Rennan-sbarros/UmLarParaPets"  target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </div>
        
    )
}