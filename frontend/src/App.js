//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';


function App() {
  return ( <div className="App">
   <Router>
    <Header></Header>
    <Nav/>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/nosotros" exact element={<NosotrosPage/>}/>
        <Route path="/servicios" exact element={<ServiciosPage/>}/>
      </Routes>
  
    <Footer/>
    </Router>
  </div>
    
  );
}

export default App;
