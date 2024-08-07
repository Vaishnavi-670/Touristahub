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
            
            
      </>
     }
  }
  return (
    <nav className="navbar navbar-expand-lg   bg-transparent overflow-y-hidden" >
  <div className="container-fluid">
    <img  style={{height:'60px', width:'100px', objectFit:'cover'}} src="https://media.istockphoto.com/id/1637056982/vector/travel-agency-business-logo-transport-logistics-delivery-logo-design.jpg?s=612x612&w=0&k=20&c=b1SGg7tQ9DGPDpzLvWJgqUl_LyrBzAQpabPw-RJfg5s=" alt="" />
    {/* <button
      className="navbar-toggler"
      type="button"
      // data-bs-toggle="collapse"
      // data-bs-target="#navbarSupportedContent"
      // aria-controls="navbarSupportedContent"
      // aria-expanded="false"
      // aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           {showLoginOptions()}
        </ul>

      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
    </div>
  </div>
</nav>

  )
}

export default Navbar