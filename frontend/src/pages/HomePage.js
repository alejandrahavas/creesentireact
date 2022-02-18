
import React from "react";

import '../styles/components/pages/HomePage.css'

const HomePage =(props) =>{
    return (
       <div> <main className="holder"> 
        
        <div className="columnas">
            <div className="floral">
                <img src="img/home/cardfloral.jpg" width="300" alt="cardfloral"/>
            </div>
            
            <div className="bienvenidos left">
                <h2>Bienvenido a Creesenti Life Coaching &reg;</h2>
                <p>
                    El coach es un facilitador del cambio, es aquella persona que te ayuda a pasar de un estado presente, actual, a un estado futuro, deseado. Si necesitas realizar grandes cambios en tu vida y existe algo te bloquea, el coach es la persona que te va a ayudar a superar esas barreras para lograr el cambio.
                    </p>
                <p>Gracias al poder de la conversación y el gran número de herramientas con la que un coach profesional cuenta, este asiste un proceso para que el coacheé pueda definir y alcanzar sus objetivos (qué es y que no es lo que desea).</p>
            </div>
            <div className="testimonios right">
                <h2>Algunos testimonios...</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente Gracias Ale por haberme acompañado y ayudarme a salir adelante en este momento especial de mi vida</span>
                    <span className="autor">Fernando Iglesias</span>
                    <span className="cita">Las técnicas que trabajamos me hiceron dar un giro de 180grados, fue un antes y un después. Gracias!</span>
                    <span className="autor">Marcela Peralta</span>
                   <span className="cita">Productivo y eficaz 100%, pude iniciar un gran proyecto que tenía estancado a través de las sesiones de coaching.</span>
                    <span className="autor">Martín Verón</span>
                </div>
            </div>
        </div>
        <main className="holder">
            <h2>Acerca del Coaching</h2>

        <div className="novedades">
            <h3>Proceso de coaching</h3>
            <h4>¿Cómo es un proceso en Creesenti Life Coaching &reg; ?</h4>
            <p>
                Un proceso de coaching conmigo consiste en un mínimo de cuatro sesiones. En ellas utilizo las mejores herramientas de coaching personal, sistémico y transformacional, así como también dinámicas y ejercicios de la PNL, inteligencia emocional y mindfulness, para crear consciencia y cambios no sólo a nivel superficial, sino a niveles más profundos: creencias, valores e identidad.
                
                Mi trabajo se basa en analizar tu parte emocional, localizando aquellos obstáculos, creencias limitantes, miedos, falta de confianza, que a menudo te impiden dar el siguiente paso hacia el cambio y autodescubrimiento.
                </p>
            <hr/>
        </div>
        <div className="novedades">
            <h3>¿Qué es el Life Coaching?</h3>
            <h4> Coaching de vida</h4>
            <p>
               
                El coaching de vida o life coaching es una disciplina profesional emergente que aparece nombrado a menudo en artículos periodísticos, está presente en comentarios en las redes sociales, y ya es parte importante de los recursos de muchos profesionales gracias a sus sólidos resultados y metodología consistente.
                
                Permite fomentar relaciones interpersonales más fuertes, productivas y sanas. Es uno de los aspectos más poderosos que se pueden trabajar dentro de un proceso de desarrollo personal.
                
                Básicamente consiste en ayudar al coacheé a que se convierta en su mejor versión, asistiendo a superar todos los obstáculos que se presentan en su vida y así alcanzar sus metas.
                
                </p>
            <hr/>
        </div>
        <div className="novedades">
            <h3>¿Cuándo necesitamos Life Coaching?</h3>
            <h4>Diversidad de necesidades</h4>
            <p>Un coach no es solamente útil cuando se enfrenten problemas personales o anímicos. Un coach es sobre todo un facilitador que puede estar presente en procesos familiares, afectivos, profesionales o laborales </p>

           
            
            <p>A la hora de emprender un nuevo proyecto: Te sorprendería conocer la gran cantidad de emprendedores que busca apoyo y asesoría antes de lanzar una nueva empresa.
            Cuando enfrentamos situaciones de cambio: Muchas personas no saben cómo enfrentarse a situaciones difíciles como la pérdida de un empleo, un divorcio o un luto. </p>
            
            <p>  Búsqueda de dirección en los objetivos profesionales: El life coaching también sirve para que los profesionales clarifiquen sus metas y lleven a cabo acciones concretas para alcanzarlas.</p>
            <p>  Falta de motivación: Las personas no siempre tienen la suficiente motivación para seguir sus metas. El coaching motivacional de vida busca devolver la confianza y la seguridad a cada persona, dos elementos clave en todo proceso.</p>
                <p>  Potenciando nuevos talentos: Muchas gente tiene una habilidad concreta que ignora cómo llevarla a cabo. Un coach de vida ayuda a facilitar esos recursos y así hacer salir a luz otras habilidades.</p>
                    <p>  Cuando queremos erradicar patrones destructivos: La negatividad, el pesimismo, el desinterés, el terror  a los cambios y la inflexibilidad son aspectos que impiden la realización de objetivos. La función de un coach es erradicar esas barreras y conseguir que el coachee sea consciente de la vitalidad de revertir dichos pensamientos.
            </p>
            <hr/>
        </div>       
        </main>
        <main className="holder">
        <div className="galeria">
            
            <div className="foto">
                <img src="img/home/nutricioncard.jpg" alt=""/>
            </div>
            <div className="foto">
                <img src="img/galeria/2022propositoscard.jpg" alt=""/>
            </div>
                                
        </div>
    </main>
   
    </main>
</div>
    );
}
export default HomePage;