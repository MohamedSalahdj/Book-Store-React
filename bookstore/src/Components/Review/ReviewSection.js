import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReviewCard from "./reviewCard";

function ReviewSection() {
  const [rate, setRate] = useState(null);
  const [hover,setHover]=useState(null);
  return (<>
  <head>
<link rel="stylesheet" href="./review.css"/>
  </head>
    <div className="container">
    {/* Review card rendering */}
  {/*<div className=' container mb-3 fs-3'>Reviews</div>
    <ReviewCard date={"09-22-2012"} rate={4} user={"alaa khaled"}  review={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum earum sed beatae saepe adipisci. Corporis."}/>*/}
      <div>There are no reviews yet</div>
      <div className="container border-5">
        <div className="fs-3">
          Be the first to review "the sons of the Empire"
        </div>
        <div className="fw-lighter">
          Your email address will not be published. Required field are marked *
        </div>
        <div className="mt-3">
          <span>Your rating *</span>
          <span className="ms-3">{
            [...Array(5)].map((star,index)=>{
              const currentRating=index+1;
              return(
              <i 
              value={currentRating}
              onClick={()=>{rate!=currentRating?setRate(currentRating):setRate(null)}}
              onMouseEnter={() =>setHover(currentRating)}
              onMouseLeave={()=>setHover(null)}
              className={currentRating<=(hover||rate)?"mb-1 setcusor bi bi-star-fill":"bi bi-star mb-1 setcusor"}
></i>
              );
            })
          }
          </span>
        </div>
        <div className="mt-3">
          Your review *
          <textarea
            className="d-block"
            rows="4"
            style={{ width: "100%", resize: "none" }}
          ></textarea>
        </div>
        <Row className="mt-3">
          <Col lg={6}>
            Name *
            <textarea
              className="d-block"
              rows="2"
              cols="50"
              style={{ width: "100%", resize: "none" }}
            ></textarea>
          </Col>
          <Col lg={6}>
            Email *
            <textarea
              className="d-block"
              rows="2"
              cols="50"
              style={{ width: "100%", resize: "none" }}
            ></textarea>
          </Col>
        </Row>
        <div className="d-inline-flex mt-3">
          <input type="checkbox" id="SaveData" className="d-inline" />
          <label htmlFor="SaveData" className="ms-1 fs-6 d-inline">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <button
          type="button"
          className="btn btn-outline-success mt-3 d-block"
          style={{ borderRadius: "0px" }}
        >
          Submit
        </button>
      </div>
    </div>
    </>
  );
}

export default ReviewSection;
