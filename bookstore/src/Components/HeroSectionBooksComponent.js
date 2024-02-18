function HeroSectionBooksComponent(props) {
    return (
        <div className=" col-lg-4 col-md-6 col-sm-12 col-12 me-3">
            <div className="card m-1 " style={{ width: "8rem" }} id={props.id}>
                <a to={`/movie/${props.id}`}>
                    <img src={`${props.cardSrc}`} className="card-img-top" ></img>
                </a>
            </div>
        </div>
    )
}
export default HeroSectionBooksComponent