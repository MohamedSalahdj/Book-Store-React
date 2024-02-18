import * as Icon from 'react-bootstrap-icons';
import MyProgressBar from "./MyProgressBar";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Button, Card, Col, Modal, ProgressBar, Row } from 'react-bootstrap';
import { Container } from "reactstrap";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';

function My_Rating(){
  const [review,setReview]=useState("")
  const [listOfStars,setListOfStars]=useState([])
  const [modalShow, setModalShow] = React.useState(false);
  const [rating,setRating]=useState(0);
  useEffect(() => {
    axios
      .get(`https://retoolapi.dev/k265Ls/data/1`)
      .then((res) => {        
        setReview(res.data);setRating(res.data.rating)})
      .catch();
    // <Icon.StarFill color="yellow"/>
    // <Icon.StarFill color="yellow" className="ms-2"/>
    // <Icon.StarFill color="yellow" className="ms-2"/>
    // <Icon.StarFill color="yellow" className="ms-2"/>
    // <Icon.StarFill color="yellow" className="ms-2"/>
    }, []);
    useEffect(() => {
      setListOfStars([])
      for(var i=0;i<5;i++){
      if(i<rating)
      setListOfStars([...listOfStars,<Icon.StarFill color="yellow" className="ms-2"/>])
      else
      setListOfStars([...listOfStars,<Icon.Star color="yellow" className="ms-2"/>])
      }
      console.log(listOfStars);
      }, [rating]);

    return (<>
    <Container fluid>
    <div><h1>Rating</h1></div>
    <Row >
    <Col lg={3}>
    <Card className="text-center shadow">
      <Card.Body>
      <div>
        <Card.Text className="fw-bolder fs-1 mt-3 mb-3">
        {review.rating}.0
        </Card.Text>
        <div className="d-flex justify-content-center mt-3">
        {()=>{return(listOfStars.map((star)=>star))}}
        </div>
        <Card.Text className="fw-bolder fs-5 mt-3">
        {`(${review.rating_5+review.rating_4+review.rating_3+review.rating_2+review.rating_1} reviews)`}
        </Card.Text>
        </div>

      </Card.Body>
    </Card>
    </Col>
    <Col lg={9}>
    <Card className="text-center shadow border-0">
      <Card.Body>
      <div className="mb-3 d-block-flex p-0">
      <div className='d-inline-flex justify-content-between'>
      <span className="mt-1 me-2 ms-4">5</span>
      <span className='me-1 me-4'><Icon.StarFill color="yellow"/></span>
      <span style={{width:"58vw"}} className='mt-1 ms-3 me-3'><MyProgressBar percentage={review.rating_5} /></span>
      <span className="ms-2 me-4">{review.rating_5}</span>
        {/* <ProgressBar  now={30} className="w-100 ms-3 my-auto" /> */}
        </div>
      </div>
      {/* <div className="mb-3"> */}
      <div className="mb-3 d-block-flex p-0">
      <div className='d-inline-flex justify-content-between'>
      <span className="mt-1 me-2 ms-4">4</span>
      <span className='me-1 me-4'><Icon.StarFill color="yellow"/></span>
      <span style={{width:"58vw"}} className='mt-1 ms-3 me-3'><MyProgressBar percentage={review.rating_4} /></span>
      <span className="ms-2 me-4">{review.rating_4}</span>
        {/* <ProgressBar  now={30} className="w-100 ms-3 my-auto" /> */}
        </div>
      </div>
      <div className="mb-3 d-block-flex p-0">
      <div className='d-inline-flex justify-content-between'>
      <span className="mt-1 me-2 ms-4">3</span>
      <span className='me-1 me-4'><Icon.StarFill color="yellow"/></span>
      <span style={{width:"58vw"}} className='mt-1 ms-3 me-3'><MyProgressBar percentage={review.rating_3} /></span>
      <span className="ms-2 me-4">{review.rating_3}</span>
        {/* <ProgressBar  now={30} className="w-100 ms-3 my-auto" /> */}
        </div>
      </div>
      <div className="mb-3 d-block-flex p-0">
      <div className='d-inline-flex justify-content-between'>
      <span className="mt-1 me-2 ms-4">2</span>
      <span className='me-1 me-4'><Icon.StarFill color="yellow"/></span>
      <span style={{width:"58vw"}} className='mt-1 ms-3 me-3'><MyProgressBar percentage={review.rating_2} /></span>
      <span className="ms-2 me-4">{review.rating_2}</span>
        {/* <ProgressBar  now={30} className="w-100 ms-3 my-auto" /> */}
        </div>
      </div>
      <div className="mb-3 d-block-flex p-0">
      <div className='d-inline-flex justify-content-between'>
      <span className="mt-1 me-2 ms-4">1</span>
      <span className='me-1 me-4'><Icon.StarFill color="yellow"/></span>
      <span style={{width:"58vw"}} className='mt-1 ms-3 me-3'><MyProgressBar percentage={review.rating_1} /></span>
      <span className="ms-2 me-4">{review.rating_1}</span>
        {/* <ProgressBar  now={30} className="w-100 ms-3 my-auto" /> */}
        </div>
      </div>
      </Card.Body>
    </Card>
    </Col> 
    </Row>
    </Container>
    <Container fluid>
    <div className='mb-3'><h1>Reviews</h1></div>
    <Row>
    <Col lg={9}>
    <Card>
      <Card.Header>
        <Card.Img className="d-inline border rounded-circle me-2" style={{height:"2rem",width:"2rem"}} src={require('../person-icon-1901x2048-a9h70k71.jpeg')}/>
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
    </Col>
    </Row>
    </Container>
    <Container fluid className='mt-3'>
      <Button
      variant="outline-warning"
      onClick={() => setModalShow(true)}>add review
    </Button>
    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
    </Container>
    </>)
}





function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" style={{resize:"none"}}></textarea>
      </Modal.Body>
      <Modal.Footer>
      <div className='me-auto'>
     <Icon.Star color="yellow"/>
     <Icon.Star color="yellow" className="ms-2"/>
     <Icon.Star color="yellow" className="ms-2"/>
     <Icon.Star color="yellow" className="ms-2"/>
     <Icon.Star color="yellow" className="ms-2"/>
     </div>
        <Button onClick={props.onHide} className="btn-warning">submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default My_Rating;