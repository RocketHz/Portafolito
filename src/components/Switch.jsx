import React from 'react';
import { useTheme } from '../utils/useTheme';

export const Switch = () => {
 const [theme, handleChange] = useTheme('light');

 return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        className="sr-only peer"
        type="checkbox"
        onChange={handleChange}
        checked={theme === 'dark'}
      />
      <div className="w-16 h-8 rounded-full ring-0 peer duration-500 outline-none bg-light-bg-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-6 before:w-10 before:top-1/2 before:bg-light-primary-100 before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-light-accent-100 peer-checked:shadow-lg peer-checked:shadow-oscure-accent-100 peer-checked:bg-oscure-bg-300 after:content-['🌑'] after:absolute after:bg-oscure-accent-200 after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
      />
    </label>
 );
};
