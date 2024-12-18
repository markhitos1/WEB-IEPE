import React from 'react';
import './App.css'

function App() {
  console.log('API URL:', import.meta.env.VITE_APP_API_URL);
  const URL = import.meta.env.VITE_APP_API_URL;

  return (
    <div>
      <h1>Variable de Entorno en React</h1>
      <p>API URL: {import.meta.env.VITE_APP_API_URL}</p>
      <a href={URL}>Ir a la URL</a>

    </div>
  );
}


export default App
