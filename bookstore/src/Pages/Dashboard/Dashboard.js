import book1 from '../../Images/stack-of-books.png';
import book2 from '../../Images/book-01.png';


function Dashboard(){


    return (
        <>
        <div className="container-fluid mt-5 mx-auto">
            <div className="row">
                <h1 className='text-secondary'>Popular Books</h1>
                <div className='container d-flex justify-content-evenly flex-wrap col-lg-7 col-md-11 col-sm-12 px-0 popular-books'>
                    <div className="card col-lg-3 col-md-6 col-sm-12 mb-sm-2">
                        <img src={book1} className="card-img-top d-block mx-auto" alt="..." style={{"width":"150px"}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card Name</h5>
                            <p className="card-text">Some quick example text to build on the card</p>
                        </div>
                    </div>
                    <div className="card col-lg-3 col-md-6 col-sm-12 mb-sm-2">
                        <img src={book1} className="card-img-top d-block mx-auto" alt="..." style={{"width":"150px"}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card Name</h5>
                            <p className="card-text">Some quick example text to build on the card</p>
                        </div>
                    </div>
                    <div className="card col-lg-3 col-md-6 col-sm-12 mb-sm-2">
                        <img src={book1} className="card-img-top d-block mx-auto" alt="..." style={{"width":"150px"}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card Name</h5>
                            <p className="card-text">Some quick example text to build on the card</p>
                        </div>
                    </div>
                </div>

                

                <div className='d-flex justify-content-end col-lg-3 col-md-12 col-sm-12 mt-sm-4 publisher-info'>
                    <div className="col-lg-11 col-md-11 col-sm-11 border p-2">
                        <img src={book2} className="card-img-top d-block mx-auto" alt="..." style={{"width":"100px"}}/>
                        <div className="card-body">
                            <h5 className="card-title text-center">3ser Kotb</h5>
                            <p className="card-text text-center">Some quick example text</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr></hr>
                <div className='mx-4'>
                <div className='row justify-content-between flex-wrap'>
                <div className='col-lg-7 col-md-10 col-sm-11'>
                  
                  <p>bkslkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>

                  <p>bkslkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>

                  <p>bkslkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                   <p>bkslkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                </div>
              <div className='col-lg-3 col-md-10 col-sm-11'>
                    <div class="card bg-light" >
                      <div class="card-header bg-light">
                          <div className='d-flex justify-content-start'>
                                <div className='p-3  col-lg-3 sol-md-3 col-sm-3'>
                                <i class="fa-solid fa-book align-self-end fs-1"></i>

                                </div>
                              <h1 className='text-start align-self-center col-lg-9 sol-md-9 col-sm-9 mb-0'>65</h1>
                          </div>
                          <p className='fs-4 text-dark text-start p-0 m-0'>Books</p>
                      </div>

                      <div class="card-header bg-light">
                      <div className='d-flex justify-content-start'>
                             <div className='p-3  col-lg-3 sol-md-3 col-sm-3'>

                              <i class="bi bi-list-nested align-self-end fs-1 "></i>
                              </div>
                              <h1 className='text-start align-self-center col-lg-9 sol-md-9 col-sm-9 mb-0'>65</h1>
                          </div>
                          <p className='fs-4 text-dark text-start p-0 m-0'>Category</p>
                      </div>
                      
                      <div class="card-header bg-light">
                        <div className='d-flex justify-content-start'>
                        <div className='p-3  col-lg-3 sol-md-3 col-sm-3'>
                                <i class="bi bi-basket3 align-self-end fs-1 col-lg-3 sol-md-3 col-sm-3"></i>
                        </div>
                                <h1 className='text-start align-self-center col-lg-9 sol-md-9 col-sm-9 mb-0'>65</h1>
                        </div>
                            <p className='fs-4 text-dark text-start p-0 m-0'>Order</p>
                      </div>
                      
                    </div>
                 
              </div>

                </div>
            </div>
</div>


        </>
    )
}

export default Dashboard;


