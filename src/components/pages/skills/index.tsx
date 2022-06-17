import angular from "../../../assets/icons/angular.svg";
import bootstrap from "../../../assets/icons/bootstrap.svg";
import css from "../../../assets/icons/css-3.svg";
import html from "../../../assets/icons/html.svg";
import js from "../../../assets/icons/js.svg";
import react from "../../../assets/icons/react.svg";
import sass from "../../../assets/icons/sass.svg";
import typescript from "../../../assets/icons/typescript.svg";
import Fade from 'react-reveal/Fade';

export function Skills() {
    return (
        <section className="container container-skills" id="skills">
            
            <h1 className="title">
                <Fade bottom duration={3500}>Habilidades</Fade>
            </h1>

            <div className="row cards">
                <Fade left duration={3000}>
                    <div className="col item-card">
                        <img src={angular} alt="Angular" loading="lazy"/>
                        <h2>Angular</h2>
                    </div>
                
                
                    <div className="col item-card">
                        <img src={react} alt="React" loading="lazy"/>
                        <h2>React</h2>
                    </div>
                
                    <div className="col item-card">
                        <img src={js} alt="Javascript" loading="lazy"/>
                        <h2>JavaScript</h2>
                    </div>
                
                    <div className="col item-card">
                        <img src={typescript} alt="Typescript" loading="lazy"/>
                        <h2>TypeScript</h2>
                    </div>
                </Fade>

                    <div className="w-100"></div>

                <Fade left duration={3000}>
                    <div className="col item-card">
                        <img src={html} alt="HTML5" loading="lazy"/>
                        <h2>HTM5</h2>
                    </div>
                
                    <div className="col item-card">
                        <img src={css} alt="CSS3" loading="lazy"/>
                        <h2>CSS3</h2>
                    </div>
                
                    <div className="col item-card">
                        <img src={sass} alt="Sass" loading="lazy"/>
                        <h2>Sass</h2>
                    </div>
                
                    <div className="col item-card">
                        <img src={bootstrap} alt="Bootstrap" loading="lazy"/>
                        <h2>Bootstrap</h2>
                    </div>
                </Fade>
            </div>
        </section>
    )
}