import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper';

import "swiper/css";
import "swiper/css/pagination";

export function Projects(){

    return (
        <div className="container_projects">
            <h1 className="title">Projetos</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                > 
                <SwiperSlide>
                
                <div className="cards-geral">
                <div className="cards">
                    <img src="" alt=""></img>
                    <div className="card-info">
                        <h4 className="card-titulo">Em breve</h4>
                        <p>Descrição em breve.</p>
                        <div className="botoes">
                            <a className="btn btn-primary botao" href="#" target="_blank" rel="noreferrer">Visitar site</a>
                            <a className="btn btn-primary botao" href="#"  target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                </div>
                
                </SwiperSlide>
                
            </Swiper>
             
        </div>
        
    )
}