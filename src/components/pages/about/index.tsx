import imagem_perfil from "../../../assets/images/imagem_perfil.svg";

export function About() {
    return (
        <div className="content">
            <div className="container card card-main">
                <div className="row align-items-center">
                    
                    <div className="col-md-4 text-center">
                        <img src={imagem_perfil} alt="Foto de perfil de Rennan" />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="title text-start">Sobre mim</h1>
                            <p className="card-text text-start"> <span>Olá mundo! Sou o Rennan. </span> 
                                Graduado em Análise e Desenvolvimento de Sistemas, curso em parceria com o Porto Digital,
                                pela Universidade Tiradentes/PE. E estagiário na Autobem Brasil como desenvolvedor Front-End.
                                Desta forma, me dedico a aprofundar os estudos em JavaScript com o framework Angular. Além de, possuir conhecimentos em Java e SpringBoot,
                                para a construção de aplicações web.
                            </p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className="button">
                <button className="btn-download" data-back="Clique Aqui" data-front="Download CV">
                </button>
            </div>
        </div>
        

    )
}