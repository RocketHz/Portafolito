import { useEffect, useState } from 'react';

export const useTheme = (initialTheme) => {
 const [theme, setTheme] = useState(initialTheme);

 const handleChange = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    // Añadir o quitar la clase 'dark' del elemento raíz del documento
    document.documentElement.classList.remove(theme === 'dark' ? 'dark' : 'light');
    document.documentElement.classList.add(newTheme);
 };

 useEffect(() => {
    // Añadir la clase 'dark' al elemento raíz del documento si el tema es oscuro
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
 }, [theme]);

 return [theme, handleChange];
};
