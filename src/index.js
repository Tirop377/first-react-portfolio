import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
      </Routes>
      <Footer/>
    </React.StrictMode>
  </BrowserRouter>

  
);


