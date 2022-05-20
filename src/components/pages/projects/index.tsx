import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper';

import "swiper/css";
import "swiper/css/pagination";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function Projects(){

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        api
            .get("/users/Rennan-sbarros/repos").then((response) => {
                setRepositories(response.data);
            })
            .catch((error: string) => {
                console.error("Ops! Ocorreu um erro" + error)
            })
    })

    return (
        <div className="container">
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
                {repositories?.map((repositorie) => (
                    <SwiperSlide>
                        <h3>
                            {repositorie.name}
                        </h3>
                        <p>
                            {repositorie.description}
                        </p>
                        
                        <a href={repositorie.html_url}></a>
                        
                    </SwiperSlide>
                ))}
            </Swiper>
             
        </div>
        
    )
}