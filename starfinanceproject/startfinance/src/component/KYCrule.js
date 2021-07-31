import React from 'react';
import './kyc.css';
import './Login.css';
import { Link } from "react-router-dom";
import UserNav from './UserNav';
export default function KYCrule() {
    return (
        <div>
             <UserNav/>
           
                    <div className="container">
                <div className="rule">
                    <h3 style={{textAlign:'center'}}>KYC RULE GUIDE</h3>
                    <br />
                    <h3 clasSName="ptagbold"> Master Direction - Know Your Customer (KYC) Direction, 2016</h3>
                    <br />

                    <div>
                        <p className="colorword">1.In terms of the provisions of Prevention of Money-Laundering Act, 2002 and the
                            Prevention of Money-Laundering
                            (Maintenance of Records) Rules, 2005, as amended from time to time by the Government of India as
                            notified by the
                            Government of India, Regulated Entities (REs) are required to follow certain customer identification
                            procedures
                            while undertaking a transaction either by establishing an account-based relationship or otherwise and
                            monitor their transactions.
                            1REs shall take steps to implement the provisions of the aforementioned Act and Rules,
                            including operational instructions issued in pursuance of such amendment(s).
                        </p>
                    </div>

                    <div>
                        <p>2. Accordingly, in exercise of the powers conferred by Sections 35A of the Banking
                            Regulation Act, 1949,
                            the Banking Regulation Act (AACS), 1949, read with Section 56 of the Act ibid, Rule 9(14) of Prevention
                            of
                            Money-Laundering (Maintenance of Records) Rules, 2005 and all other laws enabling the Reserve Bank in
                            this regard,
                            the Reserve Bank of India being satisfied that it is necessary and expedient in the public interest to
                            do so,
                            hereby issues the Directions hereinafter specified.
                        </p>
                    </div>
                    <div>
                        <p clasSName="ptagbold">KYC Documents for Customer</p>
                        <ul className="colorword">
                            <li>
                                Two passport size photograph.</li>
                            <li> ID Proof such as Driving License / PAN Card / Form 60/61 / Passport Copy / Voter ID Card / Aadhaar
                                Card /
                                Ration Card. Any one document needs to be submitted.</li>
                            <li>Address Proof such as Driving License / Voter ID Card / Ration Card /
                                Aadhaar Card / Passport Copy /
                                registered lease agreement with not older than 3 months utility bills in the name of landlord (any one).</li>
                        </ul>

                        <p clasSName="ptagbold">Steps for uploading the documents</p>
                        <ul className="colorword">

                            <li>Step 1: Scan all the proof that you want to submit</li>
                            <li>Step 2: Scan all the proof both sides i.e) Front-side and Back-side</li>
                            <li>Step 3: Convert all the proofs to jpge/jpg/png</li>
                            <li>step 4: Upload each proof one after the other</li>
                            <li>step 5: Check if the proofs are correct</li>
                            <li>step 6: Once checked, then click on the submit button in right side of the page</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
