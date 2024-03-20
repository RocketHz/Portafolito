import React, { useContext, useState } from "react";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { LanguageContext } from "./subComponents/LanguageContext";


const Contact = () => {
  const { languageData } = useContext(LanguageContext);


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
    <div id="contact" className="bg-gradient-to-r from-light-bg-100 via-oscure-bg-300/50 to-light-bg-100 dark:bg-gradient-to-r dark:from-oscure-bg-100 dark:via-light-text-200/70 dark:to-oscure-bg-100 text-oscure-bg-100 dark:text-light-bg-100 pt-8 py-6 sm:py-8 lg:py-12 shadow-md shadow-oscure-primary-100">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-light-accent-200 dark:text-oscure-primary-100 md:mb-6 lg:text-3xl">
            {languageData.contactMe}
          </h2>
          <p className="mx-auto max-w-screen-md text-center md:text-lg">
            {languageData.trustMessage}
          </p>
        </div>
        <form
          className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
          onSubmit={handleFormSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="firstName" className="mb-2 inline-block text-sm text-oscure-primary-100 sm:text-base">{languageData.name}</label>
            <input id="firstName" type="text" className="w-full rounded border bg-light-accent-100/90 px-3 py-2 text-gulf-blue-400 outline-none ring-gulf-blue-300 transition duration-100 focus:ring" {...register('firstName', { required: true })} />
            {errors.firstName && <span className="text-sm text-red-700">*Requerido</span>}
          </div>
          <div>
            <label htmlFor="lastName" className="mb-2 inline-block text-sm text-oscure-primary-100 sm:text-base">{languageData.lastName}</label>
            <input id="lastName" type="text" className="w-full rounded border bg-light-accent-100/90 px-3 py-2 text-gulf-blue-400 outline-none ring-gulf-blue-300 transition duration-100 focus:ring" {...register('lastName', { required: true })} />
            {errors.lastName && <span className="text-sm text-red-700">*Requerido</span>}
          </div>
          <div>
            <label htmlFor="company" className="mb-2 inline-block text-sm text-oscure-primary-100 sm:text-base">{languageData.company}</label>
            <input id="company" type="text" className="w-full rounded border bg-light-accent-100/90 px-3 py-2 text-gulf-blue-400 outline-none ring-gulf-blue-300 transition duration-100 focus:ring" {...register('company', { required: true })} />
            {errors.company && <span className="text-sm text-red-700">*Requerido</span>}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 inline-block text-sm text-oscure-primary-100 sm:text-base">{languageData.email}</label>
            <input id="email" type="email" className="w-full rounded border bg-light-accent-100/90 px-3 py-2 text-gulf-blue-400 outline-none ring-gulf-blue-300 transition duration-100 focus:ring" {...register('email', { required: true })} />
            {errors.email && <span className="text-sm text-red-700">*Requerido</span>}
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 inline-block text-sm text-oscure-primary-100 sm:text-base">{languageData.subject}</label>
            <input id="subject" type="text" className="w-full rounded border bg-light-accent-100/90 px-3 py-2 text-gulf-blue-400 outline-none ring-gulf-blue-300 transition duration-100 focus:ring" {...register('subject', { required: true })} />
            {errors.subject && <span className="text-sm text-red-700">*Requerido</span>}
          </div>
          <div>
            <label htmlFor="message" className="mb-2 inline-block text-sm text-oscure-primary-100 sm:text-base">{languageData.message}</label>
            <input id="message" type="text" className="w-full rounded border bg-light-accent-100/90 px-3 py-2 text-gulf-blue-400 outline-none ring-gulf-blue-300 transition duration-100 focus:ring" {...register('message', { required: true })} />
            {errors.message && <span className="text-sm text-red-700">*Requerido</span>}
          </div>
          <div className="flex items-center justify-between sm:col-span-2">
            <button className="inline-block rounded-lg bg-gulf-blue-800 px-8 py-3 text-center text-sm font-semibold dark:text-light-bg-100 text-oscure-bg-100 outline-none ring-white transition duration-100 hover:bg-light-bg-100 dark:hover:bg-oscure-bg-100 focus-visible:ring active:bg-light-bg-100 md:text-base">{languageData.send}</button>
          </div>
          {isEmailSend && (
            <p className="text-xs text-gulf-blue-400">{languageData.thankYouMessage}<a href="" className="underline transition duration-100 hover:text-gulf-blue-500 active:text-gulf-blue-600 ">RocketHz</a></p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;