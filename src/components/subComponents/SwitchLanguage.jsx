import React from "react";
import { useLanguage } from "./LanguageContext";

const SwitchLanguage = () => {
 const { language, setLanguage } = useLanguage();

 return (
    <label className="relative inline-flex items-center cursor-pointer mx-2">
      <input
        className="sr-only peer"
        type="checkbox"
        onChange={() => setLanguage(language === "en" ? "es" : "en")} // Corregido aquí
      />
      <div className="w-16 h-8 rounded-full ring-0 peer duration-500 outline-none text-light-bg-100 bg-light-bg-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['ES'] before:absolute before:h-6 before:w-10 before:top-1/2 before:bg-light-text-100 before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:-translate-y-full peer-checked:shadow-lg peer-checked:shadow-oscure-accent-100 peer-checked:bg-oscure-text-100 after:content-['EN'] after:absolute after:bg-oscure-bg-100 after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:translate-y-0"
      />
    </label>
 );
};

export default SwitchLanguage;
