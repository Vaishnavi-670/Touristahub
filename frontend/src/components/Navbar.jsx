import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useAppContext from '../AppContext';


const Navbar = () => {

  const {LoggedIn, logout}=useAppContext();

  
  const showLoginOptions = () =>{
     if(LoggedIn){
      return(
        <li className='nav-item'>
          <button onClick={logout} className='btn btn-danger'>Logout</button>
        </li>
      )
     }else{
      return <>  
        <div className='d-flex'>                 
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        </li>

        <li className="nav-item ">
          <NavLink
            className="nav-link " to="/login"> 
            Login
            </NavLink>
            </li>

        <li className="nav-item ">
          <NavLink
            className="nav-link " to="/contact"> 
            Contact
            </NavLink>
            </li>

            <li className="nav-item ">
          <NavLink
            className="nav-link " to="/addplace"> 
            Places to Visit
            </NavLink>
            </li>
            
            <li className="nav-item ">
          <NavLink
            className="nav-link " to="/destinations"> 
           Destinations
            </NavLink>
            </li>
          </div>
      </>
     }
  }
  return (
    <nav className="navbar navbar-expand-lg   bg-transparent overflow-y-hidden" >
  <div className="container-fluid">
    <img  style={{height:'60px', width:'100px', objectFit:'cover'}} src="https://media.istockphoto.com/id/1637056982/vector/travel-agency-business-logo-transport-logistics-delivery-logo-design.jpg?s=612x612&w=0&k=20&c=b1SGg7tQ9DGPDpzLvWJgqUl_LyrBzAQpabPw-RJfg5s=" alt="" />
    
    <div  >
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
           {showLoginOptions()}
        </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar