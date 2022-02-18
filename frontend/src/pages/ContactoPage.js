import React,{useState} from "react";
import axios from "axios";

import '../styles/components/pages/ContactoPage.css'

const ContactoPage =(props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        comentario: ''
    }

    const [sending, setSending]= useState(false);
    const [msg, setMsg] = useState ('');
    const [formData, setFormData]= useState(initialForm);

    const handleChange = e => {
        const { name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post( `${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }




    return (
       

    <main className="holder">
        <div className="columna left">
            <h2>Contacto</h2>
            <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                <p><label for="">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p><label for="">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p><label for="">Teléfono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </p>
                <p><label for="comentario">Comentario</label>
                    <textarea name="comentario" value={formData.comentario} onChange={handleChange} ></textarea>
                </p>
                {sending ? <p>Enviando...</p> :null}
                {msg ? <p>{msg}</p> : null}
                <p className="acciones">
                    <input type="submit" value="Enviar"/>
                </p>

            </form>
        </div>
        <div className="columna right">
            <h2>Otras vías de Contacto</h2>
            <p>También te puedes comunicar por estos medios:</p>
            <ul>
                <li>Teléfono: +54 9 351 386 7260</li>
                <li > <img src="img/logos/whatsapp-logo-11-1019x1024.png" width="15" alt=""/>+5493513867260</li>
                <li>Email: alejandra91821@gmail.com</li>
            <li> Facebook: Creesenti Life Coaching</li>
            <li><img src="img/logos/instagram-logo1-1024x1024.png" width="15" alt=""/>@coach_creesenti</li>
            
            </ul>
        </div>



    </main>

    );
}
export default ContactoPage;