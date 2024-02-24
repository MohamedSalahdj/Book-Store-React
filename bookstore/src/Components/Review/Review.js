import { Col, Container, Row } from "react-bootstrap";
import ReviewSection from "./ReviewSection";
import { useEffect, useState } from "react";





function Review(){
    const [section,setSection]=useState("Description")
    return(<>
        <div className="container border-top">
            <Row className="justify-content-start">
                <Col lg={1}
                onClick={(e)=>{
                    setSection(e.target.innerText)}} className={section==="Description"?"border-top border-black border-4 ps-0":"ps-0"}>
                    Description
                </Col>
                <Col lg={1} onClick={(e)=>{setSection(e.target.innerText)}} className={section!=="Description"?"border-top border-black border-4 ps-0":"ps-0"}>
                    Reviews<span className="ms-1">(0)</span>
                </Col>
            </Row>
            <Row className="mt-3">
                {section==="Description"?
                <div className="container">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </div>:<ReviewSection/>}
            </Row>
            <></>
        </div>
    </>);
}

export default Review;