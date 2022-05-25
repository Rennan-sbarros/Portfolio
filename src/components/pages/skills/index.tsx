import angular from "../../../assets/icons/angular.png";
import bootstrap from "../../../assets/icons/bootstrap.png";
import css from "../../../assets/icons/css-3.png";
import html from "../../../assets/icons/html.png";
import js from "../../../assets/icons/js.png";
import react from "../../../assets/icons/react.png";
import sass from "../../../assets/icons/sass.png";
import typescript from "../../../assets/icons/typescript.png";

export function Skills() {
    return (
        <section className="container container-geral">

            <h1 className="title">Habilidades</h1>

            <div className="row cards-skills">
                <div className="col p-4 item-card">
                    <img src={angular} alt="Angular"/>
                    <h2>Angular</h2>
                </div>

                <div className="col p-4 item-card">
                    <img src={react} alt="React"/>
                    <h2>React</h2>
                </div>

                <div className="col p-4 item-card">
                    <img src={js} alt="Javascript"/>
                    <h2>JavaScript</h2>
                </div>

                <div className="col p-4 item-card">
                    <img src={typescript} alt="Typescript"/>
                    <h2>TypeScript</h2>
                </div>

                <div className="w-100"></div>

                <div className="col p-4 item-card">
                    <img src={html} alt="HTML5"/>
                    <h2>HTM5</h2>
                </div>

                <div className="col p-4 item-card">
                    <img src={css} alt="CSS3"/>
                    <h2>CSS3</h2>
                </div>

                <div className="col p-4 item-card">
                    <img src={sass} alt="Sass"/>
                    <h2>Sass</h2>
                </div>

                <div className="col p-4 item-card">
                    <img src={bootstrap} alt="Bootstrap"/>
                    <h2>Bootstrap</h2>
                </div>
            </div>
        </section>
    )
}