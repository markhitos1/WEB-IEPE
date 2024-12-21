import { useEffect } from 'react';
import './App.css'

function App() {
  console.log(import.meta.env.VITE_VERCEL_URL);
  
  useEffect(() => {
    // Redireccionar después de 5 segundos
    const timer = setTimeout(() => {
      window.location.href = `${import.meta.env.VITE_VERCEL_URL}`;
    },30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader">
      <div className="ring"></div>
      <div className="ring"></div>
      <img
        src="https://iepe-portal.vercel.app/assets/LOGO/logo-rojo.svg"
        alt="Logo"
      />
    </div>
  );
}

export default App;
