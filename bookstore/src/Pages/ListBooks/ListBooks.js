import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import ListBooksCard from "../../Components/ListBooksCard/ListBooksCard"
import "./ListBooks.css"
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import HomePageBookComponent from "../../Components/HomePageBookComponent"
import Footer from "../../Components/Footer/Footer"

function ListBooks() {

    const BaseMainUrl = "https://api.themoviedb.org/3/movie/popular"
    const BaseAPI = "6883a4d02a15e877d54e507dbc703331"

    const BaseCategoriesUrl = "https://dummyjson.com/products/category/"

    const [Products, setProducts] = useState([])
    const [recentProducts, setRecentProducts] = useState([])
    const [Category1, setCategory1] = useState([])
    const [Category2, setCategory2] = useState([])
    const [Category3, setCategory3] = useState([])
    const [Category4, setCategory4] = useState([])
    const [skipItem, setSkipItem] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)

    const [Movies, setMovie] = useState([])

    useEffect(() => {


        axios.get(`${BaseMainUrl}?api_key=${BaseAPI}&page=${pageNumber}`)
            .then((res) => setMovie(res.data.results))
            .catch((err) => console.log(err))

    }, [pageNumber, skipItem])


    const previousPage = (pagNum) => {
        setPageNumber(--pagNum)
        if (pagNum == 1) {
            setSkipItem(0)
        }
        else if (pagNum == 2) {
            setSkipItem(25)
        }
        else if (pagNum == 3) {
            setSkipItem(50)
        }
        else if (pagNum == 4) {
            setSkipItem(75)
        }

    }

    const nextPage = (pagNum) => {
        setPageNumber(++pagNum)
        if (pagNum == 1) {
            setSkipItem(0)
        }
        else if (pagNum == 2) {
            console.log("yes in page 2")
            setSkipItem(25)
        }
        else if (pagNum == 3) {
            setSkipItem(50)
        }
        else if (pagNum == 4) {
            setSkipItem(75)
        }
    }

    return (
        <div >

            <h2 className=" text-center text-success pb-3 mt-5 mt-0"> Welcome to Our Books Store</h2>
            {/* <hr style={{ "color": "gray", "borderWidth": "4px" }} className="my-2" /> */}

            <ol className="breadcrumb mt-5 p-1 bg-secondary ">
                <li className="breadcrumb-item  ms-3"><Link className="text-muted" to="/">Home</Link></li>
                <i class="bi bi-chevron-right mx-2"></i>
                <li className="breadcrumb-item active " aria-current="page"><Link className="" to="/book">Book</Link></li>
            </ol>

            <div className="container bookCategContianer  pb-5">

                <h2 className="mb-3 mt-3 col-lg-6 col-md-6 col-sm-12" style={{ color: "#C12748" }}>All Books</h2>

                <div className="row justify-content-center ">
                    {
                        Movies.map((movie) => {
                            return (

                                <ListBooksCard
                                    title={movie.title.slice(0, 13) + '...'}
                                    titleAll={movie.title}
                                    cardSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    footer={movie.release_date}
                                    id={movie.id}
                                    movieDescreptions={movie.overview.slice(0, 23) + '...'}
                                    movieDescreptionsAll={movie.overview}
                                    allData={movie.movie}
                                    rate={movie.vote_average.toFixed(2)}
                                    price={movie.vote_count.toFixed(0)}
                                />
                            )

                        })
                    }
                </div>
            </div>

            <div data-toggle="tooltip" data-placement="right" title="Back to top">
                <ScrollUpButton />
            </div>

            <ul class="pagination  justify-content-center m-3">
                {pageNumber > 1 ? <li className="page-item"><button onClick={() => previousPage(pageNumber)} className='page-link'>Previous</button></li>
                    : <li className="page-item"><button onClick={() => previousPage(pageNumber)} className='page-link disabled'>Previous</button></li>}
                {pageNumber >= 1 && pageNumber <= 3 ? <li className="page-item"> <button onClick={() => nextPage(pageNumber)} className='page-link'>Next</button></li>
                    : <li className="page-item"> <button onClick={() => nextPage(pageNumber)} className='page-link disabled'>Next</button></li>}

            </ul>

        </div>
    )
}

export default ListBooks;