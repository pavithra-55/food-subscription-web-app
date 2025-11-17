import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route,Navigate  } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Subscription from './pages/Subscription';
import Login from './pages/Login';
import Register from './pages/Register';
import Candidate from './pages/Candidate';
// import Routers from './routes/AppRoutes';



function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='subscription' element={<Subscription />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path="contact" element={<Contacts />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='candidate' element={isLoggedIn ? <Candidate /> : <Navigate to="/login" />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
