import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
//import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <About/>
      </header>
    </div>
  );
}

export default App;
