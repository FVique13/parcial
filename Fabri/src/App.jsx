import React, { useState } from 'react';
import './App.css';
import Card from './Card';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 3 || nombre.trim().indexOf(' ') === 0) {
      setError('Por favor, introduce un nombre válido.');
      return;
    }

    if (apellido.trim().length < 6) {
      setError('El apellido debe tener al menos 6 caracteres.');
      return;
    }

    setError('');

  };

  return (
    <div className="container">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre" className="label">Nombre:</label>
          <input type="text" id="nombre" className="input" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="apellido" className="label">Apellido:</label>
          <input type="text" id="apellido" className="input" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <button type="submit" className="button">Enviar</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <Card nombre={nombre} apellido={apellido} />
    </div>
  );
};

export default App;

