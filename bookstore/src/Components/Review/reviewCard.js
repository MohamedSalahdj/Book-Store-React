

function ReviewCard(props) {
  return (
    <>
      {/* <div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
<div className="container px-lg-5 px-md-2 px-sm-0 mb-4">
      <div className="card w-100 border border-1 p-2 bg-light px-4">
        <div className="d-flex align-items-top">
            <img
              className="card-img rounded-circle border border-2 mt-3 me-3 p-1 border-success align-middle"
              style={{ height: "4rem", width: "4rem" }}
              src={require("../../Images/person-icon-1901x2048-a9h70k71.jpeg")}
            />
          <div className="d-inline-block my-lg-2 pt-1 mx-2">
            <div className="mt-1 fw-bold fs-5 pb-0 mb-0">{props.user}</div>
            <div className="text-dark-emphasis fs-5 pt-0 mt-0">{props.date}</div>
          </div>
        </div>
        <div>
            <div className="card-body">
            <div className="mb-2">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <i
                  className={
                    currentRating <= props.rate
                      ? "mb-1 bi bi-star-fill"
                      : "bi bi-star mb-1 "
                  }
                ></i>
              );
            })}
            </div>
                <p className="text-dark-emphasis">{props.review}</p>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ReviewCard;
