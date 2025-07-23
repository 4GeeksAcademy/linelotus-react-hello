import React from "react";

const Navbar = () => {
    return(    
        
       <nav className="navbar navbar-expand-lg text-bg-secondary mb-5">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
  
    <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active link-light" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Contact</a>
  </li>
</ul>
  </div></nav>  )

} 

export default Navbar