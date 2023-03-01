import './App.css';
import { BrowserRouter  , Route , Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';

import './Styles/App.scss';
import './Styles/Header.scss';
import './Styles/Home.scss';
import './Styles/Mediaquery.scss'

function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
