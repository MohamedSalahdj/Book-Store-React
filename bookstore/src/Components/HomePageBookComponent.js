import './HomePageBookComponent.css'


function HomePageBookComponent(props) {
    return (
        <>
            <div className="card m-1 bg-transparent " style={{ width: "16rem" }} id={props.id}>
                <a to={`/movie/${props.id}`}>
                    <div className='cardImgHov'>
                        <img src={`${props.cardSrc}`} className="card-img-top w-100" ></img>
                    </div>
                </a>
                <div className="card-body text-center text-white">
                    <p className="card-text ">{props.cardTilte}</p>
                </div>
            </div>
        </>
    )
}
export default HomePageBookComponent