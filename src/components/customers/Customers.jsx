import { React, useState, useEffect } from 'react';
import Tarjeta from './Card2.jsx';


export default function Customers() {
    const [isLoading, setIsLoading] = useState(true);
    const [customers, setCustomers] = useState(null);
    const [quotesAreLoading, setQuotesAreLoading] = useState(true);
    const [quotes, setQuotes] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=16&nat=es")
        .then((response) => response.json())
        .then((rj) => {
          setCustomers(rj.results); // ⬅️ Guardar datos
          setIsLoading(false); // ⬅️ Desactivar modo "cargando"
        });
    }, []);

    useEffect(() => {
      fetch("https://api.quotable.io/quotes/random/?limit=20")
      .then((response) => response.json())
      .then((rj) => {
        setQuotes(rj); // ⬅️ Guardar datos
        setQuotesAreLoading(false); // ⬅️ Desactivar modo "cargando"
      });
    }, []);


    if (isLoading || quotesAreLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
      return (
        <div className="App">
          <h1>Cargando...</h1>
        </div>
      );
    }
  
    return (

    <div className="relative isolate  mt-20 ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#facc15] to-[#eff6ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

      <h2>Nuestros Clientes</h2>
      <div className="container  flex  flex-wrap text-center">

        {customers.map((customer, index) => {
          console.log(customer)
          customer.name = customer.name.first + " " + customer.name.last
          customer.place = customer.location.city
          customer.originplace = customer.location.city
          customer.image = customer.picture.medium
          customer.username = customer.login.username
          customer.quote = quotes[index].content
          return (
            <div key={index}>
              <Tarjeta person={customer} />
            </div>
          );
        })}

      </div>
    </div>
  );
}