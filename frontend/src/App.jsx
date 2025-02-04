import React from 'react'
import'./App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { SnackbarProvider } from 'notistack';
import { AppProvider } from './AppContext';
import Place from './components/AddPlace';
import BrowseLocations from './components/BrowseLocations';
import BrowsePlaces from './components/BrowsePlaces';
import ManagePlaces from './components/ManagePlaces';
import Destinations from './components/Destinations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
const App = () => {
  return (
    <div><SnackbarProvider maxSnack={3} anchorOrigin={{vertical:'top',horizontal:'right'}}/>
     <BrowserRouter>
      <AppProvider>
       {/* <Link to="/">Home</Link>
       <Link to="/login">Login</Link>
       <Link to="/signup">Signup</Link> */}

       <Navbar></Navbar>

       <Routes>
          <Route path='/' element={<BrowseLocations/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/addplace' element={<Place/>}/>
          <Route path='/browseplace/:location' element={<BrowsePlaces/>}/>
          <Route path='/manageplace/:location' element={<ManagePlaces/>}/>
          <Route path='/destinations' element={<Destinations/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          
       </Routes>
       <Footer/>
       </AppProvider>
     </BrowserRouter>
    </div>
  )
}

export default App;


