import React from 'react'
import {Link} from 'react-router-dom'

const Navbar =()=>{
    return(
        
           <>
           <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">CRUD</Link>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                                </li>



                            </ul>

                        </div>
                        <Link className="btn btn-outline-light" to="/users/AddUser">Add User</Link>
                    </div>
                </nav>
           </div>
            
           </>

        
    )
}
export default Navbar;