import * as Icon from 'react-bootstrap-icons';
import MyProgressBar from "./MyProgressBar";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Card, Col, Row } from 'react-bootstrap';
import { Container } from "reactstrap";

function My_Rating(){
  const [review,setReview]=useState("")
  useEffect(() => {
    axios
      .get(`https://retoolapi.dev/k265Ls/data/1`)
      .then((res) => {        
        setReview(res.data)})
      .catch();
  }, []);

    return (<>
    <Container fluid>
    <div><h1>Review</h1></div>
    <Row >
    <Col lg={3}>
    <Card className="text-center shadow">
      <Card.Body>
      <div>
        <Card.Text className="fw-bolder fs-1">
        {review.rating}
        </Card.Text>
        <div className="d-flex justify-content-center">
        <Icon.StarFill color="yellow"/>
        <Icon.StarFill color="yellow" className="ms-2"/>
        <Icon.StarFill color="yellow" className="ms-2"/>
        <Icon.StarFill color="yellow" className="ms-2"/>
        <Icon.StarFill color="yellow" className="ms-2"/>
        </div>
        <Card.Text className="fw-bolder fs-5 mt-3">
        {`(${review.rating_5} reviews)`}
        </Card.Text>
        </div>

      </Card.Body>
    </Card>
    </Col>
    <Col lg={9}>
    <Card className="text-center shadow border-0">
      <Card.Body>
      <div className="mb-3 d-block-flex">
      <Row gutter={0}>
      <Col lg={1}>        <span className=""><Icon.StarFill color="yellow"/></span></Col>
      <Col lg={1}>        <span className="ms-2 ">5</span></Col>
      <Col lg={9}>        <MyProgressBar percentage={review.rating_5} /></Col>
      <Col lg={1}>        <span className="ms-2 ">{review.rating_5}</span></Col>
        {/* <ProgressBar  now={30} className="w-100 ms-3 my-auto" /> */}
        </Row>
      </div>
      <div className="mb-3 d-block-flex">
      <Row gutter={0}>
      <Col lg={1}>        <span className=""><Icon.StarFill color="yellow"/></span></Col>
      <Col lg={1}>        <span className="ms-2 ">4</span></Col>
      <Col lg={9}>        <MyProgressBar percentage={review.rating_4} /></Col>
      <Col lg={1}>        <span className="ms-2 ">{review.rating_4}</span></Col>
        {/* <ProgressBar  now={30} className="w-100 ms-3 my-auto" /> */}
        </Row>
      </div>
      <div className="mb-3 d-block-flex">
      <Row gutter={0}>
      <Col lg={1}>        <span className=""><Icon.StarFill color="yellow"/></span></Col>
      <Col lg={1}>        <span className="ms-2 ">3</span></Col>
      <Col lg={9}>        <MyProgressBar percentage={review.rating_3}/></Col>
      <Col lg={1}>        <span className="ms-2 ">{review.rating_3}</span></Col>
        {/* <ProgressBar  now={30} className="w-100 ms-3 my-auto" /> */}
        </Row>
      </div>
      <div className="mb-3 d-block-flex">
      <Row gutter={0}>
      <Col lg={1}>        <span className=""><Icon.StarFill color="yellow"/></span></Col>
      <Col lg={1}>        <span className="ms-2 ">2</span></Col>
      <Col lg={9}>        <MyProgressBar percentage={review.rating_2}/></Col>
      <Col lg={1}>        <span className="ms-2 ">{review.rating_2}</span></Col>
        {/* <ProgressBar  now={30} className="w-100 ms-3 my-auto" /> */}
        </Row>
      </div>
      <div className="mb-3 d-block-flex">
      <Row gutter={0}>
      <Col lg={1}>        <span className=""><Icon.StarFill color="yellow"/></span></Col>
      <Col lg={1}>        <span className="ms-2 ">1</span></Col>
      <Col lg={9}>        <MyProgressBar percentage={review.rating_1}/></Col>
      <Col lg={1}>        <span className="ms-2 ">{review.rating_1}</span></Col>
        {/* <ProgressBar  now={30} className="w-100 ms-3 my-auto" /> */}
        </Row>
      </div>
      </Card.Body>
    </Card>
    </Col> 
    </Row>
    </Container>
    <Container>
    <div><h1>Reviews</h1></div>
    <Card>
      <Card.Header>
        <Card.Img className="d-inline border rounded-circle me-2" style={{height:"2rem",width:"2rem"}} src={review.review_img}/>
       alaa khaled
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
{review.review}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </Container>
    </>)
}


export default My_Rating;