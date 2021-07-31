import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './Login.css';

export default function UserNav() {
    const history = useHistory();
   const handleOnLogout=(e)=>
    {
        e.preventDefault();
        history.push("/Login")
    }
    return (
        <div>
            <nav class="navbar navbar-expand-sm">
                    <img src="starlogo2.png" alt="logo" />
                    <label className="lab">Star Finance</label>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to='/dashboard' className="linktag">Home</Link>
                        </li>
                        {/* <li className="active">
                            <Link to='/Login' className="linktag">Logout</Link>
                        </li> */}
                    </ul>
                    <div class="dropdown">
                        <button class="dropbtn">Loan</button>
                        <div class="dropdown-content">
                            <Link to='/emical'>EMI Calculator</Link>
                            {/* <Link to='/kycdocument'>Gold-Loan Calculator</Link> */}
                            <Link to='/loanform'>Loan Form</Link>
                            {/* <Link to='/kycdocument'>View details</Link> */}
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">KYC</button>
                        <div class="dropdown-content">
                            <Link to='/kycrulebook'>KYC Rule Guide</Link>
                            <Link to='/kycdocument'>KYC Document Upload</Link>
                        </div>
                    </div>
                    <button class="dropbtn" onClick={handleOnLogout}>Logout</button>
                </nav>
        </div>
    )
}
