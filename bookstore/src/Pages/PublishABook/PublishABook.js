import { useState } from "react"
import PublishInputComponent from "../../Components/PublishInputComponent"
import PublishButtonComponent from "../../Components/PublishButtonComponent"
import MyCard from "../../Components/MyCard"



function PublishABook(props) {

    const discriptionRegex = new RegExp(/^[\s\w\d\?><;,\{\}\[\]\-_\+=!@\#\$%^&\*\|\']*$/i)
    const priceRegex = new RegExp(/^((\d+)((,\d+|\d+)*)(\s*|\.(\d{2}))$)/)
    var options = { day: 'numeric', month: 'numeric', year: 'numeric' };


    const [trigger, setTrirger] = useState({
        authorNameTrigger: 1,
        titleTrigger: 1,
        discriptionTrigger: 1,
        ISBNTrigger: 1,
        languageTrigger: 0,
        publicationDateTrigger: 1,
        priceTrigger: 1,
        frontImgTrigger: 1,
        backImgTrigger: 1

    })
    const [input, setInput] = useState({
        authorNameInput: "",
        titleInput: "",
        discriptionInput: "",
        ISBNinput: "",
        languageInput: "English",
        publicationDate: new Date().toLocaleString('en-GB', options) + '',
        priceInput: "",
        frontIMG: "",
        backIMG: ""
    })

    const [frontBookImg, setFrontBookImg] = useState(null)
    const [backBookImg, setBackBookImg] = useState(null)

    const [error, setError] = useState({
        authorNameError: "",
        titleError: "",
        discriptionError: "",
        ISBNError: "",
        languageError: "",
        publicationDateError: "",
        priceError: "",
        frontImgError: "",
        backImgError: ""
    })
    const [errorClass, setErrorClass] = useState({
        authorNameErrorClass: "",
        titleErrorClass: "",
        discriptionErrorClass: "",
        ISBNErrorClass: "",
        languageErrorClass: "",
        publicationDateErrorClass: "",
        priceErrorClass: "",
        frontImgErrorClass: "",
        backImgErrorClass: ""
    })

    const [submitError, setSubmitError] = useState((""))


    function nameValidation(e) {

        setInput({ ...input, authorNameInput: e.target.value })
        if (!e.target.value) {
            setError({ ...error, authorNameError: "Required" })
            setErrorClass({ ...errorClass, authorNameErrorClass: "is-invalid" })
            setTrirger({ ...trigger, authorNameTrigger: 1 })
        }
        else {
            setErrorClass({ ...input, authorNameError: "is-valid" })
            setError({ ...error, authorNameErrorClass: "" })
            setTrirger({ ...trigger, authorNameTrigger: 0 })

        }
    }


    function titleValidation(e) {
        setInput({ ...input, titleInput: e.target.value })
        if (!e.target.value) {
            setError({ ...error, titleError: "Required" })
            setErrorClass({ ...errorClass, titleErrorClass: "is-invalid" })
            setTrirger({ ...trigger, titleTrigger: 1 })


        }
        else {
            setError({ ...error, titleError: "" })
            setErrorClass({ ...error, titleErrorClass: "is-valid" })
            setTrirger({ ...trigger, titleTrigger: 0 })

        }
    }
    function ISBNValidation(e) {
        setInput({ ...input, ISBNinput: e.target.value })
        if (!e.target.value) {
            setError({ ...error, ISBNError: "Required" })
            setErrorClass({ ...errorClass, ISBNErrorClass: "is-invalid" })
            setTrirger({ ...trigger, ISBNTrigger: 1 })


        }
        else {
            setError({ ...error, ISBNError: "" })
            setErrorClass({ ...error, ISBNErrorClass: "is-valid" })
            setTrirger({ ...trigger, ISBNTrigger: 0 })

        }
    }
    function setBookLanguage(e) {
        setInput({ ...input, languageInput: e.target.value })
    }
    function discriptionValidation(e) {
        setInput({ ...input, discriptionInput: e.target.value })
        if (!e.target.value) {
            setError({ ...error, discriptionError: "Required" })
            setErrorClass({ ...errorClass, discriptionErrorClass: "is-invalid" })
            setTrirger({ ...trigger, discriptionTrigger: 1 })


        }
        else {
            if ((discriptionRegex.test(e.target.value) && input.languageInput === "English") ||
                (!discriptionRegex.test(e.target.value) && input.languageInput === "Arabic")) {
                setError({ ...error, discriptionError: "" })
                setErrorClass({ ...error, discriptionErrorClass: "is-valid" })
                setTrirger({ ...trigger, discriptionTrigger: 0 })
            }
            else {
                console.log((discriptionRegex.test(e.target.value)))
                setError({ ...error, discriptionError: "Discription input does not matches the selected book language" })
                setErrorClass({ ...errorClass, discriptionErrorClass: "is-invalid" })
                setTrirger({ ...trigger, discriptionTrigger: 1 })

            }
        }

    }
    function publicationDateValidation(e) {
        setInput({ ...input, publicationDate: e.target.value })
        let inputDate = new Date(e.target.value)
        let today = new Date()
        if (!e.target.value || inputDate > today) {
            setError({ ...error, publicationDateError: "Invalid date" })
            setErrorClass({ ...errorClass, publicationDateErrorClass: "is-invalid" })
            setTrirger({ ...trigger, publicationDateTrigger: 1 })


        }
        else {
            setError({ ...error, publicationDateError: "" })
            setErrorClass({ ...error, publicationDateErrorClass: "is-valid" })
            setTrirger({ ...trigger, publicationDateTrigger: 0 })

        }

    }

    function priceValidation(e) {
        setInput({ ...input, priceInput: e.target.value })
        if (!priceRegex.test(e.target.value)) {
            setError({ ...error, priceError: "Invalid Price " })
            setErrorClass({ ...errorClass, priceErrorClass: "is-invalid" })
            setTrirger({ ...trigger, priceTrigger: 1 })


        }
        else {
            setError({ ...error, priceError: "" })
            setErrorClass({ ...error, priceErrorClass: "is-valid" })
            setTrirger({ ...trigger, priceTrigger: 0 })


        }

    }
    function frontBookCoverValidation(e) {
        let imgType = e.target.files[0]?.type.split("/")
        setFrontBookImg(e.target.files[0])
        if (!e.target.files[0]) {
            setError({ ...error, frontImgError: "Upload your front book cover" })
            setErrorClass({ ...errorClass, frontImgErrorClass: "is-invalid" })
            setTrirger({ ...trigger, frontImgTrigger: 1 })
        }
        else if (imgType[0] !== "image") {
            setError({ ...error, frontImgError: "Please upload image type" })
            setErrorClass({ ...errorClass, frontImgErrorClass: "is-invalid" })
            setTrirger({ ...trigger, frontImgTrigger: 1 })
        }
        else {
            setError({ ...error, frontImgError: "" })
            setErrorClass({ ...errorClass, frontImgErrorClass: "is-valid" })
            setTrirger({ ...trigger, frontImgTrigger: 0 })
            setInput({ ...input, frontIMG: e.target.files[0] })
        }
    }

    function backBookCoverValidation(e) {
        let imgType = e.target.files[0]?.type.split("/")
        setBackBookImg(e.target.files[0])
        if (!e.target.files[0]) {
            setError({ ...error, backImgError: "Upload your back book cover" })
            setErrorClass({ ...errorClass, backImgErrorClass: "is-invalid" })
            setTrirger({ ...trigger, backImgTrigger: 1 })
        }
        else if (imgType[0] !== "image") {
            setError({ ...error, backImgError: "Please upload image type" })
            setErrorClass({ ...errorClass, backImgErrorClass: "is-invalid" })
            setTrirger({ ...trigger, backImgTrigger: 1 })
        }
        else {
            setError({ ...error, backImgError: "" })
            setErrorClass({ ...errorClass, backImgErrorClass: "is-valid" })
            setTrirger({ ...trigger, backImgTrigger: 0 })
            setInput({ ...input, backIMG: e.target.files[0] })

        }
    }
    function checkSubmission(e) {
        e.preventDefault()
        console.log(trigger)
        let formisvalid = true
        for (let value of Object.values(trigger)) {
            if (value === 1) {
                formisvalid = false
                console.log("here")
            }
        }
        if (!formisvalid) {
            setSubmitError(<div className="alert alert-danger" role="alert">
                Error input please fill the form with no errors
            </div>)
        }

        else {
            console.log("yay")
            setSubmitError(<div className="alert alert-success" role="alert">
                Book will be validated by Admin, Thank you
            </div>)
            console.log(input)
        }


    }



    return (
        <>
            <div className="container col-lg-6 col-md-6 col-sm-12 mt-3 border p-5 registerContainer">
                <h1 className="mb-4 loginTitle">Publishing a new book?</h1>
                <form onSubmit={(e) => checkSubmission(e)} noValidate className="needs-validation" >
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <div className="col-6 me-2">
                                <PublishInputComponent labelFor="name" labelContent="Author Name"
                                    type="input" className={errorClass.authorNameErrorClass} name="name"
                                    value={input.authorNameInput}
                                    changeFunction={(e) => nameValidation(e)} errorMess={error.authorNameError}></PublishInputComponent>
                            </div>

                            <div className="col-6 ms-2">
                                <PublishInputComponent labelFor="name" labelContent="Title"
                                    type="input" className={errorClass.titleErrorClass} name="title"
                                    value={input.titleInput}
                                    changeFunction={(e) => titleValidation(e)} errorMess={error.titleError}></PublishInputComponent>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-between mb-1">
                            <div className="col-6 me-2">
                                <PublishInputComponent labelFor="ISBN" labelContent="ISBN"
                                    type="text" className={errorClass.ISBNErrorClass} name="ISBN"
                                    value={input.ISBNinput}
                                    changeFunction={(e) => ISBNValidation(e)} errorMess={error.ISBNError}></PublishInputComponent>
                            </div>
                            <div className="col-6 ms-2 mt-2">
                                <label htmlFor="language">Language</label>
                                <select className="form-select" name="language" onChange={(e) => setBookLanguage(e)}>
                                    <option defaultValue="English" value="English">English</option>
                                    <option value="Arabic">Arabic</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 mb-1">
                            <label htmlFor="bookDiscription">Discription</label>
                            <textarea className={`form-control ${errorClass.discriptionErrorClass}`} rows={3} name="bookDiscription" onChange={(e) => discriptionValidation(e)}></textarea>
                            <p className="error text-danger">{error.discriptionError}</p>
                        </div>
                        <div className="col-12 d-flex justify-content-between">
                            <div className="col-6 me-2">
                                <PublishInputComponent labelFor="publicationdate" labelContent="Publication Date"
                                    type="date" className={`mb-3 ${errorClass.publicationDateErrorClass}`} name="publicationdate"
                                    defaultValue={input.publicationDate}
                                    changeFunction={(e) => publicationDateValidation(e)} errorMess={error.publicationDateError}></PublishInputComponent>
                            </div>
                            <div className="col-6 ms-2">
                                <PublishInputComponent labelFor="bookPrice" labelContent="Price(egp)"
                                    type="TEXT" className={`mb-3 ${errorClass.priceErrorClass}`} name="bookPrice"

                                    value={input.priceInput}
                                    changeFunction={(e) => priceValidation(e)} errorMess={error.priceError}></PublishInputComponent>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="bookCover" class="form-label">Front Cover</label>
                            <input className={`form-control ${errorClass.frontImgErrorClass}`} type="file" name="frontBookCover"
                                onChange={(e) => { frontBookCoverValidation(e) }}></input>
                            <p className="error text-danger">{error.frontImgError}</p>

                        </div>
                        <div className="mb-3">
                            <label for="bookCover" className="form-label">Back cover</label>
                            <input className={`form-control ${errorClass.backImgErrorClass}`} type="file" name="backBookCover"
                                onChange={(e) => { backBookCoverValidation(e) }}></input>
                            <p className="error text-danger">{error.backImgError}</p>
                            <div className="col-12 d-flex justify-content-around">
                                {
                                    frontBookImg ?
                                        <MyCard imageUrl={frontBookImg ? URL.createObjectURL(frontBookImg) : ""}></MyCard>
                                        :
                                        <span></span>

                                }

                                {
                                    backBookImg ?
                                        <MyCard imageUrl={backBookImg ? URL.createObjectURL(backBookImg) : ""}></MyCard>
                                        :
                                        <span></span>

                                }
                            </div>

                        </div>
                        {submitError}
                    </div>
                    <PublishButtonComponent display='d-grid' btnClass='btn-success' title='Publish Now'></PublishButtonComponent>
                </form >
            </div >
        </>
    )

}

export default PublishABook