import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_kayxskp';
const EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_euzdmn1';
const EMAIL_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'jv4ERTIVEcxMM22ZJ';

const Email = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form.current, EMAIL_PUBLIC_KEY)
            .then((result) => {
                alert("Email Sent!");
                form.current.reset();
            }, (error) => {
                alert(error.text);
            }).finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <h2>
                Email Me
            </h2>
            <section className='nameAndEmail'>
                <div>
                    <label htmlFor="user_name">Name</label>
                    <input type="text" name="user_name" id="user_name" required />
                </div>
                <div>
                    <label htmlFor="user_email">Email</label>
                    <input type="email" name="user_email" id="user_email" required />
                </div>
            </section>
            <section className='MessageSection'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required />
            </section>
            <button className='submitButton' type="submit" disabled={isSubmitting}>
                {isSubmitting ? "SENDING" : "SUBMIT"}
            </button>
        </form>
    );
}

export default Email;
