import { Link } from "react-router-dom";
import { useState } from 'react';
import './ClientSelectComponent.css'

function ClientSelectComponent(){
    console.log("select .............")

    const [userType, setUSerType] = useState('')

    const handleRadioSelect = (e) => {
        const radioButton = e.target.querySelector('input[type="radio"]');
        const containerDiv = e.target.querySelector('.user-type')
        if (radioButton) {
            radioButton.checked = true;
            setUSerType(radioButton.value)

        }

    };
    console.log(userType)

    return(
        <>
            <h2 className="text-center mt-5">Join as a client or Publisher</h2>
            <div className="container">
                <div className="row justify-content-center mt-3 text-center">
                        <div className="form-check col-lg-4 col-md-5 col-sm-10 me-lg-3 me-md-3 mt-sm-3 user-type  fs-4" onClick= {(e) => handleRadioSelect(e)} >
                                <input className="form-check-input select-icon" type="radio" name="flexRadioDefault"  value='client' onClick= {(e) => handleRadioSelect(e)}/>
                                    Client
                        </div>

                        <div className="form-check col-lg-4 col-md-5 col-sm-10 me-lg-3 me-md-3 mt-sm-3 user-type  fs-4" onClick= {(e) => handleRadioSelect(e)}>
                            <input className="form-check-input select-icon" type="radio" name="flexRadioDefault"  value='publisher' onClick= {(e) => handleRadioSelect(e)}/>                
                                Publisher
                        </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                {userType == '' ? <p className='btn btn-success mt-3 disabled'>Create Account</p> : <Link to={`/register/${userType}`} className='btn btn-success mt-3'>Join as a {userType}</Link> }
            </div>
            <p className="text-center mt-2"> Already have an account? <Link  className='text-success' to='/login' >Log In</Link></p>
        </>
    )
}

export default ClientSelectComponent;