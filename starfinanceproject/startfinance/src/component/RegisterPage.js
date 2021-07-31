import React, { useState } from 'react';
import './register.css';
import './Login.css'
import { Link } from "react-router-dom";
import axios from 'axios';
export default function RegisterPage() {

    const [registerpg, setRegisterpg] = useState({
        uname: "",
        email: " ",
        pass: "",
    })
    const [formErrors, setformErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState(0);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setRegisterpg((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
        console.log(registerpg)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(registerpg))


        setSubmitted(true)

        const reqOptios = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerpg)
        };

        fetch("http://localhost:8080/api/register", reqOptios).then(res => res.json()).then(data => {
            console.log("saved");
            alert("successfully submitted");
            console.log(data.id);
            setData(data.id);
        })
        alert("registered successfully")
    };


    const validate = (values) => {

        let err = {};

        console.log(values);


        if (!values.uname) {
            err.uname = "*user nmae is reqired";
        }
        if (!values.email) {
            err.email = "*email is required"
        }
        if (!values.pass) {
            err.pass = "*password  is reqired";
        }
        // if (!values.cpass) {
        //     err.cpass = "*confirm password is required"
        // }
        // if (typeof values["password"] !== "undefined" && typeof values["confirm_password"] !== "undefined") {

        //     if (values["password"] != values["confirm_password"]) {
        //       err["password"] = "Passwords don't match.";
        //     }
        //   } 
        return err;
    }
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-sm">
                    <img src="starlogo2.png" alt="logo" />
                    <label className="lab">Star Finance</label>
                </nav>
            </div>
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-9 mx-auto">
                            <div class="card card-signin flex-row my-5">
                                <div className="leftside">
                                    <div> <h3>Have already Registered?</h3></div>
                                    <div><h5 style={{ textAlign: 'center' }}><Link to='/login'>Sign-In</Link></h5></div>
                                </div>
                                <hr className="line" />
                                <div class="card-body">
                                    <h4 style={{ textAlign: 'center' }}>Register</h4>
                                    <form className="box1" onSubmit={handleOnSubmit}>
                                        <table>
                                            <tr>
                                                <td>
                                                    <label>Username</label><input type="text" name="uname" value={registerpg.uname} onChange={handleOnChange} />
                                                    <p style={{ color: "red" }}>{formErrors.uname}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label>Email-Id</label> <input type="email" name="email" value={registerpg.email} onChange={handleOnChange} />
                                                    <p style={{ color: "red" }}>{formErrors.email}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label>Password</label> <input type="password" name="pass" value={registerpg.pass} onChange={handleOnChange} />
                                                    <p style={{ color: "red" }}>{formErrors.pass}</p>
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <td>
                                                <label>Confirm-Password</label><input type="password" name="cpass" value={registerpg.cpass} onChange={handleOnChange}/>
                                                <p style={{ color: "red" }}>{formErrors.cpass}</p>
                                                </td>
                                            </tr> */}
                                        </table>
                                        <button type="submit">Register</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
