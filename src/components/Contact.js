import React from 'react';

const Contact = () => {
  return <div className='contact-page-wrapper' id='contact'>
        <h1 className='primary-subheading'>¿En que podemos ayudarte?</h1>
        <h1 className='primary-subheading'>Cuentános lo que quieres para hoy: </h1>

        <div className='contact-form-container'>
            <input type="text" placeholder='tuemail@gmail.com' />
            <button className='secondary-button'>Enviar</button>
        </div>
  </div>
}

export default Contact;