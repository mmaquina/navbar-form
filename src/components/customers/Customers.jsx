import React from 'react';
import Tarjeta from './Card.jsx';


export default function Footer() {
    return (
      <div className="container">
        <h2>Nuestros Clientes</h2>

            <Tarjeta     person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} />
      </div>
  );
}