import React, { useState,useEffect } from 'react'
import UserNav from './UserNav';
import './loanform.css';

export default function EditLoanform() {
    const [state, setstate] = useState( {
            branchname: " ",
            kn: 0,
            aname: " ",
            raddress: " ",
            dt: " ",
            gender: " ",
            pno: 0,
            comm: " ",
            nation: " ",
            edu: " ",
            occ: " ",
            mars: " ",
            rloan: " ",
            disburse: " ",
            accname: " ",
            accno: 0,
            ifsc: " ",
            aincome: 0,
            pol: " "
        }
    )
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState(0);
    const handleOnChage = (e) => {
        const { name, value } = e.target

        setstate((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    useEffect(() => {
       
        console.log("Hello this use effect... ");

      
    }, [])

   const handleOnUpdate=(e)=>
    {
        console.log("updating!!!!!");
        fetch("http://localhost:8080/api/goldloan").then(res => res.json()).then(loan => {
            console.log(loan);
            setData(loan);
        }).catch(e => {
            console.error("ERR in loan data");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally block!!!!");
        });
    }
    return (
        <div>
            <UserNav />
            <h3>Hello edit page</h3>
            <div>
                <div className="container-fluid">
                    <div className="loanbox">
                        <h4 className="lformhead">GOLD LOAN APPLICATION FORM</h4>
                        <table className="loantab">
                            <tr>
                                <td><label>Branch Name</label></td>
                                <td ><input type="text" className="sline" name="branchname" value={state.branchname} onChange={handleOnChage} /></td>
                            </tr>
                            <br />
                            <tr>
                                <td><label>KN Number</label></td>
                                <td><input type="text" className="sline" name="kn" value={state.kn} onChange={handleOnChage} /></td>
                            </tr>
                            <br />
                            <tr>
                                <td><label>Applicant's Name</label></td>
                                <td> <input type="text" className="linebox" name="aname" value={state.aname} onChange={handleOnChage} /></td>
                            </tr>
                            <br />
                            <tr>
                                <td><label>Residence Address</label></td>
                                <td><textarea type="text" className="linebox" name="raddress" value={state.raddress} onChange={handleOnChage}></textarea></td>
                            </tr>
                            <br />
                            <tr>
                                <td>Date of Birth:</td>
                                <td><input type="text" name="dt" value={state.dt} onChange={handleOnChage} /></td>
                            </tr>
                            <br />
                            <tr>
                                <td>Gender</td>
                                <td><input type="text" className="linebox" name="gender" value={state.gender} onChange={handleOnChage} /></td>
                            </tr>

                            <br />
                            <tr>
                                <td>Phone Number</td>
                                <td><input type="text" className="linebox" name="pno" value={state.pno} onChange={handleOnChage} /></td>
                            </tr>

                            <br />
                            <tr>
                                <td>Community</td>
                                <td><input type="text" className="sline" name="comm" value={state.comm} onChange={handleOnChage} /> <label>OBC | BC | SC | Other</label></td>
                            </tr>
                            <br />
                            <tr>
                                <td>Nationality</td>
                                <td><input type="text" className="sline" name="nation" value={state.nation} onChange={handleOnChage} /> <label>Indian | NRI</label></td>
                            </tr>
                            <br />
                            <tr>
                                <td>Education</td>
                                <td><input type="text" className="linebox" name="edu" value={state.edu} onChange={handleOnChage} /> </td>
                            </tr>
                            <br />
                            <tr>
                                <td>occupation</td>
                                <td><input type="text" className="sline" name="occ" value={state.occ} onChange={handleOnChage} /> <label>Salaried | Self-employeed | Agriculturist | Others </label></td>
                            </tr>
                            <br />
                            <tr>
                                <td>Marital Status</td>
                                <td><input type="text" className="sline" name="mars" value={state.mars} onChange={handleOnChage} /> <label>Single | Married </label></td>
                            </tr>
                            <br />
                            <tr>
                                <td>Required Loan</td>
                                <td><input type="text" className="sline" name="rloan" value={state.rloan} onChange={handleOnChage} /> <label>Gold-Loan | Automobile-Loan | Housing-Loan</label></td>
                            </tr>
                            <br />
                            <tr>
                                <td>Mode Of Disbursement</td>
                                <td><input type="text" className="sline" name="disburse" value={state.disburse} onChange={handleOnChage} /> <label>Fund-Transfer | Account | NEFT | DD | Cash</label></td>
                            </tr>
                            <br />
                            <tr><label>If Account is entered,Enter your account details</label></tr>
                            <br />
                            <tr>
                                <td>Account Holder Name</td>
                                <td><input type="text" className="linebox" name="accname" value={state.accname} onChange={handleOnChage} /></td>
                            </tr>
                            <br />
                            <tr>
                                <td>Account Number</td>
                                <td><input type="text" className="linebox" name="accno" value={state.accno} onChange={handleOnChage} /></td>
                            </tr>
                            <br />
                            <tr>
                                <td>IFSC Code</td>
                                <td><input type="text" className="linebox" name="ifsc" value={state.ifsc} onChange={handleOnChage} /></td>
                            </tr>
                            <br />
                            <tr>
                                <td>IFSC Code</td>
                                <td><input type="text" className="linebox" name="ifsc" value={state.ifsc} onChange={handleOnChage} /></td>
                            </tr>
                            <br />
                            <tr>
                                <td>Net Annual Income</td>
                                <td><input type="text" className="linebox" name="aincome" value={state.aincome} onChange={handleOnChage} /></td>
                            </tr>
                            <br />
                            <tr>
                                <td>Purpose Of Loan</td>
                                <td><textarea type="text" className="linebox" name="pol" value={state.pol} onChange={handleOnChage}></textarea></td>
                            </tr>
                        </table>
                        <br />
                        <p className="paracolor">I/We hereby give consent to receive calls/communication from Star Finance for marketing purposes through
                            Telephone/Mobile/SMS/Email and that such consent shall prevail over any current or subsequent registration of your number for “Do Not Call”.</p>

                            <button className="loansubmit" onClick={handleOnUpdate}>Save</button>
                    </div>

                </div>
            </div>

        </div>
    )
}
