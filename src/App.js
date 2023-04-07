import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Form from './components/form/Form.jsx';
import Footer from './components/footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <Routes>
        <Route path={'/Home' } element={<Home/>}/>
        <Route path={'/' } element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Form' element={<Form/>}/>
      </Routes>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
