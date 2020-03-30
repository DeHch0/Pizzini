import React, { useState } from 'react';
// import Requester from '../Requester';
import './style.css';
const ContactView = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (event) => {
        event.preventDefault()
 
        let data = {
            name,
            email,
            subject,
            message
        }

        console.log(data);

    }

    const handleOnChange = ({ target }) => {
        switch(target.id) {
            case 'name': {setName(target.value); break ;}
            case 'email': {setEmail(target.value); break ;}
            case 'subject': {setSubject(target.value); break ;}
            case 'message': {setMessage(target.value); break ;}
            default: {return ('');}
        }
    }

    return (

        <div className="contact-view">
        
        <form onSubmit={handleLogin}>

        <div className="input-field">
            <label for="name">Вашето име:</label>
            <input 
                type="text"
                id="name"
                name="name"
                placeholder="Напишете вашето име"
                value={name}
                onChange={handleOnChange} />
        </div>

        <div className="input-field">
            <label for="email">Е-mail</label>
            <input 
                type="text"
                id="email"
                name="email"
                placeholder="Напишете вашия е-mail"
                value={email}
                onChange={handleOnChange} />
        </div>

        <div className="input-field">
            <label for="subject">Тема</label>
            <input 
                type="text"
                id="subject"
                name="subject"
                placeholder="Защо ни пишете..."
                value={subject}
                onChange={handleOnChange} />
        </div>

        <div className="input-field">
            <label for="message">Съобщение:</label>
            <textarea 
                type="input"
                id="message"
                name="message"
                placeholder="Напишете вашето съобщение..."
                value={message}
                onChange={handleOnChange} />
        </div>


                <button className="btn-contact" type="submit">Изпрати</button>
        </form>
    
    
        </div>
    )
}

export default ContactView;