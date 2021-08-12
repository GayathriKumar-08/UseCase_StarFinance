import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
export default function Navadmin() {
    return (
        <div>
             <nav class="navbar navbar-expand-sm">
                    <img src="starlogo2.png" alt="logo" />
                    <label className="lab">Star Finance</label>
                    <ul className="nav1 navbar-nav">
                        <li className="active">
                            <Link to='/admindashboard' className="linktag">Home</Link>
                        </li>
                        <li className="active">
                            <Link to='/proofcheck' className="linktag">Customer Proof</Link></li>
                            <li className="active">
                            <Link to='/adminview' className="linktag">View Request</Link>
                        </li>
                            <li className="active">
                            <Link to='/aloanform' className="linktag">Loan Approval</Link>
                        </li>
                        <li className="active">
                            <Link to='/pdfgenerator' className="linktag">Get All Customers</Link>
                        </li>
                        <li className="active">
                            <Link to='/home' className="linktag">Logout</Link>
                        </li>
                    </ul>
                    {/* <div class="dropdown">
                        <button class="dropbtn">Loan</button>
                        <div class="dropdown-content">
                            <Link to='/emical'>EMI Calculator</Link>
                            <Link to='/kycdocument'>Gold-Loan Calculator</Link>
                            <Link to='/kycdocument'>Loan Form</Link>
                            <Link to='/kycdocument'>View details</Link>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">KYC</button>
                        <div class="dropdown-content">
                            <Link to='/kycrulebook'>KYC Rule Guide</Link>
                            <Link to='/kycdocument'>KYC Document Upload</Link>
                        </div> 
                    </div>*/}
                </nav>
        </div>
    )
}
