import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Redireccionar después de 5 segundos
    const timer = setTimeout(() => {
      window.location.href = `https://${import.meta.env.VITE_APP_URL}`;
    }, 5000);

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
