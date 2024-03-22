import React, { useContext } from 'react'
import CalendarSvg from '../svgs/CalendarSvg'
import LanguageSvg from '../svgs/LanguageSvg';
import FlagVenezuelaSvg from '../svgs/FlagVenezuelaSvg';
import { LanguageContext } from './LanguageContext';

const HeroProfileCard = () => {

  const { languageData } = useContext(LanguageContext);

  const birthDate = new Date(1998, 2, 28); // Ajusta el índice del mes (0-11)
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }

  return (
    <div className="max-w-2xl mx-4 sm:max-w-xs md:max-w-xs lg:max-w-xs xl:max-w-xs sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto my-16 bg-oscure-bg-300/25 dark:bg-oscure-bg-100/95 shadow-xl rounded-lg text-gray-900">
  <div className="rounded-t-lg h-32 overflow-hidden">
    <img
      className="object-cover object-top w-full rounded-none"
      src="https://media.istockphoto.com/id/1341328946/es/foto/concepto-de-mapa-mental-de-habilidades-blandas-en-estilo-manuscrito.webp?b=1&s=170667a&w=0&k=20&c=JUB3KCtIntJ8k73cKYBeu5zQ6hE7GX0CZt3D9HkUhPg="
      alt="Mountain"
    />
  </div>
  <div className="mx-auto h-40 w-24 relative -mt-16 border-4 border-light-bg-100 rounded-full overflow-hidden">
    <img
      className="object-cover object-center"
      src="/profile9.jpg"
      alt="Woman looking front"
    />
  </div>
  <div className="text-center mt-2">
    <h2 className="text-3xl font-semibold text-light-accent-200">{languageData.profilename}</h2>
    <p className="text-light-text-100 dark:text-oscure-text-100">{languageData.profiletitle}</p>
  </div>
  <ul className="py-4 mt-2 text-light-text-100 dark:text-oscure-text-100 flex items-center justify-around">
    <li className="flex flex-col items-center justify-around">
      <FlagVenezuelaSvg/>
      <span><b>{languageData.profilenationality}</b></span>
    </li>
    <li className="flex flex-col items-center justify-between">
      <LanguageSvg/>
      <span>{languageData.spanish}: <b>{languageData.profilelanguages}</b></span>
      <span>{languageData.english}: <b>B1</b></span>
    </li>
    <li className="flex flex-col items-center justify-around">
      <CalendarSvg/>
      <span>{languageData.profileage}</span>
      <span>{age}</span>
    </li>
  </ul>
</div>
  )
}

export default HeroProfileCard