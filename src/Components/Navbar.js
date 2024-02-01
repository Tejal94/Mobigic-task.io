import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TSF</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={'/'} className="nav-link active">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/filelist'} className="nav-link">File List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/uploadfile'} className="nav-link">Upload File</NavLink>
                            </li>                             
                        </ul>
                        
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar