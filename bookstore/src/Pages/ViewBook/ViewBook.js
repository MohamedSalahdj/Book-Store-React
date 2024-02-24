import React, { useEffect } from "react";
import "./ViewBook.css";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import axios from "axios";
import Review from "../../Components/Review/Review";

const ViewBook = () => {
  const lol = () => {};

  const bookId = useParams();
  // console.log(bookId);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://retoolapi.dev/64GJU5/data/${bookId.id}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, [bookId.id]);

  return (
    <>
      {/* <!-------------------- single product details ---------------------> */}
      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
            <img
              src={details.images}
              alt="product details"
              width="100%"
              id="ProductImg"
            />
          </div>
          <div className="col-2">
            <p>Home / Books</p>
            {/* <h1>Red Printd T-Shirt by HRX</h1> */}
            <h1>{details.title}</h1>
            {/* <h4>$50.00</h4> */}
            <h4>{details.price}$</h4>

            <input type="number" value="1" onChange={lol} />
            <Link to="" className="btn1">
              Add To Cart
            </Link>
            <h3>
              Product Details <i className="fa fa-indent"></i>
            </h3>
            {/* <p>
                  Give your summer wardrobe a style upgrade with the HRX Men's
                  Active T-shirt. Team it with a pair of shorts for your morning
                  workout or a denims for an evening out with the guys.
                </p> */}
            <p>{details.details}</p>
          </div>
        </div>
      </div>
      <Review/>
    </>
  );
};

export default ViewBook;
