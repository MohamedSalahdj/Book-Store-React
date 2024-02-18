import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import MessageErrorComponent from "../../Components/MessageErrorcomponent";
function RegitserComponent(){

    const [registerFormData, setRegisterFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        mobileNumber : ""
    })   

    const [registerFormErrors, setRegisterFormErrors] = useState({
        firstNameError : "",
        lastNameError : "",
        emailError : "",
        userNameError : "",
        passwordError1 : "",
        passwordError2 : ""
    })

    const [passwordType, setPasswordType] = useState("password")
    const [confirmPasswordType, setConfirmPasswordType] = useState("password")

    const userType = useParams();
    console.log('userType---- ',userType.userType)


    const changeFormData = (e) => {
        
        if (e.target.name == "firstName" ){
            setRegisterFormData({
                ...registerFormData,
                firstName : e.target.value
            })
            setRegisterFormErrors({
                ...registerFormErrors,
                firstNameError : e.target.value.length == 0 ? "First Name Field Is Required" : "Name vaild"
            })
        }
        else  if (e.target.name == "lastName" ){
            setRegisterFormData({
                ...registerFormData,
                lastName : e.target.value
            })
            setRegisterFormErrors({
                ...registerFormErrors,
                lastNameError : e.target.value.length == 0 ? "Last Name Field Is Required" : "Name vaild"
            })
        }
        else if (e.target.name == "email") {
            setRegisterFormData({
                ...registerFormData,
                email : e.target.value
            })
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{3,}$/;
            let emailmessage;

            if(e.target.value.length == 0){
                emailmessage= "Email Field Is Required"
            }
            else if (!emailRegex.test(e.target.value)){
                emailmessage = "Enter vaild emial ex. mohamed@gmail.com"
            }
            else {
                emailmessage = null
            }
            setRegisterFormErrors({
                ...registerFormErrors,
                emailError : emailmessage
            })   
        }
        else if (e.target.name == "password1") {
            setRegisterFormData({
                ...registerFormData,
                password : e.target.value
            })
            let passwordMessage;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/;

                if (e.target.value.length == 0 ){
                    passwordMessage = "Password Field is requird"
                }
                else if (e.target.value.length <= 8){
                    passwordMessage = "Password must be greater than 8 character"
                }
                else if (!passwordRegex.test(e.target.value)){
                    passwordMessage = "Password must contain contains at least onelowercase , one uppercase , at least one digit and special character [ example : *@%$#"   
                }
                else {
                    passwordMessage = null
                }
            setRegisterFormErrors({
                ...registerFormErrors,
                passwordError1 : passwordMessage
            })
        }
        else if (e.target.name == "password2") {
            setRegisterFormErrors({
                ...registerFormErrors,
                passwordError2 : e.target.value != registerFormData.password ? "password don't match" : "password matched"
            })
        }

    }
    const togglePasswordVisibility = () => {
        passwordType == "password" ? setPasswordType("text") : setPasswordType("password")
    }

    const toggleConsirmPasswordVisibility = () => {
        confirmPasswordType == "password" ? setConfirmPasswordType("text") : setConfirmPasswordType("password")
    }

return (
    <>
    <div className="mt-4 mb-5 mx-auto"  style={{"width":"150px"}}>
      <img src='stack-of-books.png' style={{"width":"100%","height":"150px"}} className="d-block"/>
    </div>
    <div className="container mb-5">
        <div className="col-lg-6 col-md-10 col-sm-10 p-4 mt-2 mx-auto border bg-white rounded">
            <form >
            {/* Names */}
            <div className="d-flex justify-content-between">
                {/* First Name */}
                <div style={{"width":"49%"}}>
                    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                    <input type="text" className="form-control" 
                        id="exampleInputName" name="firstName" 
                        aria-describedby="emailHelp"  
                        onChange={(e)=> changeFormData(e)}
                    />
                    <MessageErrorComponent classErrorMessage={registerFormErrors.firstNameError == 'Name vaild' ? "success" : "danger" } messageError={registerFormErrors.firstNameError} />
                </div>
                {/* Last Name */}
                <div  style={{"width":"49%"}}>
                    <label htmlFor="exampleInputEmail1" className="form-label ">Last Name</label>
                    <input type="text" className="form-control" 
                        id="exampleInputName" name="lastName" 
                        aria-describedby="emailHelp"  
                        onChange={(e)=> changeFormData(e)}
                    />
                    <MessageErrorComponent classErrorMessage={registerFormErrors.lastNameError == 'Name vaild' ? "success" :"danger"} messageError={registerFormErrors.lastNameError} />
                </div>
            </div>
            {/*Email */}
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label ">Email</label>
                <input type="email" className="form-control" 
                    id="exampleInputEmail1" name="email" 
                    aria-describedby="emailHelp"  
                    onChange={(e)=> changeFormData(e)}
                />
                <MessageErrorComponent classErrorMessage={registerFormErrors.emailError === "Vaild Email" ? "success" : "danger"} messageError={registerFormErrors.emailError} />
            </div>
            {/* Password */}
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <div className="d-flex form-control">
                    <input type={passwordType} className="form-control border-0 form-edit" 
                        id="exampleInputPassword" name="password1" 
                        onChange={(e)=> changeFormData(e)}
                    
                    />
                    <button type="button" className="btn" onClick={() => togglePasswordVisibility()}>
                        <i class={passwordType == 'password' ? "bi bi-eye-slash" : "bi bi-eye"} id="togglePassword"></i>
                    </button>
                </div>
                <MessageErrorComponent classErrorMessage={"danger"} messageError={registerFormErrors.passwordError1} />
            </div>
            {/* Confirm Password */}
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                <div className="d-flex form-control">
                    <input type={confirmPasswordType} className="form-control border-0 form-edit" 
                        id="exampleInputPassword" name="password2" 
                        onChange={(e)=> changeFormData(e)}
                    
                    />
                    <button type="button" className="btn" onClick={() => toggleConsirmPasswordVisibility()}>
                        <i class={confirmPasswordType == 'password' ? "bi bi-eye-slash" : "bi bi-eye"} id="togglePassword"></i>
                    </button>
                </div>
                <MessageErrorComponent classErrorMessage={registerFormErrors.passwordError2 == "password don't match" ? "danger" : "success"} messageError={registerFormErrors.passwordError2} />
            </div>

            <button type="submit" className="btn btn-success w-100 btn-form">Register</button>
            
            <div className="mt-3 ">
                <p className="text-center">Already have an account? <Link to='/login'>Sign in</Link></p>
            </div>
            </form>
        </div>
    </div>
    
    </>
)

}

export default RegitserComponent;