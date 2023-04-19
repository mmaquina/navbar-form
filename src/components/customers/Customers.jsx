import { React, useState, useEffect } from 'react';
import Tarjeta from './Card.jsx';

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())  
	.then((response) => {
        console.log(response.results[1]);
    });



export default function Customers() {
    const [isLoading, setIsLoading] = useState(true);
    const [customers, setCustomers] = useState(null);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((rj) => {
          setCustomers(rj.results); // ⬅️ Guardar datos
          setIsLoading(false); // ⬅️ Desactivar modo "cargando"
        });
    }, []);

    if (isLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
      return (
        <div className="App">
          <h1>Cargando...</h1>
        </div>
      );
    }
  
    return (
      <div className="container">
        <h2>Nuestros Clientes</h2>

        {customers.map((customer, index) => {
          return (
            <div key={index}>
              <Tarjeta     person={customer} />
            </div>
          );
        })}

      </div>
  );
}