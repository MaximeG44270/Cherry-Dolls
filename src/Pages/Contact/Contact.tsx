import React from 'react';
import './Contact.css';
import ContactForm from '../../Component/Contact-form/Contact-form';
import Footer from '../../Component/Footer/footer';
import NavBar from '../../Component/NavBar/NavBar';

const Contact: React.FC = () => {
  return (
    <div>
        <NavBar />
        <ContactForm />
        <Footer />  
    </div>
  );
};

export default Contact;