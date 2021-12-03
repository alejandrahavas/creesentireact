import React from "react";
import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage =(props) =>{
    return (
      <div>
          <main className="holder">
        <div className="historia">
            <h2>Acerca de mi...</h2>
            <p>¡Hola! Mi nombre es Alejandra y soy un coach ontológico integral especializada en asistir a las personas
                a superar aquellos obstáculos que les impiden llegar a sus objetivos.
                Actualmente, además de ejercer coaching de manera particular, soy fundadora de Creesenti Coaching Life
                &reg; , donde ofrezco programas y entrenamientos de desarrollo personal.
            </p>
            <h2>Mi Enfoque</h2>
            <p> Hace años comencé un proceso de transformación y desarrollo personal, alineado con un propósito mayor
                que es el de acompañar a la gente a superarse día a día con la ayuda de las herramientas que nos brinda
                el coaching ontológico transformacional.

                Todas las técnicas que utilizo están basadas en procesos ontológicos.

                Mis clientes dicen que los resultados son mágicos, pero realmente no hay ninguna magia involucrada. Es
                trabajo, dedicación y amor por el cambio y los procesos de transformación.
            </p>

        </div>
        <div className="staff">
            <h2>Mi formación como Coach</h2>
            <div className="personas">

                <div className="persona">
                    <img src="img/nosotros/perfiltransparente.png" alt="Alejandra"/>
                    <h5>Alejandra Havas</h5>
                    <h6>Coach Ontológico Integral- Consultoría en Life Coaching</h6>
                    <p>Un poco de mi carrera profesional
                    <ul>
                        <li> Brindo mis servicios de coaching de vida, para el desarrollo personal, acompañando a mis
                            clientes en sus procesos de descubrimiento y expansión con el objetivo de mejorar sus vidas.
                        </li>
                        <li> Fundadora de Creesenti Life Coaching, empresa de coaching enfocada en mejorar la vida de
                            las personas a nivel integral, a través de técnicas y abordajes propios de la profesión.
                        </li>
                        <li>Licenciada en Administración de Empresas con orientación en Marketing de la Universidad Blas
                            Pascal</li>
                        <li> Diplomada en Coaching Ontológico Integral Profesional en la Fundación Latinoamericana de
                            Desarrollo Social y Salud, avalado por el Ministerio de Educación de la Nación Argentina.
                        </li>
                        <li> Posgrado en Técnicas psicológicas Cognitivo Conductuales en la Universidad de Congreso.
                        </li>
                        <li> Diplomada en Formación de Acompañantes Comunitarios contra la Violencia de Género en la
                            Universidad Provincial de Córdoba.</li>
                        <li>Actualmente, estudiante de las ultimas materias de la carrera de Licenciatura en Psicología
                            en la UES21 fascinada por el conocimiento de la mente y sus posibilidades.</li>
                    </ul>
                    </p>
                </div>
                <div className="persona">
                    <img src="img/logos/logo universo.png" alt="Universo"/>
                    <h5>Porqué Elegirme</h5>
                    <h6>Vocación y entrega personal</h6>

                    <p>
                        Amo esta profesión y el life coaching. Me esfuerzo día a día para ayudar a mis clientes a
                        encontrar aquello que están buscando alcanzar. </p>
                    <h6>Capacidad de conexión</h6>

                    <p> Tengo una habilidad natural para conectar profunda y empáticamente con los sentimientos y
                        emociones de las personas.</p>
                    <h6>Compromiso</h6>
                    <p> Lo único que puede producir cambios profundos y duraderos en tu desarrollo personal es el
                        compromiso con un objetivo concreto.
                    </p>
                </div>

            </div>
        </div>
    </main>
      </div>
    );
}
export default NosotrosPage;