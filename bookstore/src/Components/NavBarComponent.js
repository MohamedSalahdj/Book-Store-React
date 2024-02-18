import './NavBarComponent.css'


function NavBarComponent() {
    return (<>
        <nav class="navbar navbar-expand-lg sticky-top  mynavBar  navbar-dark bg-transparent justify-content-center">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler btn-white text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="container-fluid w-25">
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