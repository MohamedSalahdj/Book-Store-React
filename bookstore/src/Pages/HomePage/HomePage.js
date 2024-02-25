import { useEffect, useState, useTransition } from "react"
import headerImg from '../../Images/pexels-stanislav-kondratiev-2908984.jpg'

import './HomePage.css'
import axios from "axios"
import HomePageBookComponent from "../../Components/HomePageBookComponent"
import HeroSectionBooksComponent from "../../Components/HeroSectionBooksComponent"
import { Link } from "react-router-dom"
function HomePage() {

    const [imagePos, setImagePos] = useState({
        xPos: 0,
        yPos: 0
    })

    function handlePosition(e) {
        const deltaX = ((e.clientX - window.innerWidth / 2 - 100) / 100) * 1
        const deltaY = ((e.clientY - window.innerHeight / 2 - 100) / 100) * 1
        const deltaXCheck = (deltaX < 0) ? ((deltaX < -10) ? -10 : deltaX) : 0
        const deltaYCheck = (deltaY < 0) ? ((deltaY < -10) ? -10 : deltaY) : ((deltaY > 10) ? 10 : deltaY)

        setImagePos({
            xPos: deltaXCheck,
            yPos: deltaYCheck,

        })

    }
    const [pages, setPages] = useState({
        results: []

    })
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?language=eng&api_key=da4e0d3bd6b4f860b5788aa43ae24d86`)
            .then((res) => (setPages({
                results: res.data.results
            })))
            .catch((err) => console.log(err))
    }, [imagePos])
    const getMoviesToSort = [...pages.results]
    const topFourMovies = (getMoviesToSort.sort((a, b) => b.vote_average - a.vote_average)).slice(0, 2)
    const testMovies = pages.results.slice(0, 6)
    return (<>
        <div className="wrapper">

            <div className="poistion-relative Herocontainer">
                <div className="HomeBackground position-absolute w-100   "
                    style={{ transform: `translate(${imagePos.xPos}px,${imagePos.yPos}px) scale(1)` }}
                    onMouseMove={(e) => handlePosition(e)}>
                </div>

                <div className="container position-relative w-25  latestBooks">
                    <div className="row h-75 justify-content-lg-start align-items-center">
                        {
                            topFourMovies.map((movie) => {
                                return (<HeroSectionBooksComponent cardTilte={movie.title} cardSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} footer={movie.release_date} id={movie.id}></HeroSectionBooksComponent>)

                            })
                        }
                        <h1 className="text-white">Check our latest</h1>
                        <h2 className="text-white">By: Dr.Ahmed Khalid</h2>
                    </div>
                </div>

            </div>
            <div className="container bookCategContianer    pb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                        <h2 className="mb-5 mt-5" style={{ color: "#C12748" }}>New Arrivals	</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                        <Link><p className="mb-5 mt-5" style={{ color: "#1C8CDE" }}>{`More new Arrivals>`}</p>	</Link>
                    </div>
                </div>
                <div className="row justify-content-center ">
                    {
                        testMovies.map((movie) => {
                            return (<HomePageBookComponent cardTilte={movie.overview.slice(0, 45) + '...'} cardSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} footer={movie.release_date} id={movie.id}></HomePageBookComponent>)

                        })
                    }
                </div>
            </div>

            <div className="container bookCategContianer  pb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                        <h2 className="mb-5 mt-5" style={{ color: "#C12748" }}>Children's Non-Fiction</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                        <Link><p className="mb-5 mt-5" style={{ color: "#1C8CDE" }}>{`More Children's Non-Fiction>`}</p>	</Link>
                    </div>
                </div>
                <div className="row justify-content-center ">
                    {
                        testMovies.map((movie) => {
                            return (<HomePageBookComponent cardTilte={movie.overview.slice(0, 45) + '...'} cardSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} footer={movie.release_date} id={movie.id}></HomePageBookComponent>)

                        })
                    }
                </div>
            </div>
            
        </div>

    </>)
}

export default HomePage