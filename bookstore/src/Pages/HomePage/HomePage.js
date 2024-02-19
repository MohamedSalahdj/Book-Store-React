import { useEffect, useState, useTransition } from "react"
import headerImg from '../../Images/pexels-stanislav-kondratiev-2908984.jpg'

import './HomePage.css'
import axios from "axios"
import HomePageBookComponent from "../../Components/HomePageBookComponent"
import HeroSectionBooksComponent from "../../Components/HeroSectionBooksComponent"
function HomePage() {
    const [imagePos, setImagePos] = useState({
        xPos: 0,
        yPos: 0
    })

    function handlePosition(e) {
        const deltaX = ((e.clientX - window.innerWidth / 2 - 100) / 100) * 1
        const deltaY = ((e.clientY - window.innerHeight / 2 - 100) / 100) * 1
        const deltaXCheck = (deltaX < 0 ) ? ((deltaX < -10) ? -10 : deltaX) : 0 
        const deltaYCheck = (deltaY < 0 ) ? ((deltaY < -10) ? -10 : deltaY) : ((deltaY > 10) ? 10  : deltaY)

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
    const testMovies = pages.results.slice(0,4)
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
                <div className="HeroTitle text-white position-relative col-2">
                    {/* <h1>Hello, Have you read a book today</h1> */}
                </div>
            </div>
            <div className="container mt-5 border-bottm mt-5">
                <h2 className="mb-5 mt-5" style={{color:"#C12748"}}>New Arrivals	</h2>
                <div className="row justify-content-center ">
                    {
                        testMovies.map((movie) => {
                            return (<HomePageBookComponent cardTilte={movie.overview} cardSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} footer={movie.release_date} id={movie.id}></HomePageBookComponent>)

                        })
                    }
                </div>
            </div>
            <div className="container mt-5 border-bottm mt-5">
                <h2 className="mb-5" style={{color:"#C12748"}}>Top Rated Books</h2>
                <div className="row justify-content-center ">
                    {
                        testMovies.map((movie) => {
                            return (<HomePageBookComponent cardTilte={movie.overview} cardSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} footer={movie.release_date} id={movie.id}></HomePageBookComponent>)

                        })
                    }
                </div>
            </div>
        </div>

    </>)
}

export default HomePage