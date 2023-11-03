import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';


const Contact = () => {

  const { register, handleSubmit: handleFormSubmit, formState: { errors } } = useForm();
  
  const [isEmailSend, setIsEmailSend] = useState(false)

  const onSubmit = (data) => {
    emailjs.send(
      'service_sa9zyp1',
      'template_8tgffqj',
      data,
      '0sWoK-gadiElg8pZg'
    )
    .then((result) => {
        console.log(result.text);
        setIsEmailSend(true);
    }, (error) => {
        console.log(error.text);
    });
  };


  return (
    <div id="contact" className="bg-gulf-blue-700 pt-8 py-6 sm:py-8 lg:py-12 rounded">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gulf-blue-100 md:mb-6 lg:text-3xl">
            Contactame
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gulf-blue-200 md:text-lg">
            Puedes confiar en que hare mi maximo esfuerzo en lo que me propongo.
          </p>
        </div>
        <form
          className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
          onSubmit={handleFormSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="firstName" className="mb-2 inline-block text-sm text-gulf-blue-100 sm:text-base">Nombre</label>
            <input name="firstName" type="text" className="w-full rounded border bg-gulf-blue-950 px-3 py-2 text-gulf-blue-400 outline-none ring-gulf-blue-300 transition duration-100 focus:ring" {...register('firstName', { required: true })} />
            {errors.firstName && <span className="text-sm text-red-700">*Requerido</span>}
          </div>
          <div>
            <label htmlFor="lastName" className="mb-2 inline-block text-sm text-gulf-blue-100 sm:text-base">Apellido</label>
            <input name="lastName" type="text" className="w-full rounded border bg-gulf-blue-950 px-3 py-2 text-gulf-blue-400 outline-none ring-gulf-blue-300 transition duration-100 focus:ring" {...register('lastName', { required: true })} />
            {errors.lastName && <span className="text-sm text-red-700">*Requerido</span>}
          </div>
          <div>
            <label htmlFor="company" className="mb-2 inline-block text-sm text-gulf-blue-100 sm:text-base">Empresa</label>
            <input name="company" type="text" className="w-full rounded border bg-gulf-blue-950 px-3 py-2 text-gulf-blue-400 outline-none ring-gulf-blue-300 transition duration-100 focus:ring" {...register('company', { required: true })} />
            {errors.company && <span className="text-sm text-red-700">*Requerido</span>}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 inline-block text-sm text-gulf-blue-100 sm:text-base">Correo Electronico</label>
            <input name="email" type="email" className="w-full rounded border bg-gulf-blue-950 px-3 py-2 text-gulf-blue-400 outline-none ring-gulf-blue-300 transition duration-100 focus:ring" {...register('email', { required: true })} />
            {errors.email && <span className="text-sm text-red-700">*Requerido</span>}
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 inline-block text-sm text-gulf-blue-100 sm:text-base">Asunto</label>
            <input name="subject" type="text" className="w-full rounded border bg-gulf-blue-950 px-3 py-2 text-gulf-blue-400 outline-none ring-gulf-blue-300 transition duration-100 focus:ring" {...register('subject', { required: true })} />
            {errors.subject && <span className="text-sm text-red-700">*Requerido</span>}
          </div>
          <div>
            <label htmlFor="message" className="mb-2 inline-block text-sm text-gulf-blue-100 sm:text-base">Mensaje</label>
            <input name="message" type="text" className="w-full rounded border bg-gulf-blue-950 px-3 py-2 text-gulf-blue-400 outline-none ring-gulf-blue-300 transition duration-100 focus:ring" {...register('message', { required: true })} />
            {errors.message && <span className="text-sm text-red-700">*Requerido</span>}
          </div>
          <div className="flex items-center justify-between sm:col-span-2">
            <button className="inline-block rounded-lg bg-gulf-blue-800 px-8 py-3 text-center text-sm font-semibold text-gulf-blue-200 outline-none ring-gulf-blue-300 transition duration-100 hover:bg-gulf-blue-600 focus-visible:ring active:bg-gulf-blue-700 md:text-base">Enviar</button>
          </div>
          {isEmailSend && (
            <p className="text-xs text-gulf-blue-400">Gracias por contactarme, en un instante te respondere... Atentamente <a href="" className="underline transition duration-100 hover:text-gulf-blue-500 active:text-gulf-blue-600 ">RocketHz</a></p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;