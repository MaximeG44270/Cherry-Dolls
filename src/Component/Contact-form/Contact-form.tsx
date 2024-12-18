import React from 'react';
import './Contact-form.css';

const ContactForm: React.FC = () => {
  return (
    <section className="text-gray-600 body-font relative height">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          title="map"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Boulevard%20Jean%20Yole,%2085300%20Challans&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>
      </div>
      <div className="container padding-top px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 width md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 z-9 shadow-md z-index">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-h2">Cheery Dolls</h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out block"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg red-button">
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">
          N'hésitez pas à nous contacter pour tout renseignement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
