import React from "react";
import '../styles/components/pages/ServiciosPage.css'

const ServiciosPage =(props) =>{
    return (
       <div>

<main className="holder">
    <h2>Servicios</h2>

    <div className="servicio"><img src="img/servicios/card publicitaria pajaritos.jpg" width="350" alt="Pajaritos"/>
        <div className="info">
            <h4>Sesiones de coaching personal ¿Qué es y cómo puede beneficiarte?</h4>
            <p>
                El coaching personal es una conversación constructiva entre dos personas en la cual de un lado se
                encuentra el “coach”, el profesional, mientras que en el otro extremo está el “coacheé”, el cual es
                el cliente y destinatario de las </p>
            <p>Entre ambos se establece un proceso de construcción mediante el cual el coach, gracias a un conjunto
                de recursos ontológicos, acompaña, motiva y asiste al coacheé a alcanzar aquellos resultados
                deseados, ya sean estos de índole personal o profesional.</p>
            <p>A través de las sesiones se ejerce un diálogo constructivo muy especial en el cual se desarrolla el
                pensamiento y la percepción necesaria para experimentar aquellos cambios profundos y duraderos
                necesarios para llegar al objetivo buscado.</p>
            <p>En esta relación por lo general el cliente recurre a un coach debido a que hay algo que lo inquieta,
                una situación presente que le aporta insatisfacción o bien un resultado que no sabe cómo alcanzar.
            </p>
              <p>Cabe destacar que en el mundo del coaching ontológico no se intenta formar u ofrecer consejos
                personales ni profesionales, ya que el concepto en el cual se basa es que el coacheé debe accionar
                por sí mismo en base a sus objetivos luego de obtener nuevas distinciones y cambiar así su
                observador.
            </p>
        </div>
    </div>
    <div className="servicio"><img src="img/logos/logocirculofondo.png" width="350" alt="Circulofondologo"/>
        <div class="info">
            <h4>Sesiones de Coaching on line</h4>
            <p>
                Las sesiones de coaching online se realizan de forma muy sencilla.
                Normalmente, en la primera consulta el cliente, o coacheé, suele encontrarse un poco perdido.
                Hay personas que tienen muy claro lo que quieren, pero otras no. </p>

            <p> Como coach lo que hago es asistir, acompañar a la persona para que ella por sí misma alcance aquello
                que tanto tiempo lleva buscando.
                Por lo tanto, en la primera sesión se trata de llegar a un objetivo final: claro, realista y específico.
            </p>
            <p>
                Cuando hablamos de coaching ontológico a distancia, nos referimos a un proceso que se lleva a cabo
                mediante Internet.
                Sencillamente porque muchas veces es lo más conveniente. Es una manera de conectar fácilmente, estés
                donde quiera que estés.
                Así, cómodamente desde la intimidad de tu hogar podemos realizar las sesiones sin inconvenientes
                externos.
                No vas a tener que salir de tu casa, desplazarte hasta el consultorio ni disponer del tiempo extra
                para ello.
            </p>
        </div>
    </div>
    <div className="servicio"><img src="img/logos/logocirculotransparente.png" width="300" alt="Circulotransparentelogo"/>
        <div class="info">
            <h4>Coaching on line, es especialmente útil cuando quieres:</h4>
            <p><ul>

                <li>Emprender un nuevo camino ya sea personal o profesional.</li>
                <li>Encontrar tu vocación, propósito profesional y accionar por ello.</li>
                <li>Cambiar de trabajo, carrera o profesión.</li>
                <li>Aumentar tu confianza y autoestima para alcanzar tus sueños y objetivos.</li>
                <li>Gestionar mejor tus emociones.</li>
                <li>Superar los miedos que te impiden desarrollarte en el ámbito social.</li>
                <li>Encontrar motivación en tu vida profesional.</li>
                <li>Aumentar la productividad y gestionar mejor el tiempo.</li>
                <li>Mejorar las relaciones familiares y laborales.</li>
            </ul>
                </p>
        </div>
    </div>
    


    

    

</main>

       </div>
    );
}
export default ServiciosPage;