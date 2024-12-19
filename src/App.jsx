import React from 'react';
import './App.css'

function App() {
  console.log('API URL:', import.meta.env.VITE_APP_URL);
  const URL = `https://${import.meta.env.VITE_APP_URLL}`;

  return (
    <div>
      <h1>Variable de Entorno en React</h1>
      <p>API URL: {import.meta.env.VITE_APP_URL}</p>
      <a href={URL}>Ir a la URL</a>

    </div>
  );
}


export default App
