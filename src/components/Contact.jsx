import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const email = import.meta.env.VITE_CONTACT_EMAIL;

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        setSuccessMessage("Viesti lähetetty onnistuneesti!");
        setErrorMessage("");
        e.target.reset();
      })
      .catch((error) => {
        setErrorMessage("Lähetys epäonnistui: " + error.text);
        setSuccessMessage("");
      });
  };

  return (
    <>
      <form
        className="space-y-4 max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        <input name="name" type="text" className="w-full p-3 rounded bg-gray-800 text-white" placeholder="Nimi" required />
        <input name="email" type="email" className="w-full p-3 rounded bg-gray-800 text-white" placeholder="Sähköposti" required />
        <textarea name="message" rows="4" className="w-full p-3 rounded bg-gray-800 text-white" placeholder="Viesti" required />
        <button
          type="submit"
          className="bg-green-600 text-white border border-green-700 hover:bg-green-700 hover:text-white dark:bg-black dark:text-green-400 dark:border-green-500 dark:hover:bg-green-700 dark:hover:text-white px-6 py-2 rounded font-semibold transition duration-300 shadow-md"
        >
          Lähetä
        </button>
      </form>
      {successMessage && (
        <div className="text-green-400 text-center mt-4 font-medium opacity-100 transition-opacity duration-700">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="text-red-500 text-center mt-4 font-medium opacity-100 transition-opacity duration-700">
          {errorMessage}
        </div>
      )}
      <div className="flex justify-center gap-6 mt-6 text-3xl">
        <a href="https://github.com/DeveMike" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 dark:hover:text-green-400"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/mihail-rulinski-847917236" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 dark:hover:text-green-400"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.youtube.com/@DeveMike" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-red-500"><i className="fab fa-youtube"></i></a>
      </div>
    </>
  );
}

export default Contact;