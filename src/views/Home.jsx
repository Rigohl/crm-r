import React from 'react';

function Home() {
  const user = localStorage.getItem('user');

  const openWhatsApp = () => {
    window.open('https://web.whatsapp.com', '_blank');
  };

  const goToCRM = () => {
    alert('CRM no implementado aún. Aquí irá la Fase 2.');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Hola, {user}</h2>
      <p>Selecciona una opción:</p>
      <button onClick={openWhatsApp}>Chat Personal</button>
      <button onClick={goToCRM}>CRM / Trabajo</button>
    </div>
  );
}

export default Home;
