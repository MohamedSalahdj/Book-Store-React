import { Link } from 'react-router-dom'
import './HomePageBookComponent.css'


function HomePageBookComponent(props) {
    return (
        <>
            <div className="card m-1 bg-transparent " style={{ width: "12rem" }} id={props.id}>
                <Link to={`/movie/${props.id}`}>
                    <div className='cardImgHov'>
                        <img src={`${props.cardSrc}`}  style={{ width: "5rem" }} className="card-img-top w-100" ></img>
                    </div>
                </Link>
                <div className="card-body text-center text-white">
                    <p className="card-text ">{props.cardTilte}</p>
                </div>
            </div>
        </>
    )
}
export default HomePageBookComponent