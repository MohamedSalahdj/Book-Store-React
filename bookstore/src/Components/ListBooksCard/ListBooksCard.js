import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./ListBooksCard.css"

function ListBooksCard(props) {

    return (
        <>

            <div className="card m-1 bg-transparent pt-3 shadow " style={{ width: "12rem" }} id={props.id}>

                <Link to={`/movie/${props.id}`}>

                    <div className='Img'>
                        <img src={`${props.cardSrc}`} style={{ width: "5rem" }} className="card-img-top w-100" ></img>
                    </div>

                    <span className="rating" data-toggle="tooltip" data-placement="right"
                        title="The rateing"  > {props.rate}<i className="ps-1 bi bi-star-fill  " style={{ color: "#27ae60" }}> </i></span>

                    <i className="bi bi-heart heart-top " data-toggle="tooltip" data-placement="right" title="Add To Favorite"></i>

                </Link>

                <div className="card-title text-center mt-2  m-0 p-0" >

                    <p className="m-0 p-0" data-toggle="tooltip" data-placement="right"
                        title={`${props.titleAll}`}  >{props.title}</p>
                </div>

                <p className="text-start card-body m-0 p-0 " data-toggle="tooltip" data-placement="right"
                    title={`${props.movieDescreptionsAll}`} >{props.movieDescreptions}</p>

                <ul className="m-2">
                    <li className="my-1 rounded text-decoration-none" type="">
                        <div className="float-start">
                            <i className="bi bi-cart-plus  cart-down" data-toggle="tooltip" data-placement="right"
                                title="Add To Cart"></i>
                        </div>
                        <div className="float-end">
                            <span className="ps-2  price" data-toggle="tooltip" data-placement="right"
                                title="The total price"  >EGP: {props.price}.0</span>
                        </div>

                    </li>
                </ul>
            </div>
        </>
    )
}
export default ListBooksCard;