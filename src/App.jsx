import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
// import Routers from './routes/AppRoutes';



function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path="contact" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
