import { Link } from 'react-router-dom';

import './NavBarComponent.css'
import { useEffect, useState } from 'react';

function NavBarComponent() {

    const [scrolling, setScorlling] = useState(false);
    useEffect(() => {
        console.log(window)
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScorlling(true);
            } else {
                setScorlling(false);
            }
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [scrolling])
    return (<>

        <nav class={`navbar navbar-expand-lg sticky-top  mynavBar  bg-dark  navbar-dark justify-content-center`}>
            <div class="container-fluid">
                <button class="navbar-toggler btn-white text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                        <li class="nav-item">
                            <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/books">Books</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/register">Register</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/publisherorder">PublisherOrderList</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="#">Action</Link></li>
                                <li><Link class="dropdown-item" to="#">Another action</Link></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="container-fluid w-25 ">
                        <form class="d-flex" role="search">
                            <input class="form-control  form-control-sm me-2 bg-transparent text-white" type="search" placeholder="Search here" aria-label="Search"></input>
                            <button class="btn btn-outline-light " type="submit">Search</button>
                        </form>
                    </div>
                </div>

            </div>
        </nav>
    </>)
}
export default NavBarComponent