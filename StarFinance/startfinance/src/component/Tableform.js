import React from 'react';
import './Tableform.css';
import GoldLoanapi from './GoldLoanapi';

export default function Tableform() {
    return (
        <div className="bgcolor">

            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h4 style={{ color:'coral' }}>Comparison Table</h4>
                        <table className="table1">
                            <tr className="trow"><th className="thead" style={{ textAlign: 'center' }}>Bank</th>
                                <th className="thead" style={{ textAlign: 'center' }}>Gold Loan Interest Rates</th>
                                <th className="thead" style={{ textAlign: 'center' }}>Processing Fee</th>
                                <th className="thead" style={{ textAlign: 'center' }}>Max Tenure</th>
                            </tr>
                            <tr className="trow">
                                <td className="td1">SBI Gold Loan </td>
                                <td className="td1">12.55%</td>
                                <td className="td1">0.25% to 1% of loan amount </td>
                                <td className="td1">36 months</td>
                            </tr>

                            <tr className="trow">
                                <td className="td1">Manapuram Gold Loan</td>
                                <td className="td1">9.90%</td>
                                <td className="td1">Rs.10 (to be paid at time of<br />
                                    settlement)</td>
                                <td className="td1">12 months</td>
                            </tr>

                            <tr className="trow">
                                <td className="td1">HDFC Bank</td>
                                <td className="td1">11.50%</td>
                                <td className="td1">1.50%</td>
                                <td className="td1">24 months</td>
                            </tr>

                            <tr className="trow">
                                <td className="td1">IIFL</td>
                                <td className="td1">12.00%</td>
                                <td className="td1">Nil</td>
                                <td className="td1">11 months</td>
                            </tr>

                            <tr className="trow">
                                <td className="td1">Yes Bank</td>
                                <td className="td1">10.75%</td>
                                <td className="td1">0.75% to 1%</td>
                                <td className="td1">36 months</td>
                            </tr>

                            <tr className="trow">
                                <td>ICICI Bank</td>
                                <td className="td1">10.00%</td>
                                <td className="td1">1.00% of the loan amount</td>
                                <td className="td1">12 months</td>
                            </tr>

                            <tr className="trow">
                                <td className="td1">Federal Bank</td>
                                <td className="td1">11.75%</td>
                                <td className="td1">Nil</td>
                                <td className="td1">12 months</td>
                            </tr>

                            <tr className="trow">
                                <td className="td1">Canara Bank</td>
                                <td className="td1">12.00%</td>
                                <td className="td1">1.00% of the loan amount, min Rs.<br />
                                    1,000 and max Rs. 5,000 per loan</td>
                                <td className="td1">12 months</td>
                            </tr>

                            <tr className="trow">
                                <td className="td1">Andhra Bank</td>
                                <td className="td1">10.70%</td>
                                <td className="td1">Nil processing fees</td>
                                <td className="td1">12 months</td>
                            </tr>

                            <tr className="trow">
                                <td className="td1">Axis Bank</td>
                                <td className="td1">10.49%</td>
                                <td className="td1">0.25% - 1% of loan amount</td>
                                <td className="td1">24 months</td>
                            </tr>

                            <tr className="trow">
                                <td className="td1">IndusLnd Bank</td>
                                <td className="td1">11.15%</td>
                                <td className="td1">Upto 1% of loan amount subject to a<br />
                                    minimum of Rs. 750</td>
                                <td className="td1">12 months</td>
                            </tr>

                            <tr className="trow">
                                <td className="td1">PNB </td>
                                <td className="td1">10.05%</td>
                                <td className="td1">Upfront fees of 0.70% of loan amount<br />
                                    +taxes</td>
                                <td className="td1">12 months</td>
                            </tr>
                        </table>

                    </div>
                    <div className="col-sm-4">
                    
                      <div className="top">
                      <label className="title">Star Finance Services</label>
                       <div className="tableright">
                           <ul>
                               <li>
                               <lable className="starbox">Lowest Interest Rate</lable> starting from 7.00%
                               </li><br/>
                               <li>
                               <lable className="starbox">Highest Rate per Gram</lable> Upto to Rs. 5,340
                               </li><br/>
                               <li>
                               <lable className="starbox">Flexible Loan Tenure</lable> from 3 months to 12 months
                               </li><br/>
                               <li>
                               <lable className="starbox">Instant Loan Disbursal </lable> in 30 secs.
                               </li><br/>
                               <li>
                               <lable className="starbox">Minimum Documentation</lable> only address proof.
                               </li><br/>
                               <li>
                               <lable className="starbox">Special Rate Offers</lable> for women and farmers.
                               </li>
                           </ul>
                           <img src="./gold pic.jpg"/>
                       </div><br/>
                       <GoldLoanapi />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
