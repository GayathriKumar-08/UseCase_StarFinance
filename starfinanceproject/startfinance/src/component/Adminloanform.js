import React, { useState, useEffect } from 'react';
import Navadmin from './Navadmin';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
import Loanform from './Loanform';
import "./adminloanform.css";

export default function Adminloanform() {
    const [loandata, setLoandata] = useState([]);


    const [search, setSearch] = useState("");

    const history = useHistory();

    useEffect(() => {
        console.log("Hello this use effect... ");

        fetch("http://localhost:8080/api/goldloan").then(res => res.json()).then(res => {
            console.log(res);
            setLoandata(res);
        }).catch(e => {
            console.error("ERR in  data");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally block!!!!");
        });
    }, [])

      const deleteLoan = async (kn) => {
        await axios.delete(`http://localhost:8080/api/goldloan/${kn}`);
        
        let ln = loandata.filter((data) => {
            setLoandata({data});
             return data.kn !== loandata.kn;
           
        });
        console.log(ln);
        setLoandata(ln);

        //    console.log(l);
        //    setLoandata(l);
    }
    const handleOnClick=()=>
    {
          console.log("Hello");
          history.push("/approval")
    }
    return (
        <div>
            <form>
                <div className="container-fluid">
                    <div className="box1">
                        <div>
                            <Navadmin />
                        </div>
                        <div>
                            <input className="inpt"
                                type="text"
                                name="search"
                                placeholder="Enter Kn" onChange={event => { setSearch(event.target.value) }} />
                        </div><br /><br />
                        <table className="tabform">
                            <thead className="the">
                                <tr>
                                    <th className="the">Branch_Name</th>
                                    <th className="the">KN_number</th>
                                    <th className="the">Applicant_Name</th>
                                    <th className="the">Residental_Address</th>
                                    <th className="the">Date_Of_Birth</th>
                                    <th className="the">Gender</th>
                                    <th className="the">Phone_Number</th>
                                    <th className="the">Community</th>
                                    <th className="the">Nationality</th>
                                    <th className="the">Education</th>
                                    <th className="the">Occupation</th>
                                    <th className="the">Marital_Status</th>
                                    <th className="the">Required_Loan</th>
                                    <th className="the">Mode_Of_Disbursement</th>
                                    <th className="the">Account_Holder_Name</th>
                                    <th className="the">Account_Number</th>
                                    <th className="the">IFSC_Code</th>
                                    <th className="the">Annual_income</th>
                                    <th className="the">Purpose_Of_loan</th>
                                    <th className="the">Reject</th>
                                </tr>
                            </thead>

                            {
                                loandata && loandata.filter((row) => {
                                    if (search == " ") {
                                        return row
                                    } else if (row.kn == search) {
                                        return row
                                    }
                                }).map((x) => {
                                    return (
                                        <tbody className="tb">
                                            <tr>
                                                <td className="tb">{x.branchname}</td>

                                                <td className="tb">{x.kn}</td>

                                                <td className="tb">{x.aname}</td>

                                                <td className="tb">{x.raddress}</td>

                                                <td className="tb">{x.dt}</td>

                                                <td className="tb">{x.gender}</td>

                                                <td className="tb">{x.pno}</td>

                                                <td className="tb">{x.comm}</td>

                                                <td className="tb">{x.nation}</td>

                                                <td className="tb">{x.edu}</td>

                                                <td className="tb">{x.occ}</td>

                                                <td className="tb">{x.mars}</td>

                                                <td className="tb">{x.rloan}</td>

                                                <td className="tb">{x.disburse}</td>

                                                <td className="tb">{x.accname}</td>

                                                <td className="tb">{x.accno}</td>

                                                <td className="tb">{x.ifsc}</td>

                                                <td className="tb">{x.aincome}</td>

                                                <td className="tb">{x.pol}</td>
                     
                                                <td className="tb"><button className="button123" onClick={() =>deleteLoan(x.kn)}>Reject</button></td>

                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                        {/* <button className="button123" onClick={() =>deleteLoan(x.kn)}><i class="fa fa-trash"></i></button> */}
                    </div>
                </div>
            </form>
                   <div>
                       <button className="apploan" onClick={handleOnClick}>Approve Loan</button>
                   </div>
        </div>
    )
}



