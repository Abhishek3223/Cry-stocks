import React from 'react'
import { Link } from 'react-router-dom'
// import '../css/navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="#">
                        <span className="logo">Scraper</span>
                        <span className="stylish" style={{ "color": "#4c71ea", "fontSize": "30px" }}>.cry</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                                <Link to='/dashboard' class="nav-link mx-3" href="#">Discover</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-3" href="#">News</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-3" href="#">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-3" href="#">News</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-3" href="#">About</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar