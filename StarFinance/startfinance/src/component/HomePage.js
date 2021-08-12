import React from 'react'
import './HomePage.css';
import { useHistory } from "react-router-dom";

export default function HomePage() {
    
    const handleAdminLogin=(e)=>
    {
        history.push("/adminlogin")
    }
    const handleUserLogin=(e)=>
    {
        history.push("/login")
    }
    const history = useHistory();
    return (
        <div className="classtop">
            <div className="background">
                <img src="starlogo2.png" alt="logo" />
                <label className="lab">Star Finance</label>
                <br />

                <div className="cotainer">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="paratag1">
                                <h4 style={{ color: 'white' }}>Your Happiness is our Priority<br /></h4><br />
                                <p style={{ color: 'white' }}>Star Finance provides loans for your requirements<br />
                                    with Lower interest rate!!!!</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <img src="/loanimg.jpg" className="loanimg1" />
                        </div>
                        <br/>
                        <div className="buttonimage">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                        <img  className="imgbutn" src="/adminicon.png"/>
                                     <button className="btnic"onClick={handleAdminLogin}>Admin</button>
                                </div>
                                <div className="col-sm-6">
                                        <img className="imgbutn" src="/usericon.png" />
                                        <button className="btnic" onClick={handleUserLogin}>User</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
