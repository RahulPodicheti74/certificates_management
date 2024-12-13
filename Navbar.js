import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">VAAGDEVI</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/selectabatch">Select Batch</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/welcome">Welcome</Link>
          </li>
          <li className="nav-item">                                   
            <Link className="nav-link active" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-disabled="true" to='/uploadcertificate' >Upload certificate</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-disabled="true" to='/editcertificate' >Edit Cetificate</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-disabled="true" to='/register' >Register Certificate</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-disabled="true" to='/certificateforbatch' >Certificates for Batch</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar
