import React,{useState,useEffect} from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import Navadmin from './Navadmin'

export default function PdfConverter() {
    const [loandata, setLoandata] = useState([]);
    // useEffect(() => {
    //     const mydata=fetch("http://localhost:8080/api/goldloan").then(res => res.json()).then(res => {
    //         console.log(res);
    //         setLoandata(res);
    //     }).catch(e => {
    //         console.error("ERR in  data");
    //         console.error(e);
    //     }).finally(() => {
    //         console.log("I am in finally block!!!!");
    //     });
    // }
    const fetchAll=(e)=>
    {
        e.preventDefault();
        const mydata=fetch("http://localhost:8080/api/goldloan").then(res => res.json()).then(res => {
                    console.log(res);
                    setLoandata(res);
                }).catch(e => {
                    console.error("ERR in  data");
                    console.error(e);
                }).finally(() => {
                    console.log("I am in finally block!!!!");
                });
    }
   const exportPDF=()=>
    {
        const unit = "pt";
        const size = "A1"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 20;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Loan Report";
        const headers = [["KN_number","Applicant_Name","Residental_Address","Date_Of_Birth",
    "Phone_Number","Education","Occupation","Required_Loan","Mode_Of_Disbursement",
    "Account_Holder_Name","Account_Number","IFSC_Code","Annual_income","Purpose_Of_loan"]];
    
        const data = loandata.map(elt=> [elt.kn,elt.aname,elt.raddress,elt.dt,elt.pno,
        elt.edu,elt.occ,elt.rloan,elt.disburse,elt.accname,elt.accno,elt.ifsc,elt.aincome,elt.pol]);
       
        let content = {
            startY: 50,
            head: headers,
            body: data
          };

        doc.text(title, marginLeft, 40);
        console.log(content);
        doc.autoTable(content);
        doc.save("report.pdf")
    }
      
    return (
        <div>
            <Navadmin/>
            <div className="container-fluid">
             <div>
                 <button className="apploan1" onClick={fetchAll}>Get All Customers</button>
                 <div>
                     <br/>
            <form>
                <div className="container-fluid">
                    <div className="box1">
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
                                </tr>
                            </thead>

                            {
                                loandata && loandata.map((x) => {
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
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </form>
                   <div>
                       <button className="apploan1" onClick={() =>exportPDF()}>Generate Report</button>
                   </div>
        </div>
             </div>
            </div>
        </div>
    )
}
