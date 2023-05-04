import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Form from './components/form/Form.jsx';
import Footer from './components/footer/Footer.jsx';
import Form2 from './components/form/Form2.jsx';
import Customers from './components/customers/Customers.jsx';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

import User from "./components/reduxEx/User.jsx"
export const UserContext = React.createContext();




function App() {

  const user = {
    nombre: 'Rober',
    edad: 36,
    admin: true
  }

    return (
      <UserContext.Provider value={user}>
        <User/>
        {/* <div className="App">
          <header className="App-header">
          <Navbar/>
          <Routes>
            <Route path={'/Home' } element={<Home/>}/>
            <Route path={'/' } element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Form' element={<Form/>}/>
            <Route path='/Form2' element={<Form2/>}/>
            <Route path='/Clientes' element={<Customers/>}/>
          </Routes>
          <Footer/>
          </header>
        </div> */}
      </UserContext.Provider>

    );

}

export default App;
