import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Card.css"
function Card(props) {

    return (
        <>

            <div className="card  p-2 shadow h-100" id={props.productId}>
                <div className='product-image'>
                    <img src={props.productImage} className="card-img-top" alt={props.productTitle} style={{ "height": "259px" }} />
                    <p className={`fas fa-heart heart-top 'text-warning bg-black'}`}></p>
                    {/* onClick={(e) => addtoFavo(e)}        ${getProductsId.includes(`${props.productId}`) && ' */}
                </div>

                <div className="card-body">
                    <Link to={`/productdetails/${props.productId}`} className='text-decoration-none'>
                        <h4 className="card-title product-title">{props.productTitle}</h4>
                    </Link>
                    <p className=" price align-middle fs-7">${props.productPrice}</p>
                    <p className="card-text ">{props.productDescription}</p>
                    {/* onClick={() => handleAddToCart(props.productId)} */}
                </div>

                <div className="buttom">
                    <button id={props.productId} className="btn text-light me-2 px-lg-4 add-to-card px-1" >Add To Cart</button>
                </div>
            </div>
        </>
    )
}
export default Card;