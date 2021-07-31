import React, { useState } from 'react';
import './emical.css';
import { Link } from "react-router-dom";
import UserNav from './UserNav';

export default function Emicalc() {

    const [data, setData] = useState({
        loanamount: 0,
        loantenure: 0,
        monthlyemi: 0,
        interest: 0,
        res: 0
    });
    const [click, setClick] = useState({})
    const handleOnchange = (event) => {
        const { name, value } = event.target;

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }
    const handleOnclick = (e) => {
        e.preventDefault();
        setClick(btnClick())

    }
    const btnClick = () => {
        // e.preventDefault();
        if (data.loanamount < 100000) {
            data.interest = data.loanamount * (0.10);
            console.log(data.interest)
            data.res = parseInt(data.interest) + parseInt(data.loanamount);
            console.log(data.res);
            console.log(data.loantenure);
            data.monthlyemi = (data.res) / (data.loantenure);
            data.monthlyemi = Math.round(data.monthlyemi);
            console.log(data.monthlyemi);

            return data.monthlyemi;
        }
        if (data.loanamount > 100000) {
            data.interest = data.loanamount * (0.12);
            console.log(data.interest)
            data.res = parseInt(data.interest) + parseInt(data.loanamount);
            console.log(data.res);
            //console.log(data.loantenure);
            data.monthlyemi = (data.res) / (data.loantenure);
            data.monthlyemi = Math.round(data.monthlyemi);
            console.log(data.monthlyemi);

            return data.monthlyemi
        }

    }
    return (
        <div>
            <UserNav/>
            <div className="container   ">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="emibox">
                            <table>
                                <tr><h2 className="emihead">EMI CALCULATOR</h2></tr>
                                <tr>
                                    <td><input className="emitxt" type="number" placeholder="Loan Amount" name="loanamount" onChange={handleOnchange} /></td>
                                </tr><br />
                                <tr>
                                    <input className="emitxt" type="number" placeholder="Loan Tenure(Months)" name="loantenure" onChange={handleOnchange} />
                                </tr><br />
                                <tr>
                                    <input className="emitxt" type="number" placeholder="Monthly Emi" name="monthlyemi" value={data.monthlyemi} onChange={handleOnchange} />
                                </tr><br />
                                <tr>
                                    <button className="emical" onClick={handleOnclick}>Calculate</button>
                                </tr>
                                <br/>
                                <tr>
                                    <h5 style={{textAlign:'center',color:'#158fad'}}>Amount for monthly EMI is: <label className="emicolor">{data.monthlyemi}</label></h5>
                                </tr>
                            </table>
                            
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        {/* <img src="emical2.png" className="emicalpic"/> */}
                        <div className="emibox1">
                            <h2 className="emihead1">Highlights</h2>
                            <ul>
                                <li className="emilist">Pay EMI within your budget to manage finance better.</li><br />
                                <li className="emilist">Make repayment easy with affordable EMI's.</li><br />
                                <li className="emilist">Reduce interest obliations with a medium tenor.</li><br />
                                <li className="emilist">Avoid missing EMI and eliminate extra charges.</li><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
