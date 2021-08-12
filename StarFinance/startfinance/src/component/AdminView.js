import React,{useState,useEffect} from 'react';
import Navadmin from './Navadmin';
import { useHistory } from "react-router-dom";

export default function AdminView() {
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
    const handleOnClick=()=>
    {
          console.log("Hello");
          history.push("/aloanform")
    }
    return (
        <div>
          <form>
                <div className="container-fluid">
                    <div className="box1">
                        <div>
                            <Navadmin />
                        </div>
                        <h4 className="adview">Customer Loan Requests</h4>
                        <table className="tabfor">
                            <thead className="the1">
                                <tr>
                                    <th  className="the1">Branch_Name</th>
                                    <th  className="the1">KN_number</th>
                                    <th  className="the1">Applicant_Name</th>
                                </tr>
                            </thead>

                            {
                                loandata && loandata.map((x) => {
                                    return (
                                        <tbody className="tb1">
                                            <tr>
                                                <td className="tb1">{x.branchname}</td>

                                                <td className="tb1">{x.kn}</td>

                                                <td className="tb1">{x.aname}</td>
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
                       <button className="apploan1" onClick={handleOnClick}>Approval page</button>
                   </div>
        </div>
    )
}
