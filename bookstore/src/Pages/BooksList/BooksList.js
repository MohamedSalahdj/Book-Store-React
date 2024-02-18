import axios from "axios"
import { useEffect, useState, useContext } from "react"
import Card from "../../Components/Card/Card"
import "./BooksList.css"

function BooksList() {


    const BaseMainUrl = "https://dummyjson.com/products"
    const BaseCategoriesUrl = "https://dummyjson.com/products/category/"

    const [Products, setProducts] = useState([])
    const [recentProducts, setRecentProducts] = useState([])
    const [Category1, setCategory1] = useState([])
    const [Category2, setCategory2] = useState([])
    const [Category3, setCategory3] = useState([])
    const [Category4, setCategory4] = useState([])
    const [skipItem, setSkipItem] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {

        //  axios.METHOD
        axios.get(`${BaseMainUrl}?limit=25&skip=${skipItem}`) //&page=${page}&language=${contextLang}
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.log(err))


        axios.get(`${BaseCategoriesUrl}smartphones`) //&page=${page}&language=${contextLang}
            .then((res) => setCategory1(res.data.products))
            .catch((err) => console.log(err))

        axios.get(`${BaseCategoriesUrl}laptops`) //&page=${page}&language=${contextLang}
            .then((res) => setCategory2(res.data.products))
            .catch((err) => console.log(err))

        axios.get(`${BaseCategoriesUrl}fragrances`) //&page=${page}&language=${contextLang}
            .then((res) => setCategory3(res.data.products))
            .catch((err) => console.log(err))

        axios.get(`${BaseCategoriesUrl}skincare`) //&page=${page}&language=${contextLang}
            .then((res) => setCategory4(res.data.products))
            .catch((err) => console.log(err))

        axios.get('https://dummyjson.com/products?limit=12&skip=88')
            .then((res) => setRecentProducts(res.data.products))
            .catch((err) => console.log("Error"))


    }, [pageNumber, skipItem])


    const previousPage = (pagNum) => {
        setPageNumber(--pagNum)
        if (pagNum == 1) {
            setSkipItem(0)
        }
        else if (pagNum == 2) {
            setSkipItem(25)
        }
        else if (pagNum == 3) {
            setSkipItem(50)
        }
        else if (pagNum == 4) {
            setSkipItem(75)
        }

    }

    const nextPage = (pagNum) => {
        setPageNumber(++pagNum)
        if (pagNum == 1) {
            setSkipItem(0)
        }
        else if (pagNum == 2) {
            console.log("yes in page 2")
            setSkipItem(25)
        }
        else if (pagNum == 3) {
            setSkipItem(50)
        }
        else if (pagNum == 4) {
            setSkipItem(75)
        }
    }

    return (
        <div >

            <div className="text-center m-5">
                <h1 >Navbar</h1>
            </div>
            <h1 className=" text-center text-success pb-3 mt-5 mt-0"> Welcome to Our Store</h1>
            <hr style={{ "color": "gray", "borderWidth": "4px" }} className="my-5" />

            {/* Recently Products */}
            <div>
                <div className="container ">
                    <div className='title-md'>
                        <h4>See our <span className='text-capitalize'>Recently Products</span></h4>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {recentProducts.map((product, index) => {
                            const truncatedTitle = product.title.length > 20 ?
                                product.title.substring(0, 15) + " ..." :
                                product.title;
                            const truncatedDescription = product.description.length > 50 ?
                                product.description.substring(0, 50) + " ..." :
                                product.description;
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <Card productId={product.id} productImage={product.thumbnail} productTitle={truncatedTitle} productDescription={truncatedDescription} productPrice={product.price} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <hr style={{ "color": "gray", "borderWidth": "4px" }} className="my-5" />

            {/* All smart phone */}
            <div>
                <h1 className=" col-12 justify-content-center my-5 text-center g-5"></h1>
                <div className="container ">
                    <div className='title-md'>
                        <h4><span className='text-capitalize'>Smart Phones</span></h4>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {Category1.map((product, index) => {
                            const truncatedTitle = product.title.length > 20 ?
                                product.title.substring(0, 15) + " ..." :
                                product.title;
                            const truncatedDescription = product.description.length > 50 ?
                                product.description.substring(0, 40) + " ..." :
                                product.description;
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <Card productId={product.id} productImage={product.thumbnail} productTitle={truncatedTitle} productDescription={truncatedDescription} productPrice={product.price} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* All product */}
            <div>
                <h1 className=" col-12 justify-content-center mb-5 text-center mt-5"></h1>
                <div className="container ">

                    <div className='title-md'>
                        <h4>See our <span className='text-capitalize'>ALL products</span></h4>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {Products.map((product, index) => {
                            const truncatedTitle = product.title.length > 20 ?
                                product.title.substring(0, 15) + " ..." :
                                product.title;
                            const truncatedDescription = product.description.length > 50 ?
                                product.description.substring(0, 40) + " ..." :
                                product.description;
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <Card productId={product.id} productImage={product.thumbnail} productTitle={truncatedTitle} productDescription={truncatedDescription} productPrice={product.price} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <nav aria-label="Page navigation example mt-5 ">
                <ul class="pagination d-flex justify-content-center ">
                    {pageNumber > 1 ? <li className="page-item"><button onClick={() => previousPage(pageNumber)} className='page-link'>Previous</button></li>
                        : <li className="page-item"><button onClick={() => previousPage(pageNumber)} className='page-link disabled'>Previous</button></li>}
                    {pageNumber >= 1 && pageNumber <= 3 ? <li className="page-item"> <button onClick={() => nextPage(pageNumber)} className='page-link'>Next</button></li>
                        : <li className="page-item"> <button onClick={() => nextPage(pageNumber)} className='page-link disabled'>Next</button></li>}

                </ul>
            </nav>
            <div className="text-center m-5 p-5">
                <h1 >Footer</h1>
            </div>
        </div>
    )
}

export default BooksList;