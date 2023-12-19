import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kayxskp', 'template_euzdmn1', form.current, 'jv4ERTIVEcxMM22ZJ')
            .then((result) => {
                alert("Email Sent!");
            }, (error) => {
                alert(error.text);
            });
    };

    return (
        <form ref={form}>
            <h2>
                Email Us!
            </h2>
            <section className='nameAndEmail'>
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
            </section>
            <section className='MessageSection'>
                <label>Message</label>
                <textarea name="message" />
            </section>
            <button className='submitButton' onClick={sendEmail}> SUBMIT </button>
        </form>
    );
}

export default Email;