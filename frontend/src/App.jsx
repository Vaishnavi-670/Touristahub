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
          <Route path='/addplace' element={<Place/>}/>
          <Route path='/browseplace/:location' element={<BrowsePlaces/>}/>
          <Route path='/manageplace/:location' element={<ManagePlaces/>}/>
          <Route path='/desinations/:location' element={<Destinations/>}/>
          
       </Routes>
       </AppProvider>
     </BrowserRouter>
    </div>
  )
}

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
