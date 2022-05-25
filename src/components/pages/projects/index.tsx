import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation} from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Projects(){

    return (
        <div className="container_projects">
            <h1 className="title">Projetos</h1>
            
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="cards">
                            <img src="" alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">Em breve 1</h4>
                                <p>Descrição em breve.</p>
                                <div className="botoes">
                                    <a className="btn btn-primary botao" href="#" target="_blank" rel="noreferrer">Visitar site</a>
                                    <a className="btn btn-primary botao" href="#"  target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src="" alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">Em breve 2</h4>
                                <p>Descrição em breve.</p>
                                <div className="botoes">
                                    <a className="btn btn-primary botao" href="#" target="_blank" rel="noreferrer">Visitar site</a>
                                    <a className="btn btn-primary botao" href="#"  target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src="" alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">Em breve 3</h4>
                                <p>Descrição em breve.</p>
                                <div className="botoes">
                                    <a className="btn btn-primary botao" href="#" target="_blank" rel="noreferrer">Visitar site</a>
                                    <a className="btn btn-primary botao" href="#"  target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src="" alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">Em breve 4</h4>
                                <p>Descrição em breve.</p>
                                <div className="botoes">
                                    <a className="btn btn-primary botao" href="#" target="_blank" rel="noreferrer">Visitar site</a>
                                    <a className="btn btn-primary botao" href="#"  target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src="" alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">Em breve 5</h4>
                                <p>Descrição em breve.</p>
                                <div className="botoes">
                                    <a className="btn btn-primary botao" href="#" target="_blank" rel="noreferrer">Visitar site</a>
                                    <a className="btn btn-primary botao" href="#"  target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img src="" alt=""></img>
                            <div className="card-info">
                                <h4 className="card-titulo">Em breve 6</h4>
                                <p>Descrição em breve.</p>
                                <div className="botoes">
                                    <a className="btn btn-primary botao" href="#" target="_blank" rel="noreferrer">Visitar site</a>
                                    <a className="btn btn-primary botao" href="#"  target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                   
                </Swiper>
        </div>
        
    )
}